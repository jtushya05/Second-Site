'use client';

import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/src/data/destinations';

export default function DestinationsMenu() {
  return (
    <div className="grid w-[600px] gap-4 p-6 md:grid-cols-2">
      {destinations.map((destination) => (
        <Link
          key={destination.id}
          href={`/destinations/${destination.slug}`}
          className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-accent"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-md">
            <Image
              src={destination.flagUrl}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{destination.name}</h3>
            <p className="text-sm text-gray-500">{destination.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}