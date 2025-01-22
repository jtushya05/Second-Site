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
  'Digital Marketing',
  'Web Developer'
];

const employmentTypes = [
  'Full-time',
  'Part-time',
  'Internship'
];

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    name: '',
    phone: '',
    email: '',
    portfolioLink: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      'entry.23303091': formData.get('portfolioLink')?.toString() || '',
      'entry.297979220': formData.get('phone')?.toString() || '',
      'entry.1078004677': formData.get('role')?.toString() || '',
      'entry.1640447617': formData.get('email')?.toString() || '',
      'entry.1781500597': `${formData.get('firstName')?.toString() || ''} ${formData.get('lastName')?.toString() || ''}`,
      'entry.1972710835': formData.get('commitment')?.toString() || '',
      'entry.2016206904': formData.get('employmentType')?.toString() || '',
      'entry.2040870261': formData.get('coverLetter')?.toString() || '',
      'entry.373300420': formData.get('whyJoin')?.toString() || '',
      'entry.1496563821': formData.get('skills')?.toString() || '',
      'entry.781201934': formData.get('additionalInfo')?.toString() || ''
    };

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSerSYjG3k2pASwq8L1X1i8aWxEfJ6X1Hz6LrIgY3WNCka68Iw/formResponse?', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
      });

      toast.success('Application submitted successfully!');
      (e.target as HTMLFormElement).reset();
      setSubmittedData({
        name: data['entry.1781500597'],
        phone: data['entry.297979220'],
        email: data['entry.1640447617'],
        portfolioLink: data['entry.23303091']
      });
      setIsSubmitted(true);
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <Container className="py-16">
          <div className="mx-auto max-w-2xl text-center bg-white p-8 rounded-lg shadow-lg">
            <h1 className="mb-4 text-3xl font-bold">Application Submitted</h1>
            <p className="text-gray-600 mb-6">Thank you for your application. Our team will review your submission and get back to you shortly. Here are the details we have received:</p>
            <div className="mt-6 space-y-4 text-left">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Phone:</strong> {submittedData.phone}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Portfolio Link:</strong> <a href={submittedData.portfolioLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">{submittedData.portfolioLink}</a></p>
            </div>
            <div className="mt-8 text-left">
              <p className="mb-2">If you have any further queries, feel free to reach out to us:</p>
              <p>Email: <a href="mailto:hr@englisharenaglobal.com" className="text-blue-500">hr@englisharenaglobal.com</a></p>
              <p>Phone: <a href="tel:+919894018848" className="text-blue-500">+919894018848</a></p>
              <p>WhatsApp: <a href="https://wa.me/919894018848" className="text-blue-500">Chat on WhatsApp</a></p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

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
                    <label className="mb-1 block text-sm font-medium">First Name <span className="text-red-500">*</span></label>
                    <Input name="firstName" required />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
                    <Input name="lastName" required />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email <span className="text-red-500">*</span></label>
                  <Input name="email" type="email" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Phone <span className="text-red-500">*</span></label>
                  <Input name="phone" type="tel" required />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Application Details</h2>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Role <span className="text-red-500">*</span></label>
                  <Select name="role" required>
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
                  <Input name="employmentType" value="Part-time Intern" readOnly />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Portfolio Link</label>
                  <Input name="portfolioLink" type="url" placeholder="Provide a link to your portfolio or drive" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Why do you want to join us/work with us?</label>
                  <Textarea 
                    name="whyJoin"
                    placeholder="Tell us why you'd be a great fit for this role"
                    className="min-h-[150px]"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Additional Information</h2>
              <div className="grid gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Amount of time you can commit in a week</label>
                  <Input name="commitment" placeholder="e.g., 10 hours, 15 hours, etc." />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Skills that make you stand out</label>
                  <Textarea 
                    name="skills"
                    placeholder="List your skills and experiences"
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Any other relevant information</label>
                  <Textarea 
                    name="additionalInfo"
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