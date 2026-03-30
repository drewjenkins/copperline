import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  to?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-amber-700 text-stone-50 hover:bg-amber-800 active:bg-amber-900',
  secondary: 'bg-stone-900 text-stone-50 hover:bg-stone-800 active:bg-stone-950',
  outline: 'border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-stone-50',
  ghost: 'text-stone-700 hover:bg-stone-100 hover:text-stone-900',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  fullWidth,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-200 rounded-none cursor-pointer select-none';
  const classes = [base, variantClasses[variant], sizeClasses[size], fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

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
