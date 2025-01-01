'use client';

import Link from 'next/link';
import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  scrolled: boolean;
  variant?: 'default' | 'transparent' | 'solid';
  children: React.ReactNode;
}

export function NavLink({ href, scrolled, variant = 'default', children }: NavLinkProps) {
  const getLinkStyles = () => {
    const baseStyles = "px-4 py-2 hover:text-primary";
    
    if (variant === 'transparent') {
      return cn(baseStyles, scrolled ? "text-gray-700" : "text-white");
    }
    
    return cn(baseStyles, "text-gray-700");
  };

  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={getLinkStyles()}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}