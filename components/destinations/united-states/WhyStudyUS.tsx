'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Globe, Briefcase, Users, Building2, Trophy } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Home to many top-ranked universities globally'
  },
  {
    icon: Globe,
    title: 'Cultural Diversity',
    description: 'Experience a rich multicultural environment'
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Access to extensive job markets and OPT programs'
  },
  {
    icon: Building2,
    title: 'Research Facilities',
    description: 'State-of-the-art research infrastructure'
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Build connections with global professionals'
  },
  {
    icon: GraduationCap,
    title: 'Flexible Programs',
    description: 'Wide range of courses and specializations'
  }
];

export default function WhyStudyUS() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Study in the USA?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the advantages of pursuing your education in the United States
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title}>
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-blue-600" />
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