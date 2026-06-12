'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'solid' | 'outline';
}

export function Button({
  children,
  variant = 'solid',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-200 text-center inline-flex items-center justify-center select-none active:scale-[0.98]";

  const variantStyles = {
    solid: "bg-brand text-white hover:bg-brand/90 shadow-sm hover:shadow-md",
    outline: "border-2 border-brand text-brand bg-transparent hover:bg-[#FFF5F5]"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}