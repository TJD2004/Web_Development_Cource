import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => (
  <div className={`w-full relative ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
    />
  </div>
);

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold mb-1 ${className}`}>
    {children}
  </h3>
);

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>
    {children}
  </p>
);

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`px-4 py-3 bg-gray-50 ${className}`}>
    {children}
  </div>
);

export default Object.assign(Card, {
  Image: CardImage,
  Content: CardContent,
  Title: CardTitle,
  Description: CardDescription,
  Footer: CardFooter,
});