'use client';

import { Container } from '@/components/ui/container';
import TestimonialGrid from '@/components/testimonials/TestimonialGrid';
import TestimonialHero from '@/components/testimonials/TestimonialHero';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* This is a temporary banner */}
      <div className="bg-yellow-200 text-center py-4">
        <p className="text-yellow-800">This page is currently under development. There may be mistakes or errors. Thank you for your understanding.</p>
      </div>
      {/* End of temporary banner */}
      <TestimonialHero />
      <Container className="py-16">
        <TestimonialGrid />
      </Container>
    </div>
  );
}