'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Oxford',
    location: 'Oxford',
    ranking: '#1 in UK',
    specialties: 'Research, Arts & Sciences',
    image: 'https://theoxfordmagazine.com/wp-content/uploads/visiting-oxford-univerity-01-1920x1080-1.jpg'
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge',
    ranking: '#2 in UK',
    specialties: 'Sciences, Engineering',
    image: 'https://www.universityliving.com/blog/wp-content/uploads/2023/07/Banner-Image-The-University-of-Cambridge.webp'
  },
  {
    name: 'Imperial College London',
    location: 'London',
    ranking: '#3 in UK',
    specialties: 'Engineering, Medicine',
    image: 'https://pxl-imperialacuk.terminalfour.net/prod01/channel_3/media/migration/about/0100_05--tojpeg_1416591033339_x2.jpeg'
  },
  {
    name: 'University College London',
    location: 'London',
    ranking: '#4 in UK',
    specialties: 'Arts, Sciences, Engineering',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuPnEniUPgSprKXD0HDM7lJsrFMLtRonI8A&s'
  },
  {
    name: 'London School of Economics',
    location: 'London',
    ranking: '#5 in UK',
    specialties: 'Economics, Social Sciences',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6wcjTOPsGXjLEYOhiT2ZNwQErUQvgLOnaw&s'
  },
  {
    name: 'University of Manchester',
    location: 'Manchester',
    ranking: '#6 in UK',
    specialties: 'Engineering, Business',
    image: 'https://images.shiksha.com/mediadata/images/1533553333phpfZ3OBo.jpeg'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
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
      </Container>
    </section>
  );
}