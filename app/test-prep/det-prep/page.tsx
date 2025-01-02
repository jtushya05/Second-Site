'use client';

import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import DETPrepContent from '@/components/test-prep/det/DETPrepContent';

export default function DETPrepPage() {
  return (
    <TestPrepLayout testType="DET">
      <DETPrepContent />
    </TestPrepLayout>
  );
}