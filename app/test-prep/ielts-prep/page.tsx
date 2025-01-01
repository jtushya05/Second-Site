'use client';

import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import IELTSPrepContent from '@/components/test-prep/ielts/IELTSPrepContent';

export default function IELTSPrepPage() {
  return (
    <TestPrepLayout testType="IELTS">
      <IELTSPrepContent />
    </TestPrepLayout>
  );
}