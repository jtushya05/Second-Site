'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
        alt="About EA Global"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Empowering Dreams of Global Education
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Since 2010, EA Global has been helping students achieve their dreams of studying abroad through expert guidance and personalized support.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}