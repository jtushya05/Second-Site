'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';

const universities = [
  {
    name: 'Technical University of Munich',
    location: 'Munich',
    ranking: '#1 in Germany',
    specialties: 'Engineering, Technology, Natural Sciences',
    image : 'https://t1.unipage.net/src/uni_140.jpeg'
    //image: '/images/UniPics/Germany/technical_university_of_munich.jpg'
  },
  {
    name: 'Ludwig Maximilian University of Munich',
    location: 'Munich',
    ranking: '#2 in Germany',
    specialties: 'Humanities, Cultural Sciences, Natural Sciences',
    image: 'https://cdn.leverageedu.com/blog/wp-content/uploads/2020/02/18155220/Ludwig-Maximilian-University-of-Munich-1.jpeg'
  },
  {
    name: 'Heidelberg University',
    location: 'Heidelberg',
    ranking: '#3 in Germany',
    specialties: 'Medicine, Natural Sciences, Humanities',
    image: 'https://4.bp.blogspot.com/-vtlVUdqEpjQ/Vxtkr4MgABI/AAAAAAAAAOk/JkU2KCes54krWql28qHFbsR1GrD83yweQCLcB/s1600/Heidelberg_Universit%25C3%25A4tsbibliothek_2003.jpg'
  },
  {
    name: 'Humboldt University of Berlin',
    location: 'Berlin',
    ranking: '#4 in Germany',
    specialties: 'Arts, Humanities, Natural Sciences',
    image: 'https://img.fotocommunity.com/humboldt-universitaet-berlin-e48bf550-0cf8-4d79-8f05-9ce3b6054de1.jpg?height=1080'
  },
  {
    name: 'RWTH Aachen University',
    location: 'Aachen',
    ranking: '#5 in Germany',
    specialties: 'Engineering, Technology, Natural Sciences',
    image: 'https://i.pinimg.com/originals/36/98/c2/3698c220be879e6f1f0fc028e452fe99.jpg'
  },
  {
    name: 'University of Freiburg',
    location: 'Freiburg',
    ranking: '#6 in Germany',
    specialties: 'Humanities, Social Sciences, Natural Sciences',
    image: '/images/UniPics/Germany/university_of_freiburg.jpeg'
  }
];

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore Germany's most prestigious educational institutions
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
            And many more prestigious universities across Germany...
          </p>
        </div>
      </Container>
    </section>
  );
}
