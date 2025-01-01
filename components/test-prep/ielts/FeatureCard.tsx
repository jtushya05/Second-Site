'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <Check className="mb-4 h-8 w-8 text-green-600" />
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}