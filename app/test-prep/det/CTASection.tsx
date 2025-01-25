'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="rounded-lg bg-blue-50 p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold">Start Your DET Journey Today</h2>
      <p className="mb-6 text-lg text-gray-600">
        Join our specialized DET preparation program and achieve your target score efficiently
      </p>
      <Button asChild size="lg" className="px-8">
        <Link href="/get-started?serviceName=DET Preparation&fromPage=DET_CTA">Enroll Now</Link>
      </Button>
    </section>
  );
}