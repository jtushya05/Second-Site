'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Headphones, Mic, Pencil } from 'lucide-react';

const sections = [
  {
    title: 'Reading',
    icon: BookOpen,
    duration: '54-72 minutes',
    questions: '30-40 questions',
    description: 'Read academic passages and answer questions about them'
  },
  {
    title: 'Listening',
    icon: Headphones,
    duration: '41-57 minutes',
    questions: '28-39 questions',
    description: 'Listen to lectures, classroom discussions and conversations'
  },
  {
    title: 'Speaking',
    icon: Mic,
    duration: '17 minutes',
    questions: '4 tasks',
    description: 'Express your opinion on familiar topics and academic materials'
  },
  {
    title: 'Writing',
    icon: Pencil,
    duration: '50 minutes',
    questions: '2 tasks',
    description: 'Write essay responses based on reading and listening tasks'
  }
];

export default function TestFormat() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">TOEFL Test Format</h2>
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