'use client';

import Image from 'next/image';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import ScrollIndicator from '@/components/ScrollIndicator';
import { Container } from '@/components/ui/container';
import { CTAButton } from '@/components/ui/cta-button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] w-full pb-24 md:pb-0">
      <Image
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
        alt="Global Education"
        fill
        className="object-cover brightness-[0.35]"
        priority
      />
      <div className="absolute inset-0">
        <Container className="flex min-h-screen flex-col justify-center pt-24 md:pt-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Your Gateway to Global Education
              </h1>
              <p className="max-w-[600px] text-base text-gray-200 sm:text-lg md:text-xl">
                Expert guidance for international education and English proficiency tests. Start your journey to academic excellence with EA Global.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <CTAButton href="/destinations" className="w-full sm:w-auto">
                  Explore Programs
                </CTAButton>
                <CTAButton href="/get-started" variant="outline" className="w-full sm:w-auto">
                  Book Consultation
                </CTAButton>
              </div>
            </div>
            <div className="relative z-10">
              <div className="mx-auto w-full max-w-[450px]">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ScrollIndicator />
    </section>
  );
}