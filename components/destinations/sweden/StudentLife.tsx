'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Choose between on-campus residences or modern off-campus housing options.',
    image: 'https://example.com/singapore-accommodation.jpg', // Replace with an image of Singapore's housing or hostels
  },
  {
    icon: Utensils,
    title: 'Food & Culture',
    description: 'Explore Singapore’s multicultural food scene and vibrant lifestyle.',
    image: 'https://example.com/singapore-food.jpg', // Replace with a relevant food image
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Efficient public transport system connects every corner of Singapore.',
    image: 'https://example.com/singapore-transport.jpg', // Replace with an image of MRT or buses
  },
  {
    icon: Users,
    title: 'Campus Life',
    description: 'Join dynamic student communities and exciting campus events.',
    image: 'https://example.com/singapore-campus-life.jpg', // Replace with student activity image
  },
];

export default function StudentLife() {
  return (
    <section className="bg-red-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-800">Student Life in Singapore</h2>
          <p className="mx-auto max-w-2xl text-lg text-red-600">
            Experience a dynamic and diverse student life in Singapore.
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
                    <Icon className="h-6 w-6 text-red-500" />
                    <h3 className="text-xl font-semibold text-red-800">{aspect.title}</h3>
                  </div>
                  <p className="text-red-600">{aspect.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
