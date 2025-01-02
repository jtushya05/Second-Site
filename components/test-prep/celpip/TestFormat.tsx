'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Headphones, Mic, Pencil } from 'lucide-react';

const sections = [
  {
    title: 'Listening',
    icon: Headphones,
    duration: '47-55 minutes',
    questions: '38-46 questions',
    description: 'Understanding everyday conversations, news items, and presentations'
  },
  {
    title: 'Reading',
    icon: BookOpen,
    duration: '55-60 minutes',
    questions: '38-45 questions',
    description: 'Reading and understanding various types of Canadian texts'
  },
  {
    title: 'Writing',
    icon: Pencil,
    duration: '53-60 minutes',
    questions: '2 tasks',
    description: 'Writing emails and responding to survey questions'
  },
  {
    title: 'Speaking',
    icon: Mic,
    duration: '15-20 minutes',
    questions: '8 tasks',
    description: 'Speaking tasks including giving opinions and describing experiences'
  }
];

export default function TestFormat() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">CELPIP Test Format</h2>
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