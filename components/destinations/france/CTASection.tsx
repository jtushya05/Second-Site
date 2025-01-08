'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-green-600 py-16">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Start Your New Zealand Education Journey
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Explore top universities and programs in New Zealand. Book a free consultation today.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="px-8 text-green-600"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
