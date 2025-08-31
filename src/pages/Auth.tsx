import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { BackgroundPaths } from '@/components/BackgroundPaths';
import { ContainerScroll } from '@/components/ContainerScroll';
import { useAuth } from '@/contexts/AuthContext';
import { Chrome, MessageCircle, ArrowLeft, Sparkles, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, signUp, signIn, signInWithProvider } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignIn = async (provider: 'google' | 'discord') => {
    setLoading(true);
    try {
      await signInWithProvider(provider);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary relative">
      {/* Global Background Paths */}
      <div className="fixed inset-0 z-0">
        <BackgroundPaths />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Back to Home Button */}
        <div className="absolute top-6 left-6 z-20">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        <ContainerScroll
          titleComponent={
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {isSignUp ? 'Join the Future' : 'Welcome Back'}
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  {isSignUp 
                    ? 'Start your eCommerce automation journey today' 
                    : 'Continue your automation journey'
                  }
                </p>
              </motion.div>
              
              <motion.div 
                className="flex justify-center gap-8 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center text-white/70">
                  <Shield className="mr-2 h-5 w-5" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Zap className="mr-2 h-5 w-5" />
                  <span>Fast</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Sparkles className="mr-2 h-5 w-5" />
                  <span>Powerful</span>
                </div>
              </motion.div>
            </div>
          }
        >
          <div className="flex items-center justify-center h-full p-8">
            <Card className="bg-card/95 border-card-border backdrop-blur-sm shadow-2xl max-w-md w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </CardTitle>
                <CardDescription>
                  {isSignUp 
                    ? 'Get started with your free account' 
                    : 'Access your dashboard'
                  }
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* OAuth Providers */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleOAuthSignIn('google')}
                    disabled={loading}
                    className="w-full bg-background/50 border-border hover:bg-background/70 transition-all"
                  >
                    <Chrome className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleOAuthSignIn('discord')}
                    disabled={loading}
                    className="w-full bg-background/50 border-border hover:bg-background/70 transition-all"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Discord
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or with email</span>
                  </div>
                </div>
                
                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/50 border-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-background/50 border-border"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading}
                  >
                    {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
                  </Button>
                </form>
                
                {/* Toggle between Sign In/Sign Up */}
                <div className="text-center">
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {isSignUp 
                      ? 'Already have an account? Sign in' 
                      : "Don't have an account? Sign up"
                    }
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
};

export default Auth;