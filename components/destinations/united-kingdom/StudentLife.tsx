'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'University halls or private housing',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200'
  },
  {
    icon: Utensils,
    title: 'Food & Culture',
    description: 'Diverse cuisine and cultural experiences',
    image: 'https://www.durham.ac.uk/media/durham-university/colleges/st-johnx27s-college---only-use-within-college-site/Catering-1000x625.jpg'
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Excellent public transport networks',
    image: 'https://images.unsplash.com/photo-1520105072000-f44fc083e508?q=80&w=1200'
  },
  {
    icon: Users,
    title: 'Student Activities',
    description: 'Clubs, societies, and sports',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200'
  }
];

export default function StudentLife() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Student Life in the UK</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Experience the vibrant campus life and culture of British universities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {aspects.map((aspect) => {
            const Icon = aspect.icon;
            return (
              <Card key={aspect.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={aspect.image}
                    alt={aspect.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold">{aspect.title}</h3>
                  </div>
                  <p className="text-gray-600">{aspect.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}