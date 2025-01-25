'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const referrer = localStorage.getItem('ref') || '';
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      'entry.166295812': 'ContactForm',
      'entry.1169845566': formData.get('name') as string,
      'entry.2096364701': formData.get('email') as string,
      'entry.26593180': formData.get('subject') as string,
      'entry.1109080701': formData.get('phone') as string,
      'entry.1104932019': formData.get('message') as string,
      'entry.1943985329': referrer,

    };

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSebEdPI6LiZbZTcT2zLz-k00OfsswIAEN6BN5JruDu5MyAXOA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
      });

      toast.success(`Message sent, ${formData.get('name')}! We'll get back to you soon.`);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <Card className="lg:col-span-2">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[150px]"
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}