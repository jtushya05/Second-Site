'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { destinationImages } from '@/src/data/destination-images';

export interface DestinationCardProps {
  name: string;
  href: string;
}

export default function DestinationCard({ name, href }: DestinationCardProps) {
  const image = destinationImages[name as keyof typeof destinationImages];
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48">
        <Image
          src={image.url}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <p className="mb-4 text-sm text-gray-600">{image.description}</p>
        <Button asChild className="w-full">
          <Link href={href} className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
