//fix: add null checks for searchParams in BookingForm to prevent potential errors
'use client';

let reftype = '';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: searchParams?.get('serviceName') || '',
    message: '',
    referrer: searchParams?.get('ref') || searchParams?.get('referrer') || localStorage.getItem('ref') || '',
    fromPage: searchParams?.get('fromPage') || 'BookingForm',
  });

  useEffect(() => {
    const urlReferrer = searchParams?.get('ref');
    const localStorageReferrer = localStorage.getItem('ref');
    let referrer = urlReferrer || localStorageReferrer || '';

    console.log('URL Referrer:', urlReferrer);
    console.log('Local Storage Referrer:', localStorageReferrer);

    if (urlReferrer && localStorageReferrer && urlReferrer !== localStorageReferrer) {
      referrer = `${localStorageReferrer}_${urlReferrer}`;
      localStorage.setItem('ref', referrer);
      reftype = 'localStorage+URL';
    } else if (urlReferrer && !localStorageReferrer) {
      localStorage.setItem('ref', urlReferrer);
      reftype = 'URL';
    } else if (localStorageReferrer && !urlReferrer) {
      reftype = 'localStorage';
    }

    console.log('Final Referrer:', referrer);
    console.log('Ref Type:', reftype);

    setFormData((prevData) => ({
      ...prevData,
      service: searchParams?.get('serviceName') || prevData.service,
      referrer: referrer,
      fromPage: searchParams?.get('fromPage') || prevData.fromPage,
    }));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const localStorageReferrer = localStorage.getItem('ref');
    let referrer = formData.referrer || localStorageReferrer;
    referrer = `${referrer}&reftype=${reftype}`;

    console.log('Form Data:', formData);
    console.log('Referrer for Submission:', referrer);

    const data = {
      'entry.166295812': formData.fromPage,
      'entry.1169845566': formData.name,
      'entry.2096364701': formData.email,
      'entry.26593180': formData.service,
      'entry.1109080701': formData.phone,
      'entry.1104932019': formData.message,
      'entry.1943985329': referrer,
      'entry.1871500665_year': date ? date.getFullYear().toString() : '1',
      'entry.1871500665_month': date ? (date.getMonth() + 1).toString() : '1',
      'entry.1871500665_day': date ? date.getDate().toString() : '1'
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

      console.log('Form Submission Data:', data);

      toast.success(`Consultation booked successfully, ${formData.name}! We'll contact you shortly.`);
      router.push('/thank-you');
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error('There was an error booking your consultation. Please try again.');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Free Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Service</label>
              <Input
                placeholder="Service Name"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
              />
              {/* 
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="study-abroad">Study Abroad Counseling</SelectItem>
                  <SelectItem value="test-prep">Test Preparation</SelectItem>
                  <SelectItem value="visa">Visa Assistance</SelectItem>
                  <SelectItem value="career">Career Counseling</SelectItem>
                </SelectContent>
              </Select>
              */}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">Book Consultation</Button>
        </form>
      </CardContent>
    </Card>
  );
}