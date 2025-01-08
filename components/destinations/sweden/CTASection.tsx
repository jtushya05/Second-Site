'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-blue-800 py-16">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-yellow-500">
            Begin Your Swedish Education Journey
          </h2>
          <p className="mb-8 text-lg text-white">
            Explore world-class universities and innovative programs in Sweden. Book a free consultation today.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="px-8 text-blue-800 bg-yellow-500 hover:bg-yellow-600"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
