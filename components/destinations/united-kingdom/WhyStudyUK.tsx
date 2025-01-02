'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, GraduationCap, Clock, Coins } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Home to many top-ranked universities globally, including Oxford, Cambridge, and Imperial College'
  },
  {
    icon: Clock,
    title: 'Shorter Duration',
    description: 'Complete your Masters in just 1 year, saving both time and money compared to other countries'
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work Visa',
    description: 'Stay and work in the UK for up to 2 years after graduation with the Graduate Route visa'
  },
  {
    icon: Globe,
    title: 'International Recognition',
    description: 'UK degrees are respected and recognized by employers worldwide'
  },
  {
    icon: GraduationCap,
    title: 'Research Excellence',
    description: 'Leading research facilities and opportunities across all academic disciplines'
  },
  {
    icon: Coins,
    title: 'Scholarship Options',
    description: 'Various scholarships and bursaries available for international students'
  }
];

export default function WhyStudyUK() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Study in the UK?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the advantages of pursuing your education in the United Kingdom
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title}>
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-red-600" />
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