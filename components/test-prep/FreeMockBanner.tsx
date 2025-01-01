'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

interface FreeMockBannerProps {
  testType: string;
}

export default function FreeMockBanner({ testType }: FreeMockBannerProps) {
  return (
    <div className="fixed top-0 z-[60] w-full bg-gradient-to-r from-gray-900 to-gray-800 py-1.5 text-white sm:py-2">
      <Container>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400 sm:h-5 sm:w-5" />
            <p className="text-xs font-medium sm:text-base">
              Get a FREE {testType} Speaking Mock Test Worth ₹1,000!
            </p>
          </div>
          <Button 
            asChild
            size="sm"
            className="h-7 whitespace-nowrap bg-yellow-400 px-2 text-xs font-medium text-gray-900 hover:bg-yellow-500 sm:h-8 sm:px-3 sm:text-sm"
          >
            <Link href={`/get-started?service=${testType.toLowerCase()}-mock`}>Book Your Free Test</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}