'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CanadaHero() {
  return (
    <section className="relative min-h-[80vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070"
        alt="Study in Canada"
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40">
        <Container className="flex h-full items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Study in Canada
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Experience world-class education in a country known for its high quality of life, 
              cultural diversity, and excellent post-study work opportunities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                asChild
                size="lg" 
                className="bg-red-600 text-lg hover:bg-red-700"
              >
                <Link href="/get-started?serviceName=Canadian Education&fromPage=Canada">Get Free Counselling</Link>
                </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-2 text-lg text-black hover:bg-gray-300 hover:text-gray-900"                >
                <Link href="#popular-courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}