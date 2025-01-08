'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { destinations, testPrep } from '@/src/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  className?: string; //added className prop
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <div className="border-t bg-white/95 backdrop-blur md:hidden">
      <nav className="container flex flex-col space-y-4 py-6">
        <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-900 hover:text-blue-600">About Us</Link>
        
        {/* Study Abroad Dropdown */}
        <div className="space-y-2">
          <button
            onClick={() => toggleSubmenu('destinations')}
            className="flex w-full items-center justify-between text-gray-900 hover:text-blue-600"
          >
            <span>Study Abroad</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${
              openSubmenu === 'destinations' ? 'rotate-180' : ''
            }`} />
          </button>
          {openSubmenu === 'destinations' && (
            <div className="ml-4 space-y-2">
              {destinations.map((destination) => (
                <Link
                  key={destination}
                  href={`/destinations/${destination.toLowerCase().replace(' ', '-')}`}
                  className="block py-1 text-gray-600 hover:text-blue-600"
                >
                  {destination}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Test Prep Dropdown */}
        <div className="space-y-2">
          <button
            onClick={() => toggleSubmenu('test-prep')}
            className="flex w-full items-center justify-between text-gray-900 hover:text-blue-600"
          >
            <span>Test Prep</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${
              openSubmenu === 'test-prep' ? 'rotate-180' : ''
            }`} />
          </button>
          {openSubmenu === 'test-prep' && (
            <div className="ml-4 space-y-2">
              {testPrep.map((test) => (
                <Link
                  key={test.path}
                  href={test.path}
                  className="block py-1 text-gray-600 hover:text-blue-600"
                >
                  {test.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/testimonials" className="text-gray-900 hover:text-blue-600">Testimonials</Link>
        <Link href="/contact" className="text-gray-900 hover:text-blue-600">Contact</Link>
        
        <Button 
          asChild 
          size="lg"
          className="mt-4 w-full bg-blue-600 text-base font-semibold hover:bg-blue-700"
        >
          <Link href="/get-started">Get Started</Link>
        </Button>
      </nav>
    </div>
  );
}