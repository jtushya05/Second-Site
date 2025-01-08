import { Container } from '@/components/ui/container';
import { destinations } from '@/src/data/navigation';
import { notFound } from 'next/navigation';
import { CountryHero } from './components/CountryHero';
import { KeyInformation } from './components/KeyInformation';
import { PopularCourses } from './components/PopularCourses';
import BaseNavigation from '@/components/navigation/BaseNavigation';

// Generate static params for all destination routes
export function generateStaticParams() {
  const params = destinations.map((destination) => ({
    country: destination.toLowerCase().replace(' ', '-'),
  }));
  console.log('Generated Static Params:', params); // Debugging
  return params;
}

export default function DestinationPage({
  params,
}: {
  params: { country: string };
}) {
  const country = destinations.find(
    (d) => d.toLowerCase().replace(' ', '-') === params.country
  );

  if (!country) {
    console.error(`Country not found for slug: ${params.country}`); // Debugging
    notFound();
  }

  console.log('Rendering page for:', country); // Debugging

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
