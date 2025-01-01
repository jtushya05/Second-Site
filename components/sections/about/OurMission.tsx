'use client';

import { Container } from '@/components/ui/container';

export default function OurMission() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
          <p className="mb-6 text-lg text-gray-600">
            At EA Global, our mission is to bridge the gap between Indian students and world-class international education. We believe that every student deserves access to quality education that can transform their lives and shape their future.
          </p>
          <p className="text-lg text-gray-600">
            Through personalized guidance, expert counseling, and comprehensive support services, we help students navigate the complex journey of studying abroad, from choosing the right university to settling into their new academic life.
          </p>
        </div>
      </Container>
    </section>
  );
}