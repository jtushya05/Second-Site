'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
  };

  return (
    <Card className="lg:col-span-2">
      <CardHeader className="p-6">
        <CardTitle className="text-2xl">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Input placeholder="Your Name" required className="h-12" />
            <Input type="email" placeholder="Your Email" required className="h-12" />
          </div>
          <Input type="tel" placeholder="Phone Number" required className="h-12" />
          <Textarea 
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