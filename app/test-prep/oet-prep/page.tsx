'use client';

import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import OETPrepContent from '@/components/test-prep/oet/OETPrepContent';

export default function OETPrepPage() {
  return (
    <TestPrepLayout testType="OET">
      <OETPrepContent />
    </TestPrepLayout>
  );
}