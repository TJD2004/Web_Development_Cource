import React from 'react';
import { Lightbulb, BookOpen } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  withText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', withText = true, className = '' }) => {
  const sizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl',
  };

  const iconSizes = {
    small: 20,
    medium: 24,
    large: 32,
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <BookOpen 
          size={iconSizes[size]} 
          className="text-primary-600" 
        />
        <Lightbulb 
          size={iconSizes[size] * 0.6} 
          className="text-secondary-600 absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3" 
        />
      </div>
      {withText && (
        <span className={`ml-2 font-bold ${sizes[size]} bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent`}>
          eduBuddy
        </span>
      )}
    </div>
  );
};

export default Logo;