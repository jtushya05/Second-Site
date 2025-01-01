'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function VisaAssistancePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[40vh] w-full bg-blue-600">
        <Image
          src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070"
          alt="Visa Assistance"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white">
                Student Visa Assistance
              </h1>
              <p className="text-lg text-white/90">
                Expert guidance through every step of your student visa application process
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Visa Services</h2>
            <ul className="space-y-4">
              {[
                'Document preparation and verification',
                'Application form assistance',
                'Interview preparation',
                'Financial documentation guidance',
                'Visa fee payment assistance',
                'Appeal support if needed'
              ].map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-6">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Why Choose Our Visa Services?</h2>
            <div className="grid gap-4">
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Our experienced visa counselors provide step-by-step assistance'
                },
                {
                  title: 'High Success Rate',
                  description: '95% visa approval rate for our students'
                },
                {
                  title: 'Complete Documentation',
                  description: 'Thorough review and preparation of all required documents'
                },
                {
                  title: 'Interview Preparation',
                  description: 'Mock interviews and preparation tips from experts'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}