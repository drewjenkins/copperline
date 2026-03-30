import React from 'react';

type BadgeVariant = 'light' | 'medium' | 'dark' | 'new' | 'seasonal' | 'featured' | 'default';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  light: 'bg-amber-100 text-amber-800',
  medium: 'bg-stone-200 text-stone-700',
  dark: 'bg-stone-800 text-stone-100',
  new: 'bg-orange-100 text-orange-700',
  seasonal: 'bg-amber-200 text-amber-900',
  featured: 'bg-amber-700 text-stone-50',
  default: 'bg-stone-100 text-stone-600',
};

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-medium tracking-wider uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
