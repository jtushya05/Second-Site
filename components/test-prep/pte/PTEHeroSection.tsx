'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function PTEHeroSection() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
        alt="PTE Academic Preparation"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              PTE Academic Preparation
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Master the computer-based English proficiency test with our expert guidance
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}