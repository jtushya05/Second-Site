'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Cambridge',
    location: 'Cambridge',
    ranking: '#2 in UK',
    specialties: 'Historic architecture, Pioneering scientific research, Notable alumni',
    image: '/images/UniPics/UK/Cambridge university.png'
  },
  {
    name: 'Queen Mary University of London',
    location: 'London',
    ranking: '#12 in UK',
    specialties: 'Diverse student body, Strong research output, Historic foundations',
    image: '/images/UniPics/UK/queen mary university.jpg'
  },
  {
    name: 'University of Bristol',
    location: 'Bristol',
    ranking: '#16 in UK',
    specialties: 'Vibrant student life, Leading research university, Historic city location',
    image: '/images/UniPics/UK/bristol.png'
  },
  {
    name: 'University of Birmingham',
    location: 'Birmingham',
    ranking: '#14 in UK',
    specialties: 'Redbrick university, Cultural diversity, Strong industry connections',
    image: '/images/UniPics/UK/birmingham.png'
  },
  {
    name: 'University of Oxford',
    location: 'Oxford',
    ranking: '#1 in UK',
    specialties: 'Oldest university in the English-speaking world, Collegiate system, Prestigious Rhodes Scholarship',
    image: 'https://theoxfordmagazine.com/wp-content/uploads/visiting-oxford-univerity-01-1920x1080-1.jpg'
  },
  {
    name: 'King\'s College London',
    location: 'London',
    ranking: '#24 in UK',
    specialties: 'Central London location, Strong health sciences programs, Historic campus',
    image: '/images/UniPics/UK/Kings University.png'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top University Choices</h2>
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
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-gray-800">
            And many more prestigious universities across the UK...
          </p>
        </div>
      </Container>
    </section>
  );
}