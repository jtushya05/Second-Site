'use client';

import BaseNavigation from '@/components/navigation/BaseNavigation';
import FreeMockBanner from '@/components/test-prep/FreeMockBanner';

interface TestPrepLayoutProps {
  children: React.ReactNode;
  testType: string;
}

export default function TestPrepLayout({ children, testType }: TestPrepLayoutProps) {
  return (
    <>
      <FreeMockBanner testType={testType} />
      <BaseNavigation 
        variant="solid"
        styles={{
          header: "top-[32px] sm:top-[40px]",
          container: "h-16 sm:h-20"
        }}
      />
      <main>
        {children}
      </main>
    </>
  );
}