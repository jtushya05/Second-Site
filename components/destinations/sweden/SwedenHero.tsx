'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SingaporeHero() {
  return (
    <section className="relative min-h-[80vh] w-full">
      <Image
        src="https://daxueconsulting.com/wp-content/uploads/2013/01/Daxue-Consutling-National-University-Of-Singapore-In-China.jpg" // Replace with a Singapore skyline image
        alt="Study in Singapore"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40">
        <Container className="flex h-full items-center">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Study in Singapore
            </h1>
            <p className="mb-8 text-xl text-white/90 md:text-2xl">
              Experience top-tier education in a global hub of innovation and culture.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                asChild
                size="lg" 
                className="bg-red-600 text-lg hover:bg-red-700"
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
