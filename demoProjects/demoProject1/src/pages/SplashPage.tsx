import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Logo from '../components/Logo';

const SplashPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to login page after a delay
    const timeout = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <PageTransition>
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-600">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center"
        >
          <Logo size="large" withText={true} className="text-white" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1 }}
            className="h-1 bg-white mt-4 rounded-full opacity-70"
          />
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SplashPage;