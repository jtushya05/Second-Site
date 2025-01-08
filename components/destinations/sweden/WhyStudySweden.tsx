'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Building2, Users, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Sweden is home to globally renowned universities that emphasize innovation and creativity.',
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Degrees from Swedish universities are recognized and respected worldwide.',
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work Options',
    description: 'Sweden offers generous post-study work opportunities for international students.',
  },
  {
    icon: Building2,
    title: 'High Quality of Life',
    description: 'Sweden ranks among the top countries for safety, healthcare, and sustainability.',
  },
  {
    icon: Users,
    title: 'Inclusive Environment',
    description: 'A welcoming and diverse community for students from all over the world.',
  },
  {
    icon: Sun,
    title: 'Natural Beauty',
    description: 'Explore stunning landscapes, from the Northern Lights to serene archipelagos.',
  },
];

export default function WhyStudySweden() {
  return (
    <section className="py-24 bg-blue-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Why Study in Sweden?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Discover the unique advantages of pursuing your education in Sweden.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-yellow-500" />
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
