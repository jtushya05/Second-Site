'use client';

import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/src/data/navigation';

export default function DestinationsMenu() {
  return (
    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
      {destinations.map((destination) => (
        <Link
          key={destination}
          href={`/destinations/${destination.toLowerCase().replace(' ', '-')}`}
          className="flex items-center gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src={`https://flagcdn.com/${destination === 'United States' ? 'us' : 
                    destination === 'United Kingdom' ? 'gb' : 
                    destination === 'Sweden' ? 'se' :
                    destination === 'France' ? 'fr' :
                    destination === 'Germany' ? 'de' :
                    destination === 'New Zealand' ? 'nz' :
                    destination === 'Ireland' ? 'ie' :
                    destination === 'Singapore' ? 'sg' :  
                    destination.toLowerCase().slice(0, 2)}.svg`}
              alt={destination}
              fill
              className="object-cover"
            />
          </div>
          <span>{destination}</span>
        </Link>
      ))}
    </div>
  );
}