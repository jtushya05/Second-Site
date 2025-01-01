'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Headphones, BookOpen, Pencil, Mic } from 'lucide-react';

const sections = [
  {
    title: 'Listening',
    icon: Headphones,
    duration: '30 minutes',
    questions: '40 questions',
    description: 'Four recorded monologues and conversations'
  },
  {
    title: 'Reading',
    icon: BookOpen,
    duration: '60 minutes',
    questions: '40 questions',
    description: 'Three long reading passages with tasks'
  },
  {
    title: 'Writing',
    icon: Pencil,
    duration: '60 minutes',
    questions: '2 tasks',
    description: 'Letter/report writing and essay tasks'
  },
  {
    title: 'Speaking',
    icon: Mic,
    duration: '11-14 minutes',
    questions: '3 parts',
    description: 'Face-to-face interview with examiner'
  }
];

export default function TestFormat() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">IELTS Test Format</h2>
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
                  <p><span className="font-medium">Questions:</span> {section.questions}</p>
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