'use client';

import TestPrepLayout from '../../layouts/TestPrepLayout'; // Verify this path
import PTEPrepContent from './PTEPrepContent'; // Verify this path

export default function PTEPrepPage() {
  return (
    <TestPrepLayout testType="PTE">
      <PTEPrepContent /> {/* Integrating the PTE content component */}
    </TestPrepLayout>
  );
}