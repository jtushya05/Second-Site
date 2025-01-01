'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import { navigationItems } from '@/data/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "translate-y-0 bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/60" 
          : "-translate-y-0 bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo scrolled={scrolled} />
        
        <div className="hidden md:flex md:items-center md:gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "h-10 px-4 py-2 text-base font-medium transition-colors hover:text-primary",
                          scrolled ? "text-gray-700 data-[state=open]:bg-accent" : "text-white data-[state=open]:bg-white/10",
                          "bg-transparent"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block select-none rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink 
                        className={cn(
                          "inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium",
                          "transition-colors hover:text-primary",
                          scrolled ? "text-gray-700" : "text-white"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            asChild
            size="lg"
            className={cn(
              "px-6 text-base font-semibold",
              scrolled 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-white text-blue-600 hover:bg-white/90"
            )}
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>

        <button 
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden",
            scrolled 
              ? "border border-gray-200 bg-white text-gray-700" 
              : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white/95 backdrop-blur md:hidden">
          <nav className="container flex flex-col space-y-4 py-6">
            {navigationItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-3">
                    <div className="font-medium text-gray-900">{item.label}</div>
                    <div className="ml-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block text-gray-600 hover:text-blue-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className="block text-gray-900 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button 
              asChild 
              size="lg"
              className="mt-4 w-full bg-blue-600 text-base font-semibold hover:bg-blue-700"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}