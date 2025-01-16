'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingContactWidgets() {
  return (
    <div className="fixed bottom-8 left-0 z-50 flex flex-col gap-5">
      {/* Call Widget */}
      <a
        href="tel:+919874563210"
        className="group relative flex h-[50px] w-[50px] items-center overflow-hidden rounded-r-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:w-[140px]"
      >
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <Phone className="h-6 w-6" />
        </div>
        <span className="whitespace-nowrap pr-6 font-medium">
          Call Now
        </span>
      </a>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/919874563210"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-[50px] w-[50px] items-center overflow-hidden rounded-r-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:w-[200px]"
      >
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
          <MessageCircle className="h-6 w-6" />
        </div>
        <span className="whitespace-nowrap pr-6 font-medium">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}