'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Building2, Users, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Home to globally recognized universities and institutions',
  },
  {
    icon: Globe,
    title: 'Cultural Diversity',
    description: 'A welcoming and inclusive environment for international students',
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work Opportunities',
    description: 'Generous post-study work rights to jumpstart your career',
  },
  {
    icon: Building2,
    title: 'Quality of Life',
    description: 'Renowned for its safety, stability, and high living standards',
  },
  {
    icon: Users,
    title: 'Student Support',
    description: 'Comprehensive resources and guidance for international students',
  },
  {
    icon: Sun,
    title: 'Natural Beauty',
    description: 'A stunning backdrop of mountains, beaches, and forests',
  },
];

export default function WhyStudyNewZealand() {
  return (
    <section className="py-24 bg-green-50">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-green-800">Why Study in New Zealand?</h2>
          <p className="mx-auto max-w-2xl text-lg text-green-600">
            Discover the advantages of pursuing your education in New Zealand
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="shadow-md hover:shadow-lg">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-green-500" />
                  <h3 className="mb-2 text-xl font-semibold text-green-800">{reason.title}</h3>
                  <p className="text-green-600">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
