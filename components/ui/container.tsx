'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({ 
  children, 
  className,
  as: Component = 'div',
  ...props 
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
