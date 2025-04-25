import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-primary text-accent hover:bg-primary-dark',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-accent',
    secondary: 'bg-secondary text-accent hover:bg-secondary-light',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (to) {
    return <Link to={to} className={allClasses}>{children}</Link>;
  }
  
  if (href) {
    return <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  
  return (
    <button type={type} onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
};

export default Button;