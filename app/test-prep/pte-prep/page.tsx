//'use client';

import Head from 'next/head';
import TestPrepLayout from '@/components/layouts/TestPrepLayout';
import PTEPrepContent from '@/components/test-prep/pte/PTEPrepContent';

export const metadata = {
  title: 'PTE Preparation',
};

export default function PTEPrepPage() {
  return (
    <TestPrepLayout testType="PTE">
      <PTEPrepContent />
    </TestPrepLayout>
  );
}