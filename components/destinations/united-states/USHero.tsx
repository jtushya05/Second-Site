'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function USHero() {
  return (
    <section className="relative min-h-[60vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=2070"
        alt="Study in USA"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Study in the United States
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Discover world-class education opportunities at prestigious American universities. 
              Your journey to academic excellence in the USA starts here.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}