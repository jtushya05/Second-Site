'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OETPrepPage() {
  return (
    <div className="min-h-screen pt-32">
      <Container className="text-center">
        <h1 className="mb-6 text-4xl font-bold">OET Preparation</h1>
        <p className="mb-8 text-xl text-gray-600">Content Coming Soon</p>
        <Button asChild>
          <Link href="/get-started">Get Started</Link>
        </Button>
      </Container>
    </div>
  );
}