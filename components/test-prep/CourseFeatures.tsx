'use client';

import { Check } from 'lucide-react';

interface CourseFeaturesProps {
  features: string[];
}

export default function CourseFeatures({ features }: CourseFeaturesProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Course Features</h2>
      <ul className="grid gap-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}