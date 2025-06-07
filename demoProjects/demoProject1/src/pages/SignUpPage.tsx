import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextField from '../components/TextField';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate and create an account here
    navigate('/home');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Logo size="large" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Start your educational journey today
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          >
            <form className="space-y-6" onSubmit={handleSignUp}>
              <TextField
                label="Full name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <TextField
                label="Email address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                  <span className="text-error-600 ml-1">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Password must be at least 8 characters long
                </p>
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className="w-full"
                >
                  Create account
                </Button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  size="large"
                  className="w-full"
                  onClick={() => navigate('/login')}
                >
                  Sign in
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SignUpPage;