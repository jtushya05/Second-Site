'use client';

import { Container } from 'components/ui/container';

export default function PTEHeroSection() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Container>
        <div className="absolute inset-0 flex items-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            PTE Preparation
          </h1>
          <p className="text-lg text-white/90">
            Get ready for your PTE exam with our comprehensive preparation courses.
          </p>
        </div>
      </Container>
    </section>
  );
}
