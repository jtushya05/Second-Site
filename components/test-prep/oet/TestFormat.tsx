'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Headphones, Mic, Pencil } from 'lucide-react';

const sections = [
  {
    title: 'Listening',
    icon: Headphones,
    duration: '45 minutes',
    format: 'Healthcare-related recordings',
    description: 'Consultations, staff briefings, and healthcare presentations'
  },
  {
    title: 'Reading',
    icon: BookOpen,
    duration: '60 minutes',
    format: 'Medical texts',
    description: 'Comprehension of healthcare documentation and research'
  },
  {
    title: 'Writing',
    icon: Pencil,
    duration: '45 minutes',
    format: 'Professional letter',
    description: 'Write a referral letter based on case notes'
  },
  {
    title: 'Speaking',
    icon: Mic,
    duration: '20 minutes',
    format: 'Role-play scenarios',
    description: 'Simulate real-life healthcare consultations'
  }
];

export default function TestFormat() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">OET Test Format</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title}>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Duration:</span> {section.duration}</p>
                  <p><span className="font-medium">Format:</span> {section.format}</p>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}