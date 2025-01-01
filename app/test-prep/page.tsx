'use client';

import { Container } from '@/components/ui/container';
import { testPrep } from '@/src/data/navigation';
import TestPrepCard from '@/components/test-prep/TestPrepCard';
import TestPrepHero from '@/components/test-prep/TestPrepHero';

export default function TestPrepPage() {
  return (
    <div className="min-h-screen pt-20">
      <TestPrepHero />
      
      <Container className="py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Test Preparation Courses</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive preparation programs designed to help you achieve your target scores
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testPrep.map((test) => (
            <TestPrepCard key={test.path} test={test} />
          ))}
        </div>
      </Container>
    </div>
  );
}