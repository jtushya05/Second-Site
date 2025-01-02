'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Melbourne',
    location: 'Melbourne, Victoria',
    ranking: '#1 in Australia',
    specialties: 'Research, Medicine, Engineering',
    image: 'https://images.unsplash.com/photo-1598814372785-b5b16abe9e23?q=80&w=1200'
  },
  {
    name: 'University of Sydney',
    location: 'Sydney, NSW',
    ranking: '#2 in Australia',
    specialties: 'Business, Arts, Sciences',
    image: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?q=80&w=1200'
  },
  {
    name: 'Australian National University',
    location: 'Canberra, ACT',
    ranking: '#3 in Australia',
    specialties: 'Research, Politics, Sciences',
    image: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1200'
  },
  {
    name: 'University of Queensland',
    location: 'Brisbane, QLD',
    ranking: '#4 in Australia',
    specialties: 'Medicine, Engineering, Sciences',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200'
  },
  {
    name: 'Monash University',
    location: 'Melbourne, Victoria',
    ranking: '#5 in Australia',
    specialties: 'Engineering, Business, Medicine',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200'
  },
  {
    name: 'University of Western Australia',
    location: 'Perth, WA',
    ranking: '#6 in Australia',
    specialties: 'Engineering, Medicine, Sciences',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore Australia's most prestigious educational institutions
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