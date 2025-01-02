'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Globe, Briefcase, Users, Building2, GraduationCap } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'World-Class Education',
    description: 'Canadian universities consistently rank among the top institutions globally'
  },
  {
    icon: Globe,
    title: 'Cultural Diversity',
    description: 'One of the most multicultural countries with a welcoming environment'
  },
  {
    icon: Briefcase,
    title: 'Post-Study Work',
    description: 'Up to 3 years of post-graduation work permit (PGWP)'
  },
  {
    icon: Building2,
    title: 'Quality of Life',
    description: 'High standard of living with excellent healthcare and safety'
  },
  {
    icon: Users,
    title: 'Immigration Opportunities',
    description: 'Clear pathways to permanent residency through various programs'
  },
  {
    icon: GraduationCap,
    title: 'Affordable Education',
    description: 'Lower tuition fees compared to US and UK universities'
  }
];

export default function WhyStudyCanada() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Study in Canada?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the advantages of pursuing your education in Canada
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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