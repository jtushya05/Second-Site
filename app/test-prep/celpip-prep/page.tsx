'use client';

import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import CELPIPPrepContent from '@/components/test-prep/celpip/CELPIPPrepContent';

export default function CELPIPPrepPage() {
  return (
    <TestPrepLayout testType="CELPIP">
      <CELPIPPrepContent />
    </TestPrepLayout>
  );
}