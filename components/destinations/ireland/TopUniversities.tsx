'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Trinity College Dublin',
    location: 'Dublin',
    ranking: '#1 in Ireland',
    specialties: 'Oldest university in Ireland, renowned for humanities and sciences',
image: 'https://hea.ie/assets/uploads/2017/04/TCD-1000x500.jpg'
},
  {
    name: 'University College Dublin',
    location: 'Dublin',
    ranking: '#2 in Ireland',
    specialties: 'Largest university in Ireland, known for research and innovation',
image: 'https://www.glionoverseas.co.in/images/1576232229.jpg'  
  },
  {
    name: 'University of Galway',
    location: 'Galway',
    ranking: '#3 in Ireland',
    specialties: 'Strong focus on research and community engagement',
    image: 'https://www.universityofgalway.ie/about-us/widescreenheroimages/Aerial-view-of-the-quadrangle-(1).png',
  },
  {
    name: 'University College Cork',
    location: 'Cork',
    ranking: '#4 in Ireland',
    specialties: 'Leader in sustainability and environmental research',
    image: 'https://www.atlanticbridge.com/wp-content/uploads/2013/10/ucc1.jpg',
    //image: 'https://images.unsplash.com/photo-1601412436966-02805a0fada8?q=80&w=1200',
  },
  {
    name: 'Dublin City University',
    location: 'Dublin',
    ranking: '#5 in Ireland',
    specialties: 'Focus on business, engineering, and technology',
    image: 'https://www.studentworldonline.com/userfiles/images/2269_026D.jpg',
  },
  {
    name: 'Maynooth University',
    location: 'Maynooth',
    ranking: '#6 in Ireland',
    specialties: 'Known for humanities, social sciences, and growing research output',
    image: 'https://www.maynoothuniversity.ie/sites/default/files/assets/images/photo_1.JPG',
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
        <div className="mt-12 text-center">
          <p className="text-lg font-bold text-green-600">
            And many more prestigious universities across Ireland...
          </p>
        </div>
      </Container>
    </section>
  );
}
