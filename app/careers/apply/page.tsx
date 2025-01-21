'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
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

const positions = [
  'Social Media Admin',
  'Video Editor',
  'Digital Marketing Specialist',
  'Web Developer'
];

const employmentTypes = [
  'Full-time',
  'Part-time',
  'Internship'
];

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Application submitted successfully!');
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold">Apply Now</h1>
            <p className="text-gray-600">
              Join our team and help shape the future of international education
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">First Name</label>
                    <Input required />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Last Name</label>
                    <Input required />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <Input type="email" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone</label>
                  <Input type="tel" required />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Application Details</h2>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Role</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position.toLowerCase()}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Employment Type</label>
                  <Input value="Part-time Intern" readOnly />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Why do you want to join us/work with us?</label>
                  <Textarea 
                    placeholder="Tell us why you'd be a great fit for this role"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Additional Information</h2>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Amount of time you can commit in a week</label>
                  <Input placeholder="e.g., 20 hours, 30 hours, etc." required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Skills that make you stand out</label>
                  <Textarea 
                    placeholder="List your skills and experiences"
                    className="min-h-[100px]"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Any other relevant information</label>
                  <Textarea 
                    placeholder="Provide any additional information that you think is relevant"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}