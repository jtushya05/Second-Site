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
            Begin Your Irish Education Journey
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Discover top universities and programs in Ireland. Book a free consultation today.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="px-8 bg-white text-green-600 hover:bg-orange-500 hover:text-white"
          >
            <Link href="/get-started?serviceName=Irish Education&fromPage=Ireland_CTA">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
