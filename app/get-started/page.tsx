'use client';

import BookingForm from '@/components/booking/BookingForm';
import { Container } from '@/components/ui/container';

export default function GetStartedPage() {
  return (
    <section className="min-h-screen bg-gray-50 pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}