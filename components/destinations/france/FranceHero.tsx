'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FranceHero() {
  return (
    <section className="relative min-h-[80vh] w-full">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/800px-Louvre_Museum_Wikimedia_Commons.jpg"
        alt="Study in France"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40">
        <Container className="flex h-full items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Study in France
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Unlock your potential with a world-class education in the heart of Europe’s rich culture and history.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 text-lg hover:bg-blue-700"
              >
                <Link href="/get-started">Get Free Counselling</Link>
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
