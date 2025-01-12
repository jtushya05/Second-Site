'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function TestimonialHero() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
        alt="Student Success Stories"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Student Success Stories
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Hear from our students who have successfully achieved their international education goals
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}