'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Toronto',
    location: 'Toronto, Ontario',
    ranking: '#1 in Canada',
    specialties: 'Historic architecture, Pioneering research, Diverse academic programs',
    image: '/images/UniPics/Canada/uniToronto.png'
  },
  {
    name: 'University of British Columbia',
    location: 'Vancouver, BC',
    ranking: '#2 in Canada',
    specialties: 'Scenic campus, Strong sustainability initiatives, Innovative research',
    image: '/images/UniPics/Canada/uniUBC.jpg'
  },
  {
    name: 'McGill University',
    location: 'Montreal, Quebec',
    ranking: '#3 in Canada',
    specialties: 'Bilingual environment, Prestigious medical school, Historic campus',
    image: '/images/UniPics/Canada/mcGill.png'
  },
  {
    name: 'University of Waterloo',
    location: 'Waterloo, Ontario',
    ranking: '#4 in Canada',
    specialties: 'Co-op education programs, Innovation and entrepreneurship, Strong engineering and computer science faculties',
    image: '/images/UniPics/Canada/waterloo.jpeg'
  },
  {
    name: 'University of Alberta',
    location: 'Edmonton, Alberta',
    ranking: '#5 in Canada',
    specialties: 'Extensive research facilities, Strong energy and environmental programs, Vibrant campus life',
    image: '/images/UniPics/Canada/uniAlberta.jpeg'
  },
  {
    name: 'University of Calgary',
    location: 'Calgary, Alberta',
    ranking: '#6 in Canada',
    specialties: 'Innovative research, Strong business and engineering programs, Proximity to natural landscapes',
    image: '/images/UniPics/Canada/uniCalgary.jpg'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top University Choices</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore some of Canada's most prestigious educational institutions
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
            And many more prestigious universities across Canada...
          </p>
        </div>
      </Container>
    </section>
  );
}
