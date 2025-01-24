'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'National University of Singapore (NUS)',
    location: 'Kent Ridge, Singapore',
    ranking: '#1 in Singapore',
    specialties: 'Comprehensive research, consistently ranked among Asia’s top universities',
    image: 'https://amgenscholars.com/wp-content/uploads/2018/09/photo-nus.jpg', // Replace with an image of NUS campus
  },
  {
    name: 'Nanyang Technological University (NTU)',
    location: 'Nanyang Avenue, Singapore',
    ranking: '#2 in Singapore',
    specialties: 'Strong focus on engineering and technology, known for its eco-friendly campus',
    image: 'https://www.latrobe.edu.au/students/opportunities/exchange/partners/images/asia/Nanyang-Technological-University.jpg', // Replace with an image of NTU campus
  },
  {
    name: 'Singapore Management University (SMU)',
    location: 'Downtown Singapore',
    ranking: '#3 in Singapore',
    specialties: 'Specializes in business and management studies, located in the heart of the city',
image: 'https://sp-ao.shortpixel.ai/client/to_webp%2Cq_glossy%2Cret_img%2Cw_800%2Ch_532/https%3A//uniconexed.org/wp-content/uploads/2022/02/Singapore-Managment-Universirt-1024x681.jpeg'
},
];

export default function TopUniversities() {
  return (
    <section className="bg-red-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-800">Top Universities in Singapore</h2>
          <p className="mx-auto max-w-2xl text-lg text-red-600">
            Explore Singapore’s prestigious universities and their exceptional programs.
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
                <h3 className="mb-2 text-xl font-semibold text-red-800">{university.name}</h3>
                <p className="mb-4 text-sm text-red-600">{university.location}</p>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium text-red-800">Ranking:</span> {university.ranking}
                  </p>
                  <p>
                    <span className="font-medium text-red-800">Known for:</span> {university.specialties}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-red-800">
            And many more prestigious universities across Singapore...
          </p>
        </div>
      </Container>
    </section>
  );
}
