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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "translate-y-0 bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60" 
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo scrolled={scrolled} />
        
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavLink href="/" scrolled={scrolled}>Home</NavLink>
              <NavLink href="/about" scrolled={scrolled}>About Us</NavLink>
              <NavDropdown 
                label="Study Abroad" 
                scrolled={scrolled} 
                type="destinations"
              />
              <NavDropdown 
                label="Test Prep" 
                scrolled={scrolled} 
                type="test-prep"
              />
              <NavLink href="/testimonials" scrolled={scrolled}>Testimonials</NavLink>
              <NavLink href="/contact" scrolled={scrolled}>Contact</NavLink>
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            asChild
            size="lg"
            className={`px-6 text-base font-semibold ${
              scrolled 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-white text-blue-600 hover:bg-white/90"
            }`}
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        <button 
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            scrolled 
              ? "border border-gray-200 bg-white text-gray-700" 
              : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} />
    </header>
  );
}