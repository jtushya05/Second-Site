'use client';

import * as React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function DestinationsHero() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2000"
        alt="Study Destinations"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
              Study Abroad Destinations
            </h1>
            <p className="text-lg text-white/90">
              Discover world-class education opportunities in leading destinations around the globe
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
