'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Oxford',
    location: 'Oxford',
    ranking: '#1 in UK',
    specialties: 'Research, Arts & Sciences',
    image: 'https://images.unsplash.com/photo-1548793977-f3602d88d5f2?q=80&w=1200'
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge',
    ranking: '#2 in UK',
    specialties: 'Sciences, Engineering',
    image: 'https://images.unsplash.com/photo-1579556090562-e9b23ffd1d48?q=80&w=1200'
  },
  {
    name: 'Imperial College London',
    location: 'London',
    ranking: '#3 in UK',
    specialties: 'Engineering, Medicine',
    image: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?q=80&w=1200'
  },
  {
    name: 'University College London',
    location: 'London',
    ranking: '#4 in UK',
    specialties: 'Arts, Sciences, Engineering',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200'
  },
  {
    name: 'London School of Economics',
    location: 'London',
    ranking: '#5 in UK',
    specialties: 'Economics, Social Sciences',
    image: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d?q=80&w=1200'
  },
  {
    name: 'University of Manchester',
    location: 'Manchester',
    ranking: '#6 in UK',
    specialties: 'Engineering, Business',
    image: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1200'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore some of the UK's most prestigious educational institutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <Card key={university.name} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{university.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{university.location}</p>
                <div className="space-y-2">
                  <p><span className="font-medium">Ranking:</span> {university.ranking}</p>
                  <p><span className="font-medium">Known for:</span> {university.specialties}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}