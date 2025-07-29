'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Users, 
  Award, 
  Globe, 
  Star, 
  CheckCircle, 
  DollarSign,
  Share2,
  Trophy,
  Gift,
  Crown,
  Copy,
  ExternalLink,
  UserPlus,
  Target,
  Zap,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Network
} from 'lucide-react';
import { toast } from 'sonner';
import BaseNavigation from '@/components/navigation/BaseNavigation';

const benefits = [
  {
    icon: DollarSign,
    title: 'Leadership Award Bonus',
    description: 'A monetary bonus you earn for each student who enrolls through your referral link. This financial reward recognizes your key role as a campus leader.'
  },
  {
    icon: GraduationCap,
    title: 'Professional Development',
    description: 'Access to leadership workshops, specialized training, certificates, and personalized mentorship to enhance your career prospects.'
  },
  {
    icon: Network,
    title: 'Career & Networking',
    description: 'Priority access to internships, job opportunities, EA Global events, and public recognition on official platforms.'
  }
];

const steps = [
  {
    number: 1,
    title: 'Apply to Become a Campus Guide',
    description: 'Submit your application showcasing your leadership experience, commitment to education, and enthusiasm for global learning.',
    icon: UserPlus
  },
  {
    number: 2,
    title: 'Onboarding & Training',
    description: 'Engage in virtual training sessions to understand EA Global\'s mission, best outreach practices, and how to effectively share your personalized referral link.',
    icon: BookOpen
  },
  {
    number: 3,
    title: 'Receive Your Unique Referral Link',
    description: 'Once onboard, you will receive a secure, encoded referral link specifically assigned to you for sharing with peers.',
    icon: Share2
  },
  {
    number: 4,
    title: 'Lead Campus Outreach & Share Your Link',
    description: 'Host info sessions, share on social media, engage in workshops, and encourage fellow students to explore EA Global\'s programs using your referral link.',
    icon: Target
  },
  {
    number: 5,
    title: 'Earn Your Leadership Award Bonuses',
    description: 'For every student who enrolls at EA Global using your referral link, you will receive a clear, transparent financial bonus called the Leadership Award Bonus.',
    icon: DollarSign
  },
  {
    number: 6,
    title: 'Unlock Exclusive Benefits',
    description: 'Gain certificates, attend professional development workshops, access networking opportunities, and receive priority consideration for EA Global\'s internship and job placements.',
    icon: Trophy
  }
];

const faqs = [
  {
    question: 'Will I receive money for participating as a Campus Guide?',
    answer: 'Yes! For every student enrollment resulting from your unique referral link, you earn a Leadership Award Bonus—a meaningful financial thank-you for your dedication and effective leadership on campus.'
  },
  {
    question: 'How is the Leadership Award Bonus paid?',
    answer: 'Bonuses are credited after the referred student successfully enrolls and their enrollment is confirmed. You will receive clear statements and timely payments as per EA Global\'s reward schedule.'
  },
  {
    question: 'What if I can\'t commit full-time?',
    answer: 'The Campus Guides role is flexible and designed to fit alongside your academic schedule with ongoing support from our team.'
  },
  {
    question: 'How do I track my referrals and bonuses?',
    answer: 'You will access a personalized dashboard where you can monitor clicks, enrollments, and Leadership Award Bonuses earned in real time.'
  },
  {
    question: 'Is this a sales role?',
    answer: 'No. As a Campus Guide, you lead with authenticity by inspiring your peers and fostering genuine interest—not through aggressive selling.'
  },
  {
    question: 'What qualifications do I need to become a Campus Guide?',
    answer: 'We look for current university students with leadership experience, passion for education, and enthusiasm for helping peers succeed in their academic journeys.'
  }
];

function generateReferralCode(email: string, name: string, timestamp: number): string {
  // Create a more sophisticated encoding
  const emailPart = email.split('@')[0].substring(0, 2);
  const namePart = name.replace(/\s+/g, '').substring(0, 2);
  const timePart = timestamp.toString().slice(-6);
  const randomPart = Math.random().toString(36).substring(2, 5);
  
  // Mix the parts to create a seemingly random code
  const mixed = `${randomPart}${emailPart}${timePart.substring(0, 3)}${namePart}${timePart.substring(3)}`;
  
  // Convert to uppercase and add some obfuscation
  return mixed.toUpperCase().split('').sort(() => Math.random() - 0.5).join('').substring(0, 10);
}

export default function CampusGuidesPage() {
  const { data: session, status } = useSession();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referralLink, setReferralLink] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    university: '',
    studyYear: '',
    previousLeadership: '',
    referralCode: '',
    motivation: ''
  });

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        fullName: session.user?.name || '',
        email: session.user?.email || ''
      }));
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!session?.user) {
      toast.error('Please sign in with Google first');
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    if (!formData.whatsappNumber || !formData.university || !formData.studyYear) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    const timestamp = Date.now();
    const referralCode = generateReferralCode(formData.email, formData.fullName, timestamp);
    const baseUrl = window.location.origin;
    const generatedLink = `${baseUrl}?ref=${referralCode}`;

    // Submit to Google Form for Campus Guide registration
    // Using the same form as Ambassador Circle but with different role identifier
    const googleFormData = {
      'entry.913553209': formData.fullName,          // FullName (from Google Auth)
      'entry.580063426': formData.email,             // EmailAddress (from Google Auth)
      'entry.1450608257': formData.whatsappNumber,   // WhatsappNumber (Required)
      'entry.472750495': referralCode,               // ReferralCode (Generated)
      'entry.24200269': generatedLink,               // ReferralLink (Generated)
      
      // Campus Guide specific fields (collected for future use)
      // These will be submitted when additional form IDs are available
      // - university (formData.university)
      // - studyYear (formData.studyYear) 
      // - previousLeadership (formData.previousLeadership)
      // - motivation (formData.motivation)
    };

    try {
      // Submit to Google Form
      await fetch(`https://docs.google.com/forms/u/0/d/e/${process.env.NEXT_PUBLIC_AMBASSADOR_GOOGLE_FORM_ID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(googleFormData)
      });

      setReferralLink(generatedLink);
      setFormData(prev => ({ ...prev, referralCode }));
      setIsRegistered(true);
      toast.success('Welcome to the EA Global Campus Guides Program!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied to clipboard!');
  };

  if (isRegistered) {
    return (
      <>
        <BaseNavigation variant="solid" />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
          <Container className="py-16">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <Badge className="mb-4 bg-blue-100 text-blue-800">Campus Guide Activated</Badge>
              </div>
              
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                🎉 Welcome to the EA Global Campus Guides Program!
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                You're now an official Campus Guide! Here's your personalized referral link and leadership toolkit:
              </p>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Your Personalized Campus Guide Link
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Input 
                      value={referralLink} 
                      readOnly 
                      className="flex-1 font-mono text-sm bg-gray-50"
                    />
                    <Button onClick={copyToClipboard} variant="outline">
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Share this link with fellow students interested in international education
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Lead Campus Outreach</h3>
                    <p className="text-sm text-gray-600">
                      Host info sessions, share on social media, and encourage peers to explore global education
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-yellow-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Earn Leadership Awards</h3>
                    <p className="text-sm text-gray-600">
                      Receive Leadership Award Bonuses for successful enrollments through your link
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Trophy className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Professional Development</h3>
                    <p className="text-sm text-gray-600">
                      Access leadership workshops, certificates, and networking opportunities
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg bg-blue-50 p-6 mb-8">
                <h3 className="mb-4 text-lg font-semibold text-blue-900">Next Steps</h3>
                <div className="grid gap-4 md:grid-cols-2 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Training Session</p>
                      <p className="text-sm text-gray-600">Join the virtual onboarding session to learn outreach best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Dashboard Access</p>
                      <p className="text-sm text-gray-600">Get access to your tracking dashboard to monitor referrals and bonuses</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/">Return to Homepage</Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <BaseNavigation variant="solid" />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Leadership Opportunity</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Become an EA Global Campus Guide — 
                <span className="text-blue-600"> Lead, Inspire, Empower</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600 leading-relaxed">
                Guide your peers toward global education opportunities and receive a meaningful <strong>Leadership Award Bonus</strong>—a financial thank-you for your dedication and leadership on campus.
              </p>
              
              {!session ? (
                <div className="space-y-6">
                  <Button 
                    onClick={() => signIn('google', { callbackUrl: window.location.href + '#application' })}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
                  >
                    <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Apply to Lead
                  </Button>
                  <p className="text-sm text-gray-500">
                    Secure Google sign-in required to access the Campus Guides application
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                    <a href="#application">Apply to Lead</a>
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    <a href="#about">Learn More</a>
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">About the Campus Guides Program</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The EA Global Campus Guides program invites passionate university students to become official leaders and ambassadors on their campuses. As a Campus Guide, you play a pivotal role in connecting peers with international education opportunities. This is more than a referral role—it's an opportunity to develop leadership skills, grow your professional network, and be rewarded with both financial bonuses and career-enhancing benefits.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Campus Leadership</h3>
                    <p className="text-gray-600">Lead and inspire fellow students to explore global education opportunities</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Professional Growth</h3>
                    <p className="text-gray-600">Develop leadership skills and build your professional network</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                      <DollarSign className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Financial Recognition</h3>
                    <p className="text-gray-600">Earn Leadership Award Bonuses for successful student enrollments</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">How It Works — Step-by-Step</h2>
              <p className="text-lg text-gray-600">
                A comprehensive 6-step process to become a Campus Guide and start making an impact
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              {steps.map((step, index) => (
                <div key={step.number} className="mb-8 flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Benefits & Rewards</h2>
              <p className="text-lg text-gray-600">
                Comprehensive benefits that recognize your valuable contribution as a campus leader
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="h-full">
                    <CardContent className="p-6">
                      <Icon className="mb-4 h-10 w-10 text-blue-600" />
                      <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Application Form */}
        {session && (
          <section id="application" className="py-16">
            <Container>
              <div className="mx-auto max-w-2xl">
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <GraduationCap className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">
                      Campus Guide Application
                    </CardTitle>
                    <p className="text-gray-600">
                      Apply to become an official Campus Guide and start leading your peers toward global education
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 rounded-lg bg-blue-50 p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-blue-900">Signed in as {session.user?.name}</p>
                          <p className="text-sm text-blue-700">{session.user?.email}</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="rounded-lg bg-blue-50 p-4 mb-6">
                        <p className="text-sm text-blue-800">
                          <strong>Required fields (*):</strong> Full Name, Email, WhatsApp Number, University, and Year of Study. Additional details help us match you with the best opportunities.
                        </p>
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium">Full Name *</label>
                          <Input
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            required
                            readOnly
                            className="bg-gray-50"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Email *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            readOnly
                            className="bg-gray-50"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium">
                            WhatsApp Number * 
                            {formData.whatsappNumber && <span className="text-blue-600 ml-1">(Will be submitted)</span>}
                          </label>
                          <Input
                            type="tel"
                            value={formData.whatsappNumber}
                            onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                            required
                            placeholder="+91 98765 43210"
                          />
                          <p className="mt-1 text-xs text-gray-500">Used for Campus Guide support and coordination</p>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">University *</label>
                          <Input
                            value={formData.university}
                            onChange={(e) => setFormData({...formData, university: e.target.value})}
                            required
                            placeholder="e.g., University of Delhi, IIT Mumbai"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium">Year of Study *</label>
                          <Input
                            value={formData.studyYear}
                            onChange={(e) => setFormData({...formData, studyYear: e.target.value})}
                            required
                            placeholder="e.g., 2nd Year, Final Year, Masters"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Previous Leadership Experience</label>
                          <Input
                            value={formData.previousLeadership}
                            onChange={(e) => setFormData({...formData, previousLeadership: e.target.value})}
                            placeholder="e.g., Student Council, Club President, Event Organizer"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Why do you want to become a Campus Guide?</label>
                        <Textarea
                          value={formData.motivation}
                          onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                          placeholder="Tell us about your motivation to help peers with international education..."
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Processing Your Application...
                          </>
                        ) : (
                          <>
                            <Zap className="mr-2 h-5 w-5" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </Container>
          </section>
        )}

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about the Campus Guides Program
              </p>
            </div>
            
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <Container>
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-4 text-3xl font-bold">Ready to Lead Your Campus?</h2>
              <p className="mb-8 text-xl opacity-90">
                Join the EA Global Campus Guides Program today and start making a meaningful impact while earning Leadership Award Bonuses for your dedication.
              </p>
              
              {!session ? (
                <Button 
                  onClick={() => signIn('google', { callbackUrl: window.location.href + '#application' })}
                  size="lg"
                  variant="secondary"
                  className="px-8"
                >
                  Sign in with Google to Apply
                </Button>
              ) : (
                <Button 
                  size="lg"
                  variant="secondary"
                  className="px-8"
                  asChild
                >
                  <a href="#application">Submit Your Application</a>
                </Button>
              )}
            </div>
          </Container>
        </section>

        {/* Sign Out Section - Only show when signed in */}
        {session && (
          <section className="py-8 bg-gray-100">
            <Container>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Signed in as <strong>{session.user?.name}</strong> ({session.user?.email})
                </p>
                <Button 
                  onClick={() => signOut()}
                  variant="outline"
                  size="sm"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Sign Out
                </Button>
              </div>
            </Container>
          </section>
        )}
      </div>
    </>
  );
}
