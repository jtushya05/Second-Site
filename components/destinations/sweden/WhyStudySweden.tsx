'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Building2, Users, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Singapore’s universities consistently rank among the best in the world.',
  },
  {
    icon: Globe,
    title: 'Global Hub of Innovation',
    description: 'As a global financial and tech hub, Singapore offers unmatched opportunities.',
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work Opportunities',
    description: 'Stay and work in Singapore’s thriving economy after graduation.',
  },
  {
    icon: Building2,
    title: 'Quality of Life',
    description: 'Enjoy a clean, safe, and cosmopolitan city with a high standard of living.',
  },
  {
    icon: Users,
    title: 'Multicultural Community',
    description: 'Experience a melting pot of cultures and diverse perspectives.',
  },
  {
    icon: Sun,
    title: 'Iconic Landscapes',
    description: 'From Marina Bay Sands to lush parks, Singapore offers stunning views.',
  },
];

export default function WhyStudySingapore() {
  return (
    <section className="py-24 bg-red-100">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-900">Why Study in Singapore?</h2>
          <p className="mx-auto max-w-2xl text-lg text-red-800">
            Discover why Singapore is a top destination for international students.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-red-600" />
                  <h3 className="mb-2 text-xl font-semibold text-red-900">{reason.title}</h3>
                  <p className="text-red-700">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
