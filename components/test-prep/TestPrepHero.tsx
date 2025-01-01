'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function TestPrepHero() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000"
        alt="Test Preparation"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
              Test Preparation Programs
            </h1>
            <p className="text-lg text-white/90">
              Expert coaching and comprehensive preparation for all major English proficiency tests
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}