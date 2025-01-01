'use client';

import TestPrepLayout from '../../layouts/TestPrepLayout'; // Corrected path
import TOEFLPrepContent from './TOEFLPrepContent'; // Corrected path

export default function TOEFLPrepPage() {
  return (
    <TestPrepLayout testType="TOEFL">
      <TOEFLPrepContent /> {/* Integrating the TOEFL content component */}
    </TestPrepLayout>
  );
}