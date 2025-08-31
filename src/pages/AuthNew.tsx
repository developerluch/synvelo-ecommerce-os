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
import { Eye, EyeOff, Github, Chrome } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// ==================== Input Component ====================

const LightInput = memo(
  forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    function LightInput({ className, type, ...props }, ref) {
      return (
        <div className='group/input rounded-lg p-[2px] bg-gradient-to-r from-background to-muted/20 hover:from-primary/10 hover:to-accent/10 transition-all duration-200'>
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
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

const SimpleReveal = memo(function SimpleReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
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
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
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

  return (
    <section className='max-md:w-full flex flex-col gap-4 w-96 mx-auto'>
      <SimpleReveal delay={0.1}>
        <h2 className='font-bold text-3xl text-foreground'>
          {header}
        </h2>
      </SimpleReveal>

      {subHeader && (
        <SimpleReveal delay={0.2} className='pb-2'>
          <p className='text-muted-foreground text-sm max-w-sm'>
            {subHeader}
          </p>
        </SimpleReveal>
      )}

      <SimpleReveal delay={0.3}>
        <button
          className='g-button group/btn bg-transparent w-full rounded-md border h-10 font-medium hover:bg-accent/10 transition-colors disabled:opacity-50'
          type='button'
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <span className='flex items-center justify-center w-full h-full gap-3'>
            <Chrome className="w-5 h-5" />
            Continue with Google
          </span>
        </button>
      </SimpleReveal>

      <SimpleReveal delay={0.4}>
        <section className='flex items-center gap-4'>
          <hr className='flex-1 border-t border-border' />
          <p className='text-muted-foreground text-sm'>or</p>
          <hr className='flex-1 border-t border-border' />
        </section>
      </SimpleReveal>

      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <section key={field.label} className='flex flex-col gap-2 mb-4'>
            <SimpleReveal delay={0.5 + index * 0.1}>
              <Label htmlFor={field.label}>
                {field.label} <span className='text-destructive'>*</span>
              </Label>
            </SimpleReveal>

            <SimpleReveal delay={0.6 + index * 0.1} className='flex flex-col space-y-2 w-full'>
              <section className='relative'>
                <LightInput
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
                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-muted-foreground hover:text-foreground transition-colors'
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
            </SimpleReveal>
          </section>
        ))}

        <SimpleReveal delay={0.8}>
          {errorField && (
            <p className='text-destructive text-sm mb-4'>{errorField}</p>
          )}
        </SimpleReveal>

        <SimpleReveal delay={0.9}>
          <Button
            className='w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground'
            type='submit'
            disabled={loading}
          >
            {loading ? 'Loading...' : `${submitButton} →`}
          </Button>
        </SimpleReveal>

        {textVariantButton && goTo && (
          <SimpleReveal delay={1.0}>
            <section className='mt-4 text-center'>
              <button
                type="button"
                className='text-sm text-primary hover:text-primary/80 transition-colors'
                onClick={goTo}
              >
                {textVariantButton}
              </button>
            </section>
          </SimpleReveal>
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
      navigate('/');
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
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
  );
}