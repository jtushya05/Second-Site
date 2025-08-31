'use client';

import React from 'react';
import { EbookAnalyticsDashboard } from '@/components/ebook/EbookAnalyticsDashboard';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <EbookAnalyticsDashboard />
      </div>
    </div>
  );
}
