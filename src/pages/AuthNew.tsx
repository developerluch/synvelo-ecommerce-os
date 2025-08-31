'use client';
import {
  memo,
  ReactNode,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  forwardRef,
} from 'react';
import {
  motion,
  useAnimation,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { Eye, EyeOff, Chrome, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// ==================== Input Component ====================

const AnimatedInput = memo(
  forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    function AnimatedInput({ className, type, ...props }, ref) {
      const radius = 100;
      const [visible, setVisible] = useState(false);

      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);

      function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
      }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }

      return (
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
                hsl(var(--primary) / 0.15),
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className='group/input rounded-lg p-[2px] transition duration-300'
        >
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border-none bg-card/50 backdrop-blur-sm px-3 py-2 text-sm text-foreground transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 shadow-input',
              className
            )}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }
  )
);

// ==================== BoxReveal Component ====================

type BoxRevealProps = {
  children: ReactNode;
  width?: string;
  boxColor?: string;
  duration?: number;
  overflow?: string;
  position?: string;
  className?: string;
};

const BoxReveal = memo(function BoxReveal({
  children,
  width = 'fit-content',
  boxColor,
  duration,
  overflow = 'hidden',
  position = 'relative',
  className,
}: BoxRevealProps) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    } else {
      slideControls.start('hidden');
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <section
      ref={ref}
      style={{
        position: position as 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static',
        width,
        overflow,
      }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: duration ?? 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: duration ?? 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor ?? 'hsl(var(--primary))',
          borderRadius: 4,
        }}
      />
    </section>
  );
});

// ==================== Label Component ====================

const Label = memo(function Label({ 
  className, 
  ...props 
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  );
});

// ==================== BottomGradient Component ====================

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-navy to-transparent' />
    </>
  );
};

// ==================== AnimatedForm Component ====================

type FieldType = 'text' | 'email' | 'password';

type Field = {
  label: string;
  required?: boolean;
  type: FieldType;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type AnimatedFormProps = {
  header: string;
  subHeader?: string;
  fields: Field[];
  submitButton: string;
  textVariantButton?: string;
  errorField?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  goTo?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
};

const AnimatedForm = memo(function AnimatedForm({
  header,
  subHeader,
  fields,
  submitButton,
  textVariantButton,
  errorField,
  onSubmit,
  goTo,
  loading = false,
}: AnimatedFormProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { signInWithProvider } = useAuth();

  const toggleVisibility = () => setVisible(!visible);

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const currentErrors: { [key: string]: string } = {};
    const formData = new FormData(event.target as HTMLFormElement);
    
    fields.forEach((field) => {
      const value = formData.get(field.label) as string;

      if (field.required && !value) {
        currentErrors[field.label] = `${field.label} is required`;
      }

      if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
        currentErrors[field.label] = 'Invalid email address';
      }

      if (field.type === 'password' && value && value.length < 6) {
        currentErrors[field.label] = 'Password must be at least 6 characters long';
      }
    });
    return currentErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validateForm(event);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(event);
    } else {
      setErrors(formErrors);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithProvider('google');
    } catch (error) {
      console.error('Google sign in error:', error);
    }
  };

  const handleDiscordSignIn = async () => {
    try {
      await signInWithProvider('discord');
    } catch (error) {
      console.error('Discord sign in error:', error);
    }
  };

  return (
    <section className='max-md:w-full flex flex-col gap-4 w-96 mx-auto'>
      <BoxReveal boxColor='hsl(var(--primary))' duration={0.3}>
        <h2 className='font-bold text-3xl text-foreground'>
          {header}
        </h2>
      </BoxReveal>

      {subHeader && (
        <BoxReveal boxColor='hsl(var(--primary))' duration={0.3} className='pb-2'>
          <p className='text-muted-foreground text-sm max-w-sm'>
            {subHeader}
          </p>
        </BoxReveal>
      )}

      <BoxReveal boxColor='hsl(var(--primary))' duration={0.3} overflow='visible' width='unset'>
        <button
          className='group/btn bg-glass backdrop-blur-sm border border-glass-border w-full rounded-lg h-10 font-medium hover:bg-glass-background-hover transition-all duration-300 disabled:opacity-50 relative overflow-hidden'
          type='button'
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <span className='flex items-center justify-center w-full h-full gap-3 relative z-10'>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </span>
          <BottomGradient />
        </button>
      </BoxReveal>

      <BoxReveal boxColor='hsl(var(--primary))' duration={0.3} overflow='visible' width='unset'>
        <button
          className='group/btn bg-[#5865F2]/10 backdrop-blur-sm border border-[#5865F2]/20 w-full rounded-lg h-10 font-medium hover:bg-[#5865F2]/20 transition-all duration-300 disabled:opacity-50 relative overflow-hidden'
          type='button'
          onClick={handleDiscordSignIn}
          disabled={loading}
        >
          <span className='flex items-center justify-center w-full h-full gap-3 relative z-10 text-[#5865F2]'>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Continue with Discord
          </span>
          <BottomGradient />
        </button>
      </BoxReveal>

      <BoxReveal boxColor='hsl(var(--primary))' duration={0.3} width='100%'>
        <section className='flex items-center gap-4'>
          <hr className='flex-1 border-t border-border/50' />
          <p className='text-muted-foreground text-sm'>or</p>
          <hr className='flex-1 border-t border-border/50' />
        </section>
      </BoxReveal>

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <section key={field.label} className='flex flex-col gap-2 mb-4'>
            <BoxReveal boxColor='hsl(var(--primary))' duration={0.3}>
              <Label htmlFor={field.label}>
                {field.label} <span className='text-destructive'>*</span>
              </Label>
            </BoxReveal>

            <BoxReveal 
              width='100%' 
              boxColor='hsl(var(--primary))' 
              duration={0.3} 
              className='flex flex-col space-y-2 w-full'
            >
              <section className='relative'>
                <AnimatedInput
                  type={
                    field.type === 'password'
                      ? visible
                        ? 'text'
                        : 'password'
                      : field.type
                  }
                  id={field.label}
                  name={field.label}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                />

                {field.type === 'password' && (
                  <button
                    type='button'
                    onClick={toggleVisibility}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-muted-foreground hover:text-foreground transition-colors z-10'
                  >
                    {visible ? (
                      <Eye className='h-5 w-5' />
                    ) : (
                      <EyeOff className='h-5 w-5' />
                    )}
                  </button>
                )}
              </section>

              <section className='h-4'>
                {errors[field.label] && (
                  <p className='text-destructive text-xs'>{errors[field.label]}</p>
                )}
              </section>
            </BoxReveal>
          </section>
        ))}

        <BoxReveal width='100%' boxColor='hsl(var(--primary))' duration={0.3}>
          {errorField && (
            <p className='text-destructive text-sm mb-4'>{errorField}</p>
          )}
        </BoxReveal>

        <BoxReveal 
          width='100%' 
          boxColor='hsl(var(--primary))' 
          duration={0.3} 
          overflow='visible'
        >
          <button
            className='bg-gradient-to-br relative group/btn from-primary/90 to-primary w-full text-primary-foreground rounded-lg h-10 font-medium hover:from-primary hover:to-primary/90 transition-all duration-300 disabled:opacity-50 overflow-hidden'
            type='submit'
            disabled={loading}
          >
            <span className='relative z-10'>
              {loading ? 'Loading...' : `${submitButton} →`}
            </span>
            <BottomGradient />
          </button>
        </BoxReveal>

        {textVariantButton && goTo && (
          <BoxReveal boxColor='hsl(var(--primary))' duration={0.3}>
            <section className='mt-4 text-center'>
              <button
                type="button"
                className='text-sm text-primary hover:text-primary/80 transition-colors'
                onClick={goTo}
              >
                {textVariantButton}
              </button>
            </section>
          </BoxReveal>
        )}
      </form>
    </section>
  );
});

// ==================== Main Auth Component ====================

export default function AuthNew() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setError('');
    setLoading(true);
    
    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          setError(error.message);
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  const formFields = [
    {
      label: 'Email',
      required: true,
      type: 'email' as const,
      placeholder: 'Enter your email',
      value: email,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      label: 'Password',
      required: true,
      type: 'password' as const,
      placeholder: 'Enter your password',
      value: password,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Back to Home Link */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </button>
      
      <div className="relative w-full max-w-md z-10">
        <div className="glass border border-glass-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-md"></div>
          
          <div className="relative z-10">
            <AnimatedForm
              header={isSignUp ? 'Create Account' : 'Welcome Back'}
              subHeader={
                isSignUp
                  ? 'Create your account to get started'
                  : 'Sign in to your account to continue'
              }
              fields={formFields}
              submitButton={isSignUp ? 'Sign Up' : 'Sign In'}
              textVariantButton={
                isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"
              }
              errorField={error}
              onSubmit={handleSubmit}
              goTo={toggleMode}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}