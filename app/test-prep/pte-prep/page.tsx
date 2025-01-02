'use client';

import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import PTEPrepContent from '@/components/test-prep/pte/PTEPrepContent';

export default function PTEPrepPage() {
  return (
    <TestPrepLayout testType="PTE">
      <PTEPrepContent />
    </TestPrepLayout>
  );
}