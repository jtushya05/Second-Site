'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { destinations } from '@/src/data/navigation';
import { notFound } from 'next/navigation';

// Generate static params for all destination routes
export function generateStaticParams() {
  return destinations.map((destination) => ({
    country: destination.toLowerCase().replace(' ', '-')
  }));
}

export default function DestinationPage({ params }: { params: { country: string } }) {
  const country = destinations.find(
    d => d.toLowerCase().replace(' ', '-') === params.country
  );
  
  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[40vh] w-full bg-blue-600">
        <Image
          src={`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070`}
          alt={country}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white">
                Study in {country}
              </h1>
              <p className="text-lg text-white/90">
                Discover world-class education opportunities in {country}
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Container className="py-16">
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
      </Container>
    </div>
  );
}