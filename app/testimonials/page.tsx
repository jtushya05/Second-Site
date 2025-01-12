'use client';

import { Container } from '@/components/ui/container';
import TestimonialGrid from '@/components/testimonials/TestimonialGrid';
import TestimonialHero from '@/components/testimonials/TestimonialHero';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20">
      <TestimonialHero />
      <Container className="py-16">
        <TestimonialGrid />
      </Container>
    </div>
  );
}