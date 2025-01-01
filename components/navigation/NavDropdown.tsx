'use client';

import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import TestPrepMenu from './TestPrepMenu';
import DestinationsMenu from './DestinationsMenu';

interface NavDropdownProps {
  label: string;
  scrolled: boolean;
  variant?: 'default' | 'transparent' | 'solid';
  type: 'destinations' | 'test-prep';
}

export function NavDropdown({ label, scrolled, variant = 'default', type }: NavDropdownProps) {
  const getTriggerStyles = () => {
    const baseStyles = "h-10 px-4 py-2 text-base font-medium transition-colors hover:text-primary bg-transparent";
    
    if (variant === 'transparent') {
      return cn(
        baseStyles,
        scrolled 
          ? "text-gray-700 data-[state=open]:bg-accent/50" 
          : "text-white data-[state=open]:bg-white/10"
      );
    }
    
    return cn(baseStyles, "text-gray-700 data-[state=open]:bg-accent/50");
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={getTriggerStyles()}>
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white/90 backdrop-blur-md">
        {type === 'test-prep' ? <TestPrepMenu /> : <DestinationsMenu />}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}