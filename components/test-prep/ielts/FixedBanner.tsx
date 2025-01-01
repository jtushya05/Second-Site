'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function FixedBanner() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 p-4">
      <Container>
        <div className="flex items-center justify-between text-white">
          <p className="text-lg font-medium">Ready to start your IELTS preparation?</p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/get-started">Register Now</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}