'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Trinity College Dublin',
    location: 'Dublin',
    ranking: '#1 in Ireland',
    specialties: 'Humanities, Sciences, Business',
    image: 'https://images.unsplash.com/photo-1601412436966-02805a0fada8?q=80&w=1200',
  },
  {
    name: 'University College Dublin',
    location: 'Dublin',
    ranking: '#2 in Ireland',
    specialties: 'Medicine, Engineering, Business',
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1200',
  },
  {
    name: 'University of Galway',
    location: 'Galway',
    ranking: '#3 in Ireland',
    specialties: 'Arts, Medicine, Public Policy',
    image: 'https://images.unsplash.com/photo-1532877590696-69a5b5eea1d1?q=80&w=1200',
  },
  {
    name: 'University College Cork',
    location: 'Cork',
    ranking: '#4 in Ireland',
    specialties: 'Law, Sciences, Sustainability',
    image: 'https://images.unsplash.com/photo-1601412436966-02805a0fada8?q=80&w=1200',
  },
  {
    name: 'Dublin City University',
    location: 'Dublin',
    ranking: '#5 in Ireland',
    specialties: 'Engineering, Technology, Business',
    image: 'https://images.unsplash.com/photo-1544717303-8245fa29244f?q=80&w=1200',
  },
  {
    name: 'Maynooth University',
    location: 'Maynooth',
    ranking: '#6 in Ireland',
    specialties: 'Humanities, Technology, Social Sciences',
    image: 'https://images.unsplash.com/photo-1519984175950-24a1675b8dc1?q=80&w=1200',
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-green-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-800">Top Universities in Ireland</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Explore Ireland’s world-renowned universities and their unique offerings.
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
                <h3 className="mb-2 text-xl font-semibold text-green-800">{university.name}</h3>
                <p className="mb-4 text-sm text-green-600">{university.location}</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-green-800">Ranking:</span> {university.ranking}
                  </p>
                  <p>
                    <span className="font-medium text-green-800">Known for:</span> {university.specialties}
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
