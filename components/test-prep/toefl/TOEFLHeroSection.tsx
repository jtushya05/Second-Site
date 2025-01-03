'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function TOEFLHeroSection() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2070"
        alt="TOEFL Preparation"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              TOEFL Preparation
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Master the Test of English as a Foreign Language with expert guidance
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}