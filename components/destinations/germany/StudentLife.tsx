'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Utensils, Bus, Users } from 'lucide-react';

const aspects = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Student dormitories (Studentenwerk) or shared apartments (WG)',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200'
  },
  {
    icon: Utensils,
    title: 'Food & Culture',
    description: 'Affordable student cafeterias (Mensa) and vibrant cultural scene',
    image: 'https://images.unsplash.com/photo-1605536485106-47ee543b9388?q=80&w=1200'
  },
  {
    icon: Bus,
    title: 'Transportation',
    description: 'Comprehensive public transport with semester ticket benefits',
    image: 'https://images.unsplash.com/photo-1513578770234-9f6574b49cc3?q=80&w=1200'
  },
  {
    icon: Users,
    title: 'Student Activities',
    description: 'Sports clubs, student organizations, and cultural events',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200'
  }
];

export default function StudentLife() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Student Life in Germany</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Experience the vibrant student culture and lifestyle in German cities
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
                    <Icon className="h-6 w-6 text-yellow-500" />
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