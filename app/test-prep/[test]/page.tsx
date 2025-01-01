import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { testPrepParams } from '@/src/data/static-params';
import { testDetails } from '@/src/data/test-details';
import { notFound } from 'next/navigation';
import CourseFeatures from '@/components/test-prep/CourseFeatures';
import TestModules from '@/components/test-prep/TestModules';
import CourseInfo from '@/components/test-prep/CourseInfo';

// Generate static params for all test prep routes
export function generateStaticParams() {
  return testPrepParams.map((test) => ({
    test
  }));
}

export default function TestPrepPage({ params }: { params: { test: string } }) {
  const details = testDetails[params.test as keyof typeof testDetails];
  
  if (!details) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-[40vh] w-full bg-blue-600">
        <Image
          src={details.hero}
          alt={details.title}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
                {details.title}
              </h1>
              <p className="text-lg text-white/90">
                {details.description}
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <CourseFeatures features={details.features} />
            <TestModules modules={details.modules} />
            <Button asChild size="lg" className="mt-6">
              <Link href="/get-started">Enroll Now</Link>
            </Button>
          </div>

          <CourseInfo
            duration={details.duration}
            schedule={details.schedule}
            batchSize={details.batchSize}
          />
        </div>
      </Container>
    </div>
  );
}