'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-red-600 py-16">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Begin Your UK Education Journey
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Get expert guidance on studying in the UK. Book a free consultation today.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="px-8 text-red-600"
          >
            <Link href="/get-started?serviceName=Study in UK&fromPage=UK_CTA">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}