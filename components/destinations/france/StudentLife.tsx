'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Choose from student residences, shared apartments, or private housing.',
    image: 'https://images.unsplash.com/photo-1596212890630-d5f3a763f799?q=80&w=1200',
  },
  {
    icon: Utensils,
    title: 'Food & Culture',
    description: 'Explore French cuisine and enjoy a rich cultural experience.',
    image: 'https://images.unsplash.com/photo-1564758866819-2f0191dbfd00?q=80&w=1200',
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Enjoy an efficient public transport system with buses, metros, and trains.',
    image: 'https://images.unsplash.com/photo-1506754862350-90b276f87bf9?q=80&w=1200',
  },
  {
    icon: Users,
    title: 'Campus Life',
    description: 'Engage in vibrant student communities and participate in university clubs.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200',
  },
];

export default function StudentLife() {
  return (
    <section className="bg-blue-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Student Life in France</h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-700">
            Experience the vibrant campus life and rich cultural atmosphere of France.
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
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">{aspect.title}</h3>
                  </div>
                  <p className="text-blue-700">{aspect.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
