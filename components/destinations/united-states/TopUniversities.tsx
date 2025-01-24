'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const usUniversities = [
  {
    name: 'Princeton University',
    location: 'Princeton, NJ',
    ranking: '#1 in USA',
    specialties: 'Physics, Economics, International Affairs',
    image: '/images/UniPics/USA/princeton.png'
  },
  {
    name: 'Stanford University',
    location: 'Stanford, CA',
    ranking: '#2 in USA',
    specialties: 'Technology, Entrepreneurship, Engineering',
    image: '/images/UniPics/USA/stanford.jpg'
  },
  {
    name: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    ranking: '#3 in USA',
    specialties: 'Engineering, Computer Science, Physical Sciences',
    image: '/images/UniPics/USA/mit.jpg'
  },
  {
    name: 'Harvard University',
    location: 'Cambridge, MA',
    ranking: '#4 in USA',
    specialties: 'Law, Business, Medicine',
    image: '/images/UniPics/USA/harvard.jpeg'
  },
  {
    name: 'California Institute of Technology',
    location: 'Pasadena, CA',
    ranking: '#5 in USA',
    specialties: 'Science, Engineering, Research',
    image: '/images/UniPics/USA/caltech.jpg'
  },
  {
    name: 'Yale University',
    location: 'New Haven, CT',
    ranking: '#6 in USA',
    specialties: 'Law, Arts, Humanities',
    image: '/images/UniPics/USA/yale.jpg'
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore some of America's most prestigious educational institutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {usUniversities.map((university) => (
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
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-gray-800">
            And many more prestigious universities across the USA...
          </p>
        </div>
      </Container>
    </section>
  );
}
