'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, BookOpen, Globe, HelpCircle, LifeBuoy, UserCheck } from 'lucide-react';

const reasons = [
  {
    title: '21+ Years of Excellence',
    description: 'Over a decade of experience in international education counseling',
    icon: Award
  },
  {
    title: '10,000+ Success Stories',
    description: 'Helped thousands of students achieve their study abroad dreams',
    icon: Users
  },
  {
    title: '850+ Strong University Connects',
    description: 'Strong connects with top universities worldwide',
    icon: BookOpen
  },
  {
    title: 'Personalized Support',
    description: 'Tailored guidance to help students navigate their study abroad journey every step of the way',
    icon: UserCheck
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose EA Global</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We stand out through our commitment to excellence and student success
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title} className="border-none">
                <CardHeader>
                  <Icon className="h-12 w-12 text-blue-600" />
                  <CardTitle className="mt-4">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
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