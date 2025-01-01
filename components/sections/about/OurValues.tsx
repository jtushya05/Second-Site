'use client';

import { Container } from '@/components/ui/container';
import { Heart, Target, Users, Shield } from 'lucide-react';

const values = [
  {
    title: 'Student-First Approach',
    description: 'Every decision we make prioritizes our students\' success and well-being',
    icon: Heart
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service',
    icon: Target
  },
  {
    title: 'Integrity',
    description: 'Honesty and transparency in all our dealings',
    icon: Shield
  },
  {
    title: 'Inclusivity',
    description: 'Supporting students from all backgrounds and walks of life',
    icon: Users
  }
];

export default function OurValues() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}