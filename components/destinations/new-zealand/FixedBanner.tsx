'use client';

import { useState } from 'react'; // Import useState for managing banner visibility
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Sparkles, X } from 'lucide-react';

export default function FixedBanner() {
  const [isVisible, setIsVisible] = useState(true); // State to manage banner visibility

  // If the banner is not visible, don't render it
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-gradient-to-r from-green-500 to-blue-600 py-4 shadow-lg">
      <Container>
        <div className="relative flex flex-col items-center justify-between gap-4 text-white sm:flex-row">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-white" />
            <div>
              <p className="text-lg font-semibold">
                Start Your New Zealand Education Journey Today!
              </p>
              <p className="text-white/90">
                Book your free counselling session worth ₹2,000 and get expert guidance!
              </p>
            </div>
          </div>
          <Button 
            asChild
            size="lg"
            className="whitespace-nowrap bg-white text-green-600 hover:bg-gray-200"
          >
            <Link href="/get-started?serviceName=Free Counselling&fromPage=New-Zealand_FixedCounsellingBanner">Book Free Consultation</Link>
          </Button>
          {/* Dismiss button */}
          <button
            onClick={() => setIsVisible(false)} // Hide the banner when clicked
            className="absolute top-2 right-2 rounded-full bg-white/20 p-2 hover:bg-white/40 sm:static sm:ml-4 sm:mt-0"
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
}
