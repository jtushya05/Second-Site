'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

interface CountryHeroProps {
  country: string;
}

export function CountryHero({ country }: CountryHeroProps) {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src={`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070`}
        alt={country}
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white">
              Study in {country}
            </h1>
            <p className="text-lg text-white/90">
              Discover world-class education opportunities in {country}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}