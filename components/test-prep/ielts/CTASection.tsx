'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="rounded-lg bg-blue-50 p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold">Start Your IELTS Journey Today</h2>
      <p className="mb-6 text-lg text-gray-600">
        Join our comprehensive IELTS preparation program and achieve your target score
      </p>
      <Button asChild size="lg" className="px-8">
        <Link href="/get-started">Enroll Now</Link>
      </Button>
    </section>
  );
}