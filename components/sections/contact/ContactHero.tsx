'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';

export default function ContactHero() {
  return (
    <section className="relative min-h-[40vh] w-full bg-blue-600">
      <Image
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
        alt="Contact Us"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <Container className="pt-20">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Have questions about studying abroad? Our education consultants are here to help you at every step of your journey.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}