'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Headphones, Clock, Target, PenTool, MessageSquare } from 'lucide-react';

const tips = [
  {
    icon: Target,
    title: 'Set Clear Goals',
    description: 'Determine your required score and create a structured study plan'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Practice under timed conditions to improve speed and accuracy'
  },
  {
    icon: BookOpen,
    title: 'Regular Reading',
    description: 'Read English materials daily to improve comprehension'
  },
  {
    icon: Headphones,
    title: 'Active Listening',
    description: 'Listen to English content regularly to improve listening skills'
  },
  {
    icon: PenTool,
    title: 'Writing Practice',
    description: 'Practice writing regularly with proper feedback'
  },
  {
    icon: MessageSquare,
    title: 'Speaking Skills',
    description: 'Practice speaking English daily and record yourself'
  }
];

export default function PreparationTips() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold">Preparation Tips</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <Card key={tip.title}>
              <CardContent className="p-6">
                <Icon className="mb-4 h-8 w-8 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}