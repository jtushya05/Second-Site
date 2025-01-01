'use client';

import { GlobeIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  scrolled?: boolean;
}

export default function Logo({ scrolled }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-2 transition-colors",
        scrolled ? "text-blue-600" : "text-white"
      )}
    >
      <GlobeIcon className="h-8 w-8" />
      <span className="text-2xl font-bold">EA Global</span>
    </Link>
  );
}