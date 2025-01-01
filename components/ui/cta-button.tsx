'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  href: string;
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export function CTAButton({ href, variant = 'default', className, children }: CTAButtonProps) {
  const isExternal = href.startsWith('http');
  const buttonClassName = cn(
    'h-14 px-8 text-lg font-medium',
    variant === 'default' 
      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
      : 'border-2 bg-transparent text-white hover:bg-white hover:text-blue-600',
    className
  );

  return (
    <Button 
      asChild 
      size="lg"
      variant={variant}
      className={buttonClassName}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>
          {children}
        </Link>
      )}
    </Button>
  );
}