'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string[];
}

export function ContactInfoCard({ icon: Icon, title, content }: ContactInfoCardProps) {
  return (
    <Card>
      <CardContent className="flex items-start gap-4 p-4">
        <Icon className="h-6 w-6 shrink-0 text-blue-600" />
        <div>
          <h3 className="mb-2 font-semibold">{title}</h3>
          {content.map((line, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              {line}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}