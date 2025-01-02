'use client';

import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import TOEFLPrepContent from '@/components/test-prep/toefl/TOEFLPrepContent';

export default function TOEFLPrepPage() {
  return (
    <TestPrepLayout testType="TOEFL">
      <TOEFLPrepContent />
    </TestPrepLayout>
  );
}