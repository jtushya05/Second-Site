'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Sorbonne University',
    location: 'Paris',
    ranking: '#1 in France',
    specialties: 'Arts, Humanities, Sciences',
    image: 'https://images.unsplash.com/photo-1542803683-79e67a1d4e1b?q=80&w=1200',
  },
  {
    name: 'École Polytechnique',
    location: 'Palaiseau',
    ranking: '#2 in France',
    specialties: 'Engineering, Computer Science, Mathematics',
    image: 'https://images.unsplash.com/photo-1602524208938-6ab1b6b27c3a?q=80&w=1200',
  },
  {
    name: 'HEC Paris',
    location: 'Jouy-en-Josas',
    ranking: '#3 in France',
    specialties: 'Business, Management, Finance',
    image: 'https://images.unsplash.com/photo-1503424886309-09f44b8e6d1a?q=80&w=1200',
  },
  {
    name: 'Sciences Po',
    location: 'Paris',
    ranking: '#4 in France',
    specialties: 'Political Science, International Relations, Economics',
    image: 'https://images.unsplash.com/photo-1519838261223-e66c0b9b2562?q=80&w=1200',
  },
  {
    name: 'Université PSL',
    location: 'Paris',
    ranking: '#5 in France',
    specialties: 'Multidisciplinary Research, Arts, Sciences',
    image: 'https://images.unsplash.com/photo-1521033719794-41049d18b267?q=80&w=1200',
  },
  {
    name: 'Université Grenoble Alpes',
    location: 'Grenoble',
    ranking: '#6 in France',
    specialties: 'Engineering, Medicine, Environmental Sciences',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200',
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-blue-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-700">
            Explore France’s most prestigious educational institutions.
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
                <h3 className="mb-2 text-xl font-semibold text-blue-900">{university.name}</h3>
                <p className="mb-4 text-sm text-blue-700">{university.location}</p>
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
