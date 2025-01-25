'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function LeadCaptureForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
  const referrer = localStorage.getItem('ref') || '';
    try {
      const data = {
        'entry.166295812': 'LeadCaptureForm',
        'entry.1169845566': formData.name,
        'entry.2096364701': formData.email,
        'entry.26593180': formData.interest,
        'entry.1109080701': formData.phone,
        'entry.1943985329': referrer,
        // 'entry.1104932019': 'NotDefinedYet',
        // 'entry.1871500665_year': 'NotDefinedYet',
        // 'entry.1871500665_month': 'NotDefinedYet',
        // 'entry.1871500665_day': 'NotDefinedYet'
        
      };

      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSebEdPI6LiZbZTcT2zLz-k00OfsswIAEN6BN5JruDu5MyAXOA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
      });

      toast.success(`Thank you for your interest, ${formData.name}! We'll contact you soon.`);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="backdrop-blur-sm">
      <CardHeader className="space-y-1 p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Start Your Global Education Journey</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-10"
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            //required
            className="h-10"
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="h-10"
          />
          <Input
            placeholder="I'm interested in..."
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            //required
            className="h-10"
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}