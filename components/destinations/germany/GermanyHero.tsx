'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GermanyHero() {
  return (
    <section className="relative min-h-[80vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070"
        alt="Study in Germany"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40">
        <Container className="flex h-full items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Study in Germany
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Experience world-class education in Europe's leading economy, known for its 
              engineering excellence, innovation, and high quality of life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                asChild
                size="lg" 
                className="bg-yellow-500 text-lg hover:bg-yellow-600"
              >
                <Link href="/get-started?serviceName=German Education&fromPage=Germany_Hero">Get Free Counselling</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-2 text-lg text-black hover:bg-gray-300"
              >
                <Link href="#popular-courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}