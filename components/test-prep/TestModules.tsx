'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface TestModulesProps {
  modules: string[];
}

export default function TestModules({ modules }: TestModulesProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Test Modules</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map((module) => (
          <Card key={module}>
            <CardContent className="flex items-center gap-3 p-4">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span>{module}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}