'use client';

import { Container } from '@/components/ui/container';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';

export default function ContactSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Have questions? We're here to help you at every step of your journey
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          <ContactForm />
          <div className="space-y-6 lg:col-span-1">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </Container>
    </section>
  );
}