'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Toronto',
    location: 'Toronto, Ontario',
    ranking: '#1 in Canada',
    specialties: 'Research, Medicine, Engineering',
    image: 'https://images.unsplash.com/photo-1569346332452-8d8a7c90673f?q=80&w=1200'
  },
  {
    name: 'University of British Columbia',
    location: 'Vancouver, BC',
    ranking: '#2 in Canada',
    specialties: 'Life Sciences, Technology',
    image: 'https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?q=80&w=1200'
  },
  {
    name: 'McGill University',
    location: 'Montreal, Quebec',
    ranking: '#3 in Canada',
    specialties: 'Medicine, Engineering',
    image: 'https://images.unsplash.com/photo-1580243117731-151c1a3e8223?q=80&w=1200'
  },
  {
    name: 'University of Waterloo',
    location: 'Waterloo, Ontario',
    ranking: '#4 in Canada',
    specialties: 'Computer Science, Engineering',
    image: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?q=80&w=1200'
  },
  {
    name: 'University of Alberta',
    location: 'Edmonton, Alberta',
    ranking: '#5 in Canada',
    specialties: 'Engineering, Business',
    image: 'https://images.unsplash.com/photo-1580243117731-151c1a3e8223?q=80&w=1200'
  },
  {
    name: 'University of Calgary',
    location: 'Calgary, Alberta',
    ranking: '#6 in Canada',
    specialties: 'Energy, Environmental Science',
    image: 'https://images.unsplash.com/photo-1599825645947-6400c7d0574b?q=80&w=1200'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
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
      </Container>
    </section>
  );
}