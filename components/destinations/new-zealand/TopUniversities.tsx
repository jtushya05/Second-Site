'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Auckland',
    location: 'Auckland',
    ranking: '#1 in New Zealand',
    specialties: 'Research, Engineering, Business',
    image: 'https://images.unsplash.com/photo-1598814372785-b5b16abe9e23?q=80&w=1200'
  },
  {
    name: 'University of Otago',
    location: 'Dunedin',
    ranking: '#2 in New Zealand',
    specialties: 'Medicine, Sciences, Law',
    image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?q=80&w=1200'
  },
  {
    name: 'Victoria University of Wellington',
    location: 'Wellington',
    ranking: '#3 in New Zealand',
    specialties: 'Politics, Arts, Business',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1200'
  },
  {
    name: 'University of Canterbury',
    location: 'Christchurch',
    ranking: '#4 in New Zealand',
    specialties: 'Engineering, IT, Environmental Sciences',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200'
  },
  {
    name: 'Massey University',
    location: 'Palmerston North',
    ranking: '#5 in New Zealand',
    specialties: 'Agriculture, Veterinary, Aviation',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200'
  },
  {
    name: 'Lincoln University',
    location: 'Lincoln',
    ranking: '#6 in New Zealand',
    specialties: 'Agriculture, Environment, Commerce',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-green-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-800">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Explore New Zealand's most prestigious educational institutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <Card key={university.name} className="overflow-hidden shadow-md hover:shadow-lg">
              <div className="relative h-48">
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-green-800">{university.name}</h3>
                <p className="mb-4 text-sm text-green-600">{university.location}</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-green-800">Ranking:</span> {university.ranking}
                  </p>
                  <p>
                    <span className="font-medium text-green-800">Known for:</span> {university.specialties}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
