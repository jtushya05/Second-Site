'use client';
import { GlobeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={cn("flex items-center gap-2", className)}
    >
      {/* <GlobeIcon className="h-8 w-8" /> */}

      <Image 
        src="/images/logos/EA Global PNG Clover logo canva.png"
        alt="EA Global Logo"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
      <span className="text-2xl font-bold">EA Global</span>
    </Link>
  );
}