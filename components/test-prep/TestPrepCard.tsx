'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface TestPrepCardProps {
  test: {
    name: string;
    path: string;
    logo: string;
  };
}

export default function TestPrepCard({ test }: TestPrepCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={test.logo}
          alt={test.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-semibold">{test.name}</h3>
        <Button asChild className="w-full">
          <Link href={test.path} className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}