'use client';

import { Container } from '@/components/ui/container';
import { destinations } from '@/src/data/navigation';
import DestinationCard from '@/components/destinations/DestinationCard';
import DestinationsHero from '@/components/destinations/DestinationsHero';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen pt-20">
      <DestinationsHero />
      
      <Container className="py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Popular Study Destinations</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore top educational destinations chosen by our students for their academic journey
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination} 
              name={destination}
              href={`/destinations/${destination.toLowerCase().replace(' ', '-')}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}