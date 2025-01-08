'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Choose between on-campus residences or cozy off-campus housing options.',
    image: 'https://images.unsplash.com/photo-1590487982326-592a7427c73d?q=80&w=1200',
  },
  {
    icon: Utensils,
    title: 'Food & Culture',
    description: 'Enjoy Irish cuisine and the vibrant, multicultural lifestyle.',
    image: 'https://images.unsplash.com/photo-1579898397071-083ee92880d0?q=80&w=1200',
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Reliable public transport and easy access to all parts of Ireland.',
    image: 'https://images.unsplash.com/photo-1534422298393-2a6b1f3a1ee5?q=80&w=1200',
  },
  {
    icon: Users,
    title: 'Campus Life',
    description: 'Active student communities, clubs, and events make every day exciting.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200',
  },
];

export default function StudentLife() {
  return (
    <section className="bg-green-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-800">Student Life in Ireland</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Explore Ireland’s unique lifestyle and create unforgettable memories.
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
