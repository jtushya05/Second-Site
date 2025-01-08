'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-blue-700 py-16">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Start Your Education Journey in France
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Discover top universities and programs in France. Book a free consultation today.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-8 text-blue-700">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
