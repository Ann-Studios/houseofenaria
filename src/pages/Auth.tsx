import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.webp';

const Auth = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate('/');
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Welcome back!');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
        toast.success('Account created! You can now sign in.');
        setIsLogin(true);
      }
    } catch (error: any) {
      if (error.message.includes('User already registered')) {
        toast.error('This email is already registered. Please sign in.');
      } else if (error.message.includes('Invalid login credentials')) {
        toast.error('Invalid email or password');
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <a href="/" className="inline-block mb-6">
            <img src={logo} alt="House of Enaria" className="h-16 mx-auto" />
          </a>
          <h1 className="font-display text-3xl md:text-4xl font-light mb-2">
            {isLogin ? t('auth.welcomeBack') : t('auth.create')}
          </h1>
          <p className="font-body text-muted-foreground">
            {isLogin ? t('auth.signInDesc') : t('auth.joinDesc')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-sm tracking-wider uppercase">
              {t('auth.email')}
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="font-body"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-body text-sm tracking-wider uppercase">
              {t('auth.password')}
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="font-body"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full font-body text-xs tracking-widest uppercase py-6">
            {loading ? t('auth.loading') : isLogin ? t('auth.signIn') : t('auth.createBtn')}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <button onClick={() => setIsLogin(!isLogin)} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
          </button>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            {t('auth.back')}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
