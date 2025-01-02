'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Mic, MessageSquare, Brain } from 'lucide-react';

const sections = [
  {
    title: 'Literacy',
    icon: BookOpen,
    duration: '15-20 minutes',
    questions: 'Adaptive',
    description: 'Reading and writing tasks to assess comprehension and production'
  },
  {
    title: 'Comprehension',
    icon: Brain,
    duration: '15-20 minutes',
    questions: 'Adaptive',
    description: 'Listening and reading tasks to evaluate understanding'
  },
  {
    title: 'Production',
    icon: Mic,
    duration: '10-15 minutes',
    questions: 'Multiple tasks',
    description: 'Speaking and writing tasks to assess language production'
  },
  {
    title: 'Conversation',
    icon: MessageSquare,
    duration: '10 minutes',
    questions: '2-3 tasks',
    description: 'Video interview tasks to evaluate communication skills'
  }
];

export default function TestFormat() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">DET Test Format</h2>
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