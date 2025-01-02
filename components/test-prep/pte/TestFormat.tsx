'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Mic, BookOpen, Pencil, Headphones } from 'lucide-react';

const sections = [
  {
    title: 'Speaking & Writing',
    icon: Mic,
    duration: '77-93 minutes',
    questions: 'Multiple tasks',
    description: 'Personal introduction, read aloud, repeat sentence, and more'
  },
  {
    title: 'Reading',
    icon: BookOpen,
    duration: '32-41 minutes',
    questions: '15-20 questions',
    description: 'Multiple choice, reorder paragraphs, fill in the blanks'
  },
  {
    title: 'Listening',
    icon: Headphones,
    duration: '45-57 minutes',
    questions: '15-20 questions',
    description: 'Summarize spoken text, multiple choice, fill in the blanks'
  }
];

export default function TestFormat() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">PTE Test Format</h2>
      <div className="grid gap-6 md:grid-cols-3">
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