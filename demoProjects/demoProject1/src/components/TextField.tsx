import React from 'react';
import { Search } from 'lucide-react';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'search';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: string;
  required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  className = '',
  error,
  required = false,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-error-600 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {type === 'search' && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          className={`w-full rounded-lg border border-gray-300 ${
            type === 'search' ? 'pl-10' : 'px-4'
          } py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
            error ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
      {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
    </div>
  );
};

export default TextField;