'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Technical University of Munich',
    location: 'Munich',
    ranking: '#1 in Germany',
    specialties: 'Engineering, Technology',
    image: 'https://images.unsplash.com/photo-1597581729358-7429e1b731bd?q=80&w=1200'
  },
  {
    name: 'Ludwig Maximilian University',
    location: 'Munich',
    ranking: '#2 in Germany',
    specialties: 'Research, Sciences',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1200'
  },
  {
    name: 'Heidelberg University',
    location: 'Heidelberg',
    ranking: '#3 in Germany',
    specialties: 'Medicine, Sciences',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200'
  },
  {
    name: 'RWTH Aachen University',
    location: 'Aachen',
    ranking: '#4 in Germany',
    specialties: 'Engineering, Technology',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1200'
  },
  {
    name: 'Humboldt University',
    location: 'Berlin',
    ranking: '#5 in Germany',
    specialties: 'Arts, Humanities',
    image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1200'
  },
  {
    name: 'TU Berlin',
    location: 'Berlin',
    ranking: '#6 in Germany',
    specialties: 'Engineering, Technology',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore Germany's most prestigious educational institutions
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