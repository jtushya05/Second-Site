'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'University of Auckland',
    location: 'Auckland',
    ranking: '#1 in New Zealand',
    specialties: 'Comprehensive research, diverse programs, urban campus',
    image: 'https://storage-prtl-co.imgix.net/endor/organisations/9951/images/1557871732_campus-life-2.jpg'
  },
  {
    name: 'University of Otago',
    location: 'Dunedin',
    ranking: '#2 in New Zealand',
    specialties: 'Health sciences, vibrant student life, historic campus',
    image: 'https://connect-assets.prosple.com/cdn/ff/_Idsr__jCZRbR0Bcf2lNd6zAU5pPRAB8sF_Kj7yHUJk/1602467646/public/2020-10/Otago-University__banner.jpg'
  },
  {
    name: 'Victoria University of Wellington',
    location: 'Wellington',
    ranking: '#3 in New Zealand',
    specialties: 'Strong in humanities, law, and social sciences; proximity to government institutions',
    image: 'https://www.wgtn.ac.nz/__data/assets/image/0012/1794792/varieties/ls_medium.jpg'
  },
  {
    name: 'University of Canterbury',
    location: 'Christchurch',
    ranking: '#4 in New Zealand',
    specialties: 'Engineering and technology, innovative research, extensive field stations',
    image: 'https://t1.unipage.net/src/uni_62.jpeg'
  },
  {
    name: 'Massey University',
    location: 'Palmerston North',
    ranking: '#5 in New Zealand',
    specialties: 'Distance learning, agriculture, creative arts',
    image: 'https://www.hotcoursesabroad.com/commimg/myhotcourses/institution/CH/myhc_270578.jpg'
  },
  {
    name: 'Lincoln University',
    location: 'Lincoln',
    ranking: '#6 in New Zealand',
    specialties: 'Specialist land-based university, focus on agriculture and environment',
    image: 'https://d31cuupyjbe4e1.cloudfront.net/ADMIN/University%20of%20Lincoln%20Cover-5c1761be-d8ad-43af-864b-f8f98cd682a3.jpg'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-green-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-800">Top Universities in New Zealand</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Explore New Zealand's most prestigious educational institutions.
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
          <p className="text-lg font-bold text-green-800">
            And many more prestigious universities across New Zealand...
          </p>
        </div>
      </Container>
    </section>
  );
}
