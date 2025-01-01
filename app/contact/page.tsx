'use client';

import ContactHero from '@/components/sections/contact/ContactHero';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactInfo from '@/components/sections/contact/ContactInfo';
import LocationMap from '@/components/sections/contact/LocationMap';
import { Container } from '@/components/ui/container';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <ContactForm />
            <div className="space-y-6 lg:col-span-1">
              <ContactInfo />
              <LocationMap />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}