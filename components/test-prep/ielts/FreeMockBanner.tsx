'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function FreeMockBanner() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-gradient-to-r from-gray-900 to-gray-800 py-2 text-white shadow-lg">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <p className="text-sm font-medium sm:text-base">
              <span className="font-bold text-yellow-400">Limited Time Offer:</span> Get a FREE IELTS Speaking Mock Test Worth ₹1,000!
            </p>
          </div>
          <Button 
            asChild
            size="sm"
            className="whitespace-nowrap bg-yellow-400 text-gray-900 hover:bg-yellow-500"
          >
            <Link href="/get-started?service=ielts-mock">Book Your Free Test</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}