'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { testimonials } from '@/src/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Students Say</h2>
          <p className="text-lg text-gray-600">
            Success stories from students who achieved their international education goals with EA Global
          </p>
        </div>
        <div className="grid gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <Quote className="mb-6 h-8 w-8 text-primary" />
                <p className="mb-8 flex-grow text-gray-600">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <p className="text-sm text-gray-600">{testimonial.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}