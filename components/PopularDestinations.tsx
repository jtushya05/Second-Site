import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/container';

const destinations = [
  
  {
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200',
    description: 'Rich academic heritage and cultural experience'
  },
  {
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200',
    description: 'High quality of life and post-study work opportunities'
  },
  {
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200',
    description: 'Innovation in education and vibrant student life'
  },
  {
    name: 'United States',
    image: 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=1200',
    description: 'World-class universities and diverse opportunities'
  }
];

export default function PopularDestinations() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Popular Study Destinations</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore top educational destinations chosen by our students for their academic journey
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <Link key={destination.name} href={`/destinations/${destination.name.toLowerCase().replace(' ', '-')}`}>
              <Card className="overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 font-semibold">{destination.name}</h3>
                  <p className="text-sm text-gray-600">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}