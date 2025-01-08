'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'On-campus dormitories or private rentals in major Swedish cities.',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200',
  },
  {
    icon: Utensils,
    title: 'Food & Cuisine',
    description: 'Taste traditional Swedish dishes like meatballs, gravlax, and fika treats.',
    image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?q=80&w=1200',
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Efficient public transport systems and bike-friendly cities.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200',
  },
  {
    icon: Users,
    title: 'Campus Life',
    description: 'Join vibrant student communities, clubs, and events.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200',
  },
];

export default function StudentLife() {
  return (
    <section className="bg-blue-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Student Life in Sweden</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Experience vibrant campus life and Swedish culture as an international student.
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
                    <Icon className="h-6 w-6 text-yellow-500" />
                    <h3 className="text-xl font-semibold text-blue-800">{aspect.title}</h3>
                  </div>
                  <p className="text-gray-700">{aspect.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
