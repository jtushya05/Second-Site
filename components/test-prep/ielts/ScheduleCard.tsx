'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ScheduleCardProps {
  title: string;
  detail: string;
  icon: LucideIcon;
}

export default function ScheduleCard({ title, detail, icon: Icon }: ScheduleCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <Icon className="h-8 w-8 text-blue-600" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-600">{detail}</p>
        </div>
      </CardContent>
    </Card>
  );
}