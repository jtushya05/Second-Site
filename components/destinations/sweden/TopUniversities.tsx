'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Karolinska Institute',
    location: 'Stockholm',
    ranking: '#1 in Sweden',
    specialties: 'Medicine, Medical Research',
    image: '/images/UniPics/Sweden/Karolinska Institute.png',
  },
  {
    name: 'KTH Royal Institute of Technology',
    location: 'Stockholm',
    ranking: '#2 in Sweden',
    specialties: 'Engineering, Technology, Innovation',
    image: 'https://studyinsweden.se/transformations/2013/10/KTH-Borgg%C3%A5rden_Jann-Lipka-870x579-1.jpg-1920x.jpg',
  },
  {
    name: 'Lund University',
    location: 'Lund',
    ranking: '#3 in Sweden',
    specialties: 'Comprehensive Research, International Collaboration',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Universitetshuset_i_lund.jpg/1024px-Universitetshuset_i_lund.jpg',
  },
  {
    name: 'Uppsala University',
    location: 'Uppsala',
    ranking: '#4 in Sweden',
    specialties: 'Historical Significance, Broad Academic Programs',
    image: '/images/UniPics/Sweden/Uppsala University.png',
  },
  {
    name: 'Stockholm University',
    location: 'Stockholm',
    ranking: '#5 in Sweden',
    specialties: 'Natural Sciences, Humanities, Environmental Research',
    image: '/images/UniPics/Sweden/Stockholm University.png',
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-yellow-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Top Universities in Sweden</h2>
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
                    <span className="font-medium text-blue-800">Known for:</span> {university.specialties}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-blue-900">
            And many more prestigious universities across Sweden...
          </p>
        </div>
      </Container>
    </section>
  );
}
