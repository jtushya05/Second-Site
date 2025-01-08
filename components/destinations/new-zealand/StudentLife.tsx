'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'On-campus residence or off-campus housing',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200',
  },
  {
    icon: Utensils,
    title: 'Food & Culture',
    description: 'Diverse cuisine and multicultural environment',
    image: 'https://images.unsplash.com/photo-1529604278261-8bfcdb00a7b9?q=80&w=1200',
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Excellent public transport networks',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200',
  },
  {
    icon: Users,
    title: 'Campus Life',
    description: 'Active student community and clubs',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200',
  },
];

export default function StudentLife() {
  return (
    <section className="bg-green-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-800">Student Life in New Zealand</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Experience the vibrant campus life and culture of New Zealand universities
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {aspects.map((aspect) => {
            const Icon = aspect.icon;
            return (
              <Card key={aspect.title} className="overflow-hidden shadow-md hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={aspect.image}
                    alt={aspect.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-green-500" />
                    <h3 className="text-xl font-semibold text-green-800">{aspect.title}</h3>
                  </div>
                  <p className="text-green-600">{aspect.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
