'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { usUniversities } from '@/lib/data/universities';

export default function TopUniversities() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Top Universities</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore some of America's most prestigious educational institutions
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {usUniversities.map((university) => (
            <Card key={university.name} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{university.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{university.location}</p>
                <div className="space-y-2">
                  <p><span className="font-medium">QS Ranking:</span> {university.ranking}</p>
                  <p><span className="font-medium">Known for:</span> {university.specialties}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}