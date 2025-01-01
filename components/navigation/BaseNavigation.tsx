'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/hooks/use-scroll';
import { NavLink } from '@/components/navigation/NavLink';
import { NavDropdown } from '@/components/navigation/NavDropdown';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { cn } from '@/lib/utils';

export interface NavigationStyles {
  header?: string;
  container?: string;
  logo?: string;
  menuTrigger?: string;
  desktopNav?: string;
  mobileNav?: string;
  getStartedButton?: string;
}

interface BaseNavigationProps {
  styles?: NavigationStyles;
  variant?: 'default' | 'transparent' | 'solid';
}

export default function BaseNavigation({ styles = {}, variant = 'default' }: BaseNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);

  const getHeaderStyles = () => {
    const baseStyles = "fixed top-0 z-50 w-full transition-all duration-300";
    
    if (variant === 'transparent') {
      return cn(
        baseStyles,
        scrolled 
          ? "translate-y-0 bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60" 
          : "bg-transparent",
        styles.header
      );
    }
    
    if (variant === 'solid') {
      return cn(baseStyles, "bg-white shadow-md", styles.header);
    }
    
    // Default variant
    return cn(baseStyles, styles.header);
  };

  const getLogoStyles = () => {
    if (variant === 'transparent') {
      return cn(scrolled ? "text-blue-600" : "text-white", styles.logo);
    }
    return cn("text-blue-600", styles.logo);
  };

  const getButtonStyles = () => {
    if (variant === 'transparent') {
      return cn(
        "px-6 text-base font-semibold",
        scrolled 
          ? "bg-blue-600 hover:bg-blue-700 text-white" 
          : "bg-white text-blue-600 hover:bg-white/90",
        styles.getStartedButton
      );
    }
    return cn(
      "px-6 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white",
      styles.getStartedButton
    );
  };

  return (
    <header className={getHeaderStyles()}>
      <div className={cn("container flex h-20 items-center justify-between", styles.container)}>
        <Logo className={getLogoStyles()} />
        
        <div className={cn("hidden md:flex md:items-center md:gap-6", styles.desktopNav)}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavLink href="/" scrolled={scrolled} variant={variant}>Home</NavLink>
              <NavLink href="/about" scrolled={scrolled} variant={variant}>About Us</NavLink>
              <NavDropdown 
                label="Study Abroad" 
                scrolled={scrolled} 
                variant={variant}
                type="destinations"
              />
              <NavDropdown 
                label="Test Prep" 
                scrolled={scrolled} 
                variant={variant}
                type="test-prep"
              />
              <NavLink href="/testimonials" scrolled={scrolled} variant={variant}>Testimonials</NavLink>
              <NavLink href="/contact" scrolled={scrolled} variant={variant}>Contact</NavLink>
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            asChild
            size="lg"
            className={getButtonStyles()}
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        <button 
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden",
            variant === 'transparent' && !scrolled ? "text-white" : "border border-gray-200 bg-white text-gray-700",
            styles.menuTrigger
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        className={cn(styles.mobileNav)}
      />
    </header>
  );
}