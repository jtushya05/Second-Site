'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Lund University',
    location: 'Lund',
    ranking: '#1 in Sweden',
    specialties: 'Engineering, Business, Medicine',
    image: 'https://images.unsplash.com/photo-1598814372785-b5b16abe9e23?q=80&w=1200',
  },
  {
    name: 'KTH Royal Institute of Technology',
    location: 'Stockholm',
    ranking: '#2 in Sweden',
    specialties: 'Engineering, Technology, Sciences',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200',
  },
  {
    name: 'Uppsala University',
    location: 'Uppsala',
    ranking: '#3 in Sweden',
    specialties: 'Medicine, Humanities, Sciences',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200',
  },
  {
    name: 'Chalmers University of Technology',
    location: 'Gothenburg',
    ranking: '#4 in Sweden',
    specialties: 'Engineering, Architecture, IT',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200',
  },
  {
    name: 'Stockholm University',
    location: 'Stockholm',
    ranking: '#5 in Sweden',
    specialties: 'Social Sciences, Arts, Environmental Studies',
    image: 'https://images.unsplash.com/photo-1521804902910-3cb3bdb7b94e?q=80&w=1200',
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-yellow-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Explore Sweden’s most prestigious educational institutions.
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
                <h3 className="mb-2 text-xl font-semibold text-blue-800">{university.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{university.location}</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-blue-800">Ranking:</span> {university.ranking}
                  </p>
                  <p>
                    <span className="font-medium text-blue-800">Known for:</span>{' '}
                    {university.specialties}
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
