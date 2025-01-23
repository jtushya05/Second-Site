'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Sparkles, X } from 'lucide-react';

export default function FixedBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gradient-to-r from-red-600 to-red-700 py-4 shadow-lg">
      <Container>
        <div className="relative flex flex-col items-center justify-between gap-4 text-white sm:flex-row">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-yellow-300" />
            <div>
              <p className="text-lg font-semibold">
                Begin Your Canadian Education Journey Today!
              </p>
              <p className="text-white/90">
                Book your free counselling session worth ₹2,000 and get expert guidance!
              </p>
            </div>
          </div>
          <Button 
            asChild
            size="lg"
            className="whitespace-nowrap bg-white text-red-600 hover:bg-white/90"
          >
            <Link href="/get-started">Book Free Consultation</Link>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 rounded-full bg-white/20 p-2 hover:bg-white/40 sm:static sm:ml-4 sm:mt-0"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
}