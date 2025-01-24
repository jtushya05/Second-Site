'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Université PSL',
    location: 'Paris',
    ranking: '#1 in France',
    specialties: 'Multidisciplinary Research, Arts, Sciences',
    image: '/images/UniPics/France/universite psl.png',
  },
  {
    name: 'Sorbonne University',
    location: 'Paris',
    ranking: '#2 in France',
    specialties: 'Humanities, Sciences, Medicine',
    image: '/images/UniPics/France/Sorbonne University.jpg',  },
  {
    name: 'Université Paris-Saclay',
    location: 'Gif-sur-Yvette',
    ranking: '#3 in France',
    specialties: 'Science, Engineering, Life Sciences',
    image: '/images/UniPics/France/Université Paris-Saclay.png',  },
  {
    name: 'École Polytechnique',
    location: 'Palaiseau',
    ranking: '#4 in France',
    specialties: 'Engineering, Computer Science, Mathematics',
    image: '/images/UniPics/France/École Polytechnique.png',  },
  {
    name: 'Sciences Po',
    location: 'Paris',
    ranking: '#5 in France',
    specialties: 'Political Science, International Relations, Economics',
    image: '/images/UniPics/France/Sciences Po.png',  },
  {
    name: 'Université Grenoble Alpes',
    location: 'Grenoble',
    ranking: '#6 in France',
    specialties: 'Engineering, Medicine, Environmental Sciences',
    image: '/images/UniPics/France/Université Grenoble Alpes.png',  },
];

export default function TopUniversities() {
  return (
    <section className="bg-blue-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Top Universities in France</h2>
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
                  className="object-contain"
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
                    <span className="font-medium text-blue-800">Known for:</span> {university.specialties}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-blue-900">
            And many more prestigious universities across France...
          </p>
        </div>
      </Container>
    </section>
  );
}
