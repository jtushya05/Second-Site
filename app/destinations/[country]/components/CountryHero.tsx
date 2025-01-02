'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { destinationImages } from '@/src/data/destination-images';

interface CountryHeroProps {
  country: string;
}

export function CountryHero({ country }: CountryHeroProps) {
  const image = destinationImages[country as keyof typeof destinationImages];

  return (
    <section className="relative min-h-[60vh] w-full bg-blue-600">
      <Image
        src={image?.url || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070'}
        alt={country}
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Study in {country}
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              {image?.description || 'Discover world-class education opportunities'}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}