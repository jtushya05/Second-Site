'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Building2, Users, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Home to many top-ranked universities globally'
  },
  {
    icon: Globe,
    title: 'Cultural Diversity',
    description: 'Multicultural environment with welcoming locals'
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work',
    description: 'Up to 4 years of post-study work rights'
  },
  {
    icon: Building2,
    title: 'Quality of Life',
    description: 'High standard of living and excellent healthcare'
  },
  {
    icon: Users,
    title: 'Student Support',
    description: 'Comprehensive support services for international students'
  },
  {
    icon: Sun,
    title: 'Lifestyle',
    description: 'Perfect balance of academic and leisure activities'
  }
];

export default function WhyStudyAustralia() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Study in Australia?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the advantages of pursuing your education in Australia
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