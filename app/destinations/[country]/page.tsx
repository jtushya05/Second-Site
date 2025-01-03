import { Container } from '@/components/ui/container';
import { destinations } from '@/src/data/navigation';
import { notFound } from 'next/navigation';
import { CountryHero } from './components/CountryHero';
import { KeyInformation } from './components/KeyInformation';
import { PopularCourses } from './components/PopularCourses';
import BaseNavigation from '@/components/navigation/BaseNavigation';

// Generate static params for all destination routes
export function generateStaticParams() {
  return destinations.map((destination) => ({
    country: destination.toLowerCase().replace(' ', '-')
  }));
}

export default function DestinationPage({ params }: { params: { country: string } }) {
  const country = destinations.find(
    d => d.toLowerCase().replace(' ', '-') === params.country
  );
  
  if (!country) {
    notFound();
  }

  return (
    <>
      <BaseNavigation variant="transparent" />
      <div className="min-h-screen">
        <CountryHero country={country} />
        <Container className="py-16">
          <KeyInformation country={country} />
        </Container>
        <PopularCourses />
      </div>
    </>
  );
}
