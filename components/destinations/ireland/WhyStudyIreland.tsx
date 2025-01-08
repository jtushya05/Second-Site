'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Building2, Users, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Ireland’s universities consistently rank among the best globally, offering diverse programs.',
  },
  {
    icon: Globe,
    title: 'Rich Cultural Heritage',
    description: 'Ireland boasts a vibrant culture, rich history, and thriving arts scene.',
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work Opportunities',
    description: 'Stay and work in Ireland after graduation with generous post-study visas.',
  },
  {
    icon: Building2,
    title: 'Quality of Life',
    description: 'Enjoy safe, welcoming communities and a relaxed lifestyle.',
  },
  {
    icon: Users,
    title: 'Supportive Student Environment',
    description: 'Ireland’s institutions are known for their student-first approach and support systems.',
  },
  {
    icon: Sun,
    title: 'Breathtaking Scenery',
    description: 'Ireland’s stunning landscapes are an endless source of inspiration and adventure.',
  },
];

export default function WhyStudyIreland() {
  return (
    <section className="py-24 bg-green-100">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-900">Why Study in Ireland?</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-800">
            Discover what makes Ireland an ideal destination for international students.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-green-600" />
                  <h3 className="mb-2 text-xl font-semibold text-green-900">{reason.title}</h3>
                  <p className="text-green-700">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
