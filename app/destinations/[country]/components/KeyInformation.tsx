'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface KeyInformationProps {
  country: string;
}

export function KeyInformation({ country }: KeyInformationProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Why Study in {country}?</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            • World-renowned universities and quality education
          </li>
          <li className="flex items-start gap-2">
            • Diverse culture and international environment
          </li>
          <li className="flex items-start gap-2">
            • Post-study work opportunities
          </li>
          <li className="flex items-start gap-2">
            • Safe and welcoming environment for international students
          </li>
        </ul>
        <Button asChild size="lg" className="mt-6">
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Key Information</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-semibold">Average Tuition</h3>
            <p className="text-gray-600">$15,000 - $50,000/year</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-semibold">Living Costs</h3>
            <p className="text-gray-600">$800 - $2,000/month</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-semibold">Work Rights</h3>
            <p className="text-gray-600">20 hours/week during study</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 font-semibold">Intake Seasons</h3>
            <p className="text-gray-600">Fall & Spring</p>
          </div>
        </div>
      </div>
    </div>
  );
}