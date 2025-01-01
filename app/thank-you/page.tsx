'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />
          <h1 className="mb-4 text-3xl font-bold">Thank You!</h1>
          <p className="mb-8 text-lg text-gray-600">
            Your consultation has been booked successfully. We'll contact you shortly to confirm your appointment.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/test-prep">Explore Test Prep</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}