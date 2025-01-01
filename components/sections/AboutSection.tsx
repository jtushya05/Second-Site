'use client';

import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-32 md:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
              alt="About EA Global"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              Your Trusted Partner in Global Education
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              Since 2010, EA Global has been at the forefront of international education consulting, 
              helping thousands of students achieve their dreams of studying abroad.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Our comprehensive services, experienced counselors, and proven track record make us 
              the preferred choice for students aspiring to study at prestigious institutions worldwide.
            </p>
            <Button asChild className="w-fit">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}