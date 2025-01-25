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
            Begin Your Singapore Education Journey
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Explore top universities and programs in Singapore. Book a free consultation today.
          </p>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="px-8 bg-white text-red-600 hover:bg-gray-200 hover:text-red-700"
          >
            <Link href="/get-started?serviceName=Study Abroad&fromPage=Singapore_CTA">Get Started</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
