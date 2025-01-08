'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Building2, Users, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'France is home to prestigious universities and institutions renowned for their academic excellence.',
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'French degrees are highly respected worldwide, opening doors to global opportunities.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Generous post-study work options and access to Europe’s thriving job market.',
  },
  {
    icon: Building2,
    title: 'Quality of Life',
    description: 'Enjoy a safe and high standard of living in vibrant cities and serene countryside.',
  },
  {
    icon: Users,
    title: 'Cultural Immersion',
    description: 'Immerse yourself in France’s rich history, art, and cuisine while studying.',
  },
  {
    icon: Sun,
    title: 'Scenic Beauty',
    description: 'From the Eiffel Tower to the French Riviera, France offers stunning landscapes and iconic landmarks.',
  },
];

export default function WhyStudyFrance() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Why Study in France?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Discover the unique advantages of pursuing your education in France.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-xl font-semibold text-blue-800">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
