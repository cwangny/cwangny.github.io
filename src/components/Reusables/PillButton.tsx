import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export default function PillButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: PillButtonProps) {
  const baseClasses = "rounded-full bg-white/10 backdrop-blur-md shadow-lg transition-all duration-200 hover:bg-white/20 hover:shadow-xl";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "hover:opacity-90",
    secondary: "hover:opacity-80"
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}