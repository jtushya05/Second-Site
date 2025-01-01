'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  features: Array<{
    icon: LucideIcon;
    text: string;
  }>;
}

export default function ModuleCard({ title, description, features }: ModuleCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={index} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-blue-600" />
                <span>{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}