'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Euro, Building2, Users, Lightbulb, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Euro,
    title: 'Low Tuition Fees',
    description: 'Most public universities offer free or very low-cost education'
  },
  {
    icon: Globe,
    title: 'International Environment',
    description: 'Diverse student community from around the world'
  },
  {
    icon: Building2,
    title: 'Industry Connections',
    description: 'Strong links between universities and major companies'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Leading research facilities and technological advancement'
  },
  {
    icon: Users,
    title: 'Work Opportunities',
    description: '18-month post-study work permit for graduates'
  },
  {
    icon: GraduationCap,
    title: 'English Programs',
    description: 'Wide range of English-taught courses available'
  }
];

export default function WhyStudyGermany() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Study in Germany?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the advantages of pursuing your education in Germany
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title}>
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-yellow-500" />
                  <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}