'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="bg-yellow-500 py-16">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Begin Your Australian Education Journey
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Get expert guidance on studying in Australia. Book a free consultation today.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="px-8 text-yellow-600"
          >
            <Link href="/get-started?serviceName=Australian Education&fromPage=Australia_CTA">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}