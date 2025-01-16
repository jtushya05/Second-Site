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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwp9ZJGQhRGsYxAg8Io0VsR9grsRpXIZKEQ&s'
  },
  {
    name: 'University of Sydney',
    location: 'Sydney, NSW',
    ranking: '#2 in Australia',
    specialties: 'Business, Arts, Sciences',
    image: 'https://images.shiksha.com/mediadata/images/1515481785phpZsgL9D_g.png'
  },
  {
    name: 'Australian National University',
    location: 'Canberra, ACT',
    ranking: '#3 in Australia',
    specialties: 'Research, Politics, Sciences',
    image: 'https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2021/11/australian-national-university.webp' 
  },
  {
    name: 'University of Queensland',
    location: 'Brisbane, QLD',
    ranking: '#4 in Australia',
    specialties: 'Medicine, Engineering, Sciences',
    image: 'https://www.easyuni.ph/media/institution/photo/2019/07/15/thumbs/UQ_1_Wide.jpg.1150x500_q85.webp'
  },
  {
    name: 'Monash University',
    location: 'Melbourne, Victoria',
    ranking: '#5 in Australia',
    specialties: 'Engineering, Business, Medicine',
    image: 'https://www.monash.edu/__data/assets/image/0004/959530/clayton-campus-new-horizons-building-exterior-at-night-2013.jpg'
  },
  {
    name: 'University of Western Australia',
    location: 'Perth, WA',
    ranking: '#6 in Australia',
    specialties: 'Engineering, Medicine, Sciences',
image : 'https://images.shiksha.com/mediadata/images/1541403097phplpDP5l_g.jpg'  }
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