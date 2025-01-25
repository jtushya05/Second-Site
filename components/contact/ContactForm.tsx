'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const  referrer = localStorage.getItem('ref') || '';
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      'entry.166295812': 'ContactForm',
      'entry.1169845566': formData.get('name') as string,
      'entry.2096364701': formData.get('email') as string,
      'entry.26593180': '',
      'entry.1109080701': formData.get('phone') as string,
      'entry.1104932019': formData.get('message') as string,
      'entry.1943985329': referrer,


      // 'entry.1871500665_year': 'NotDefinedYet',
      // 'entry.1871500665_month': 'NotDefinedYet',
      // 'entry.1871500665_day': 'NotDefinedYet'
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
      <CardHeader className="p-6">
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Input name="name" placeholder="Your Name" required className="h-12" />
            <Input name="email" type="email" placeholder="Your Email" required className="h-12" />
          </div>
          <Input name="phone" type="tel" placeholder="Phone Number" required className="h-12" />
          <Textarea 
            name="message"
            placeholder="Your Message" 
            className="min-h-[180px] resize-none" 
            required 
          />
          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}