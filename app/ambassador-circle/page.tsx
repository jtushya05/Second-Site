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
  Zap
} from 'lucide-react';
import { toast } from 'sonner';
import BaseNavigation from '@/components/navigation/BaseNavigation';

const benefits = [
  {
    icon: DollarSign,
    title: 'Impact Recognition Bonus',
    description: 'A clear, transparent monetary thank-you paid for every successful student enrollment. This bonus is a token of appreciation recognizing your key role in EA Global\'s mission.'
  },
  {
    icon: Award,
    title: 'Community Recognition',
    description: 'Digital certificates, LinkedIn endorsements, and ambassador spotlights in newsletters and reports.'
  },
  {
    icon: Crown,
    title: 'Exclusive Access',
    description: 'Invites to private webinars, networking events, and leadership opportunities within EA Global.'
  }
];

const steps = [
  {
    number: 1,
    title: 'Invitation & Enrollment',
    description: 'Invitations are extended to alumni and trusted community members. Once accepted, you\'ll gain exclusive access.',
    icon: UserPlus
  },
  {
    number: 2,
    title: 'Personalized Ambassador Link',
    description: 'Receive your unique referral link with materials to share EA Global\'s transformative programs.',
    icon: Share2
  },
  {
    number: 3,
    title: 'Share & Inspire',
    description: 'Introduce prospective students—friends, family, or professional contacts—to our programs.',
    icon: Target
  },
  {
    number: 4,
    title: 'Earn Impact Recognition Bonuses',
    description: 'For each referred student who enrolls, you receive a financial Impact Recognition Bonus as a sincere thank you.',
    icon: DollarSign
  },
  {
    number: 5,
    title: 'Unlock Exclusive Benefits',
    description: 'Certificates, LinkedIn endorsements, invitations to special EA Global events, and public acknowledgments.',
    icon: Trophy
  }
];

const faqs = [
  {
    question: 'Will I receive money for referrals?',
    answer: 'Yes. For each student you refer who enrolls at EA Global, you will receive an Impact Recognition Bonus—a meaningful financial thank you that honors your valuable role and far exceeds a typical commission.'
  },
  {
    question: 'How do I track my referrals and bonuses?',
    answer: 'You will receive email and WhatsApp notifications confirming each successful registration from people you referred, along with detailed tracking of your Impact Recognition Bonuses.'
  },
  {
    question: 'Is this a sales role?',
    answer: 'No. You are a trusted Ambassador, valued for your authentic advocacy and leadership—not salesmanship. This is about sharing opportunities with people you genuinely care about.'
  },
  {
    question: 'How do I share my referral link?',
    answer: 'Once you join the Ambassador Circle, you\'ll receive a personalized referral link along with marketing materials, messaging templates, and a complete ambassador toolkit.'
  },
  {
    question: 'Who can become an Ambassador?',
    answer: 'We invite alumni, past students, trusted contacts, and anyone already connected with our mission who believes in the power of international education.'
  },
  {
    question: 'What kind of support do I get?',
    answer: 'You\'ll receive comprehensive support including marketing materials, messaging templates, training resources, and dedicated support from our team.'
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

export default function AmbassadorCirclePage() {
  const { data: session, status } = useSession();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referralLink, setReferralLink] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    linkedinProfile: '',
    currentOccupation: '',
    connectionToEAGlobal: '',
    referralCode: '',
    additionalInfo: ''
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

    // Validate required fields (only WhatsApp number, since name and email come from Google auth)
    if (!formData.whatsappNumber) {
      toast.error('Please provide your WhatsApp number');
      setIsSubmitting(false);
      return;
    }

    const timestamp = Date.now();
    const referralCode = generateReferralCode(formData.email, formData.fullName, timestamp);
    const baseUrl = window.location.origin;
    const generatedLink = `${baseUrl}?ref=${referralCode}`;

    // Submit to Google Form for Ambassador registration
    // Only submitting fields that have corresponding form entries
    // Other fields are collected for future use but not currently submitted
    const googleFormData = {
      'entry.913553209': formData.fullName,          // FullName (from Google Auth)
      'entry.580063426': formData.email,             // EmailAddress (from Google Auth)
      'entry.1450608257': formData.whatsappNumber,   // WhatsappNumber (Required - submitted as phone field)
      'entry.472750495': referralCode,               // ReferralCode (Generated)
      'entry.24200269': generatedLink,               // ReferralLink (Generated)
      
      // Note: The following fields are collected but not submitted to this form:
      // - linkedinProfile (formData.linkedinProfile) 
      // - currentOccupation (formData.currentOccupation)
      // - connectionToEAGlobal (formData.connectionToEAGlobal)
      // - additionalInfo (formData.additionalInfo)
      // These will be implemented when additional form IDs are available
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
      toast.success('Welcome to the EA Global Ambassador Circle!');
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
                <Badge className="mb-4 bg-green-100 text-green-800">Ambassador Activated</Badge>
              </div>
              
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                🎉 Welcome to the EA Global Ambassador Circle!
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                You're now part of an exclusive community of education advocates. Here's your personalized referral link and ambassador toolkit:
              </p>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Your Personalized Ambassador Link
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
                    Share this link with friends, family, and professional contacts interested in international education
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Share2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Share Your Link</h3>
                    <p className="text-sm text-gray-600">
                      Share with friends, family, and professional contacts interested in studying abroad
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-yellow-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Earn Impact Bonuses</h3>
                    <p className="text-sm text-gray-600">
                      Receive meaningful Impact Recognition Bonuses for successful enrollments
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Crown className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Exclusive Access</h3>
                    <p className="text-sm text-gray-600">
                      Join exclusive events, webinars, and networking opportunities
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
                      <p className="font-medium">Check Your Email</p>
                      <p className="text-sm text-gray-600">You'll receive a welcome email with your ambassador toolkit and resources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Start Sharing</p>
                      <p className="text-sm text-gray-600">Begin sharing your link with people who might benefit from international education</p>
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Exclusive Invitation</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Join the EA Global Ambassador Circle — 
                <span className="text-blue-600"> Shape Futures, Build Legacies</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600 leading-relaxed">
                As a valued member of our Ambassador Circle, you help open doors for aspiring global scholars—and receive meaningful recognition for your leadership, including a financial thank-you for each successful enrollment.
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
                    Sign in with Google to Join the Circle
                  </Button>
                  <p className="text-sm text-gray-500">
                    Secure Google sign-in required to access the exclusive Ambassador program
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                    <a href="#application">Join the Circle</a>
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
                <h2 className="mb-6 text-3xl font-bold text-gray-900">About the Ambassador Circle</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The EA Global Ambassador Circle honors alumni and trusted partners who passionately advocate for international education. Your leadership and advocacy go beyond referrals—you're shaping futures and creating a lasting impact in the global education community.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Trusted Community</h3>
                    <p className="text-gray-600">Join an exclusive network of education advocates and thought leaders</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Global Impact</h3>
                    <p className="text-gray-600">Help students access world-class international education opportunities</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <Star className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Meaningful Recognition</h3>
                    <p className="text-gray-600">Receive financial and community recognition for your valuable contributions</p>
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
              <h2 className="mb-4 text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="text-lg text-gray-600">
                A simple 5-step process to become an ambassador and start making an impact
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
                Exclusive benefits that recognize your valuable contribution to global education
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
                      <UserPlus className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">
                      Ambassador Circle Application
                    </CardTitle>
                    <p className="text-gray-600">
                      Complete your application to join our exclusive community of education advocates
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 rounded-lg bg-green-50 p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-900">Signed in as {session.user?.name}</p>
                          <p className="text-sm text-green-700">{session.user?.email}</p>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="rounded-lg bg-blue-50 p-4 mb-6">
                        <p className="text-sm text-blue-800">
                          <strong>Required fields (*):</strong> Full Name, Email, and WhatsApp Number. Additional details are collected for future features.
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
                            {formData.whatsappNumber && <span className="text-green-600 ml-1">(Will be submitted)</span>}
                          </label>
                          <Input
                            type="tel"
                            value={formData.whatsappNumber}
                            onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                            required
                            placeholder="+91 98765 43210"
                          />
                          <p className="mt-1 text-xs text-gray-500">Used for ambassador support and notifications</p>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">LinkedIn Profile</label>
                          <Input
                            type="url"
                            value={formData.linkedinProfile}
                            onChange={(e) => setFormData({...formData, linkedinProfile: e.target.value})}
                            placeholder="https://linkedin.com/in/yourprofile"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Current Occupation</label>
                        <Input
                          value={formData.currentOccupation}
                          onChange={(e) => setFormData({...formData, currentOccupation: e.target.value})}
                          placeholder="e.g., Software Engineer, Student, Business Owner"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Connection to EA Global</label>
                        <Input
                          value={formData.connectionToEAGlobal}
                          onChange={(e) => setFormData({...formData, connectionToEAGlobal: e.target.value})}
                          placeholder="e.g., Alumni, Parent of student, Professional contact"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Additional Information</label>
                        <Textarea
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                          placeholder="Tell us more about your interest in becoming an ambassador..."
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
                            Generating Your Ambassador Link...
                          </>
                        ) : (
                          <>
                            <Zap className="mr-2 h-5 w-5" />
                            Generate My Ambassador Link
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
                Everything you need to know about the Ambassador Circle
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
              <h2 className="mb-4 text-3xl font-bold">Ready to Make an Impact?</h2>
              <p className="mb-8 text-xl opacity-90">
                Join the EA Global Ambassador Circle today and start shaping the future of international education while earning meaningful recognition for your contributions.
              </p>
              
              {!session ? (
                <Button 
                  onClick={() => signIn('google', { callbackUrl: window.location.href + '#application' })}
                  size="lg"
                  variant="secondary"
                  className="px-8"
                >
                  Sign in with Google to Get Started
                </Button>
              ) : (
                <Button 
                  size="lg"
                  variant="secondary"
                  className="px-8"
                  asChild
                >
                  <a href="#application">Complete Your Application</a>
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