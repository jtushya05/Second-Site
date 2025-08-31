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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
  Network,
  School,
  Calendar,
  MapPin,
  Briefcase
} from 'lucide-react';
import { toast } from 'sonner';
import BaseNavigation from '@/components/navigation/BaseNavigation';
import { generateReferralCode, trackReferralUsage } from '@/lib/referral-utils';
import { completeCampusGuideRegistrationDB, trackReferralUsageDB, getExistingCampusGuideRegistration, getUserByEmail, updateCampusGuideRegistrationDB } from '@/lib/database';

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
  },
  {
    icon: Briefcase,
    title: 'Resume Enhancement',
    description: 'Official Campus Guide certification and leadership experience that stands out on your resume and LinkedIn profile.'
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
    question: 'Who is eligible to become a Campus Guide?',
    answer: 'Current undergraduate and graduate students at recognized universities who demonstrate leadership potential, passion for international education, and commitment to helping fellow students.'
  },
  {
    question: 'Will I receive compensation for my efforts?',
    answer: 'Yes! For each student you refer who enrolls at EA Global, you will receive a Leadership Award Bonus—a meaningful financial recognition that honors your campus leadership role.'
  },
  {
    question: 'How much time commitment is required?',
    answer: 'We recommend 3-5 hours per week for optimal results, but you can work at your own pace. Most activities include sharing your referral link, hosting informal info sessions, and engaging with interested peers.'
  },
  {
    question: 'What kind of training and support do I get?',
    answer: 'You\'ll receive comprehensive training on EA Global programs, effective communication strategies, marketing materials, and ongoing support from our team throughout your tenure as a Campus Guide.'
  },
  {
    question: 'How do I track my referrals and earnings?',
    answer: 'You\'ll receive email and WhatsApp notifications for each successful referral, along with detailed tracking of your Leadership Award Bonuses and impact metrics.'
  },
  {
    question: 'Can this help with my career development?',
    answer: 'Absolutely! Being a Campus Guide provides valuable leadership experience, professional development opportunities, networking access, and priority consideration for EA Global internships and job opportunities.'
  }
];

export default function CampusGuidesPage() {
  const { data: session, status } = useSession();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [existingRegistration, setExistingRegistration] = useState<any>(null);
  const [referralLink, setReferralLink] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    linkedinProfile: '',
    university: '',
    courseOfStudy: '',
    yearOfStudy: '',
    city: '',
    previousLeadershipExperience: '',
    whyBecomeGuide: '',
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
      // Check for existing registration
      checkExistingRegistration(session.user.email!);
    }
  }, [session]);

  const checkExistingRegistration = async (email: string) => {
    try {
      setIsLoading(true);
      const existing = await getExistingCampusGuideRegistration(email);
      
      if (existing) {
        setExistingRegistration(existing);
        setIsRegistered(true);
        const baseUrl = window.location.origin;
        setReferralLink(`${baseUrl}?ref=${existing.referral_code}`);
        
        // Pre-fill form with existing data
        setFormData(prev => ({
          ...prev,
          whatsappNumber: existing.users?.whatsapp_number || '',
          linkedinProfile: existing.users?.linkedin_profile || '',
          city: existing.users?.city || '',
          university: existing.university || '',
          courseOfStudy: existing.course_of_study || '',
          yearOfStudy: existing.year_of_study || '',
          previousLeadershipExperience: existing.previous_leadership_experience || '',
          whyBecomeGuide: existing.why_become_guide || '',
          additionalInfo: existing.additional_info || '',
          referralCode: existing.referral_code
        }));
      }
    } catch (error) {
      console.error('Error checking existing registration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!session?.user) {
      toast.error('Please sign in with Google first');
      setIsSubmitting(false);
      return;
    }

    // Validate required fields for Campus Guides
    if (!formData.whatsappNumber || !formData.university || !formData.yearOfStudy || !formData.linkedinProfile || !formData.whyBecomeGuide) {
      toast.error('Please fill in all required fields: WhatsApp number, university, year of study, LinkedIn profile, and reason for becoming a campus guide');
      setIsSubmitting(false);
      return;
    }

    try {
      if (existingRegistration && isEditing) {
        // Update existing registration
        const updateResult = await updateCampusGuideRegistrationDB(existingRegistration.id, {
          whatsapp_number: formData.whatsappNumber,
          linkedin_profile: formData.linkedinProfile,
          city: formData.city,
          university: formData.university,
          year_of_study: formData.yearOfStudy,
          course_of_study: formData.courseOfStudy,
          previous_leadership_experience: formData.previousLeadershipExperience,
          why_become_guide: formData.whyBecomeGuide,
          additional_info: formData.additionalInfo
        });

        if (updateResult.success) {
          toast.success('Your campus guide details have been updated successfully!');
          setIsEditing(false);
        } else {
          throw new Error(updateResult.error || 'Failed to update registration');
        }
      } else {
        // Create new registration
        const timestamp = Date.now();
        const referralCode = generateReferralCode(formData.email, formData.fullName, timestamp, 'campus_guide');
        const baseUrl = window.location.origin;
        const generatedLink = `${baseUrl}?ref=${referralCode}`;

        // Track the generation of this referral link
        trackReferralUsage(referralCode, 'campus_guide_link_generated');

        // Submit to Google Form for Campus Guide registration
        const googleFormData = {
          'entry.913553209': formData.fullName,          // Full Name
          'entry.1450608257': formData.whatsappNumber,   // Whatsapp Number
          'entry.580063426': formData.email,             // Email Address (from google signin)
          'entry.472750495': referralCode,               // Referral code
          'entry.24200269': generatedLink,               // Referral link
          'entry.527894219': formData.linkedinProfile || '', // Linkedin URL
          'entry.1757881461': formData.city || '',       // City
          'entry.993353024': formData.university || '',  // College (for campus guides)
          'entry.572299127': JSON.stringify({            // Google account details
            name: session.user?.name,
            email: session.user?.email,
            image: session.user?.image
          }),
          'entry.556719572': JSON.stringify({            // Any other miscellaneous details
            role: 'campus_guide',
            courseOfStudy: formData.courseOfStudy,
            yearOfStudy: formData.yearOfStudy,
            previousLeadershipExperience: formData.previousLeadershipExperience,
            whyBecomeGuide: formData.whyBecomeGuide,
            additionalInfo: formData.additionalInfo,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            // Include all localStorage tracking data
            referralTrackingData: {
              allUrlParams: JSON.parse(localStorage.getItem('urlParams') || '{}'),
              referralSource: localStorage.getItem('ref') || '',
              sessionId: sessionStorage.getItem('sessionId') || '',
              pageLoadCount: sessionStorage.getItem('pageLoadCount') || '0',
            },
            // Additional browser/session info
            browserInfo: {
              language: navigator.language,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              screenResolution: `${screen.width}x${screen.height}`,
              userAgent: navigator.userAgent,
            }
          })
        };

        // Submit to Google Form (keep existing functionality)
        await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeehn3QC6HJjuR3v9Gr9GiwkWKk6LMEyq17rrj0bmfk-F__fw/formResponse', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(googleFormData)
        });

        // Also save to database (new feature)
        const dbResult = await completeCampusGuideRegistrationDB({
          email: formData.email,
          full_name: formData.fullName,
          whatsapp_number: formData.whatsappNumber,
          linkedin_profile: formData.linkedinProfile,
          city: formData.city,
          university: formData.university,
          year_of_study: formData.yearOfStudy,
          course_of_study: formData.courseOfStudy,
          previous_leadership_experience: formData.previousLeadershipExperience,
          why_become_guide: formData.whyBecomeGuide,
          additional_info: formData.additionalInfo,
          referral_code: referralCode,
          google_account_data: {
            name: session.user?.name,
            email: session.user?.email,
            image: session.user?.image
          }
        });

        if (dbResult) {
          console.log('Campus Guide registration saved to database:', dbResult);
        }

        setReferralLink(generatedLink);
        setFormData(prev => ({ ...prev, referralCode }));
        setIsRegistered(true);
        toast.success('Welcome to the EA Global Campus Guides Program!');
      }
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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  if (isLoading) {
    return (
      <>
        <BaseNavigation variant="solid" />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
          <Container className="py-16">
            <div className="mx-auto max-w-4xl text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading your campus guide information...</p>
            </div>
          </Container>
        </div>
      </>
    );
  }

  if (isRegistered) {
    return (
      <>
        <BaseNavigation variant="solid" />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
          <Container className="py-16">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <Badge className="mb-4 bg-green-100 text-green-800">Campus Guide Activated</Badge>
              </div>
              
              <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                🎉 Welcome to the EA Global Campus Guides Program!
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                You're now an official Campus Guide! Here's your personalized referral link and campus leadership toolkit:
              </p>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      Your Campus Guide Referral Link
                    </div>
                    <Button onClick={handleEditToggle} variant="outline" size="sm">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Edit Details
                    </Button>
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
                    Share this link with fellow students interested in international education opportunities
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card className="border-green-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <School className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Lead Your Campus</h3>
                    <p className="text-sm text-gray-600">
                      Host info sessions, engage in student groups, and share opportunities with your peers
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Earn Leadership Bonuses</h3>
                    <p className="text-sm text-gray-600">
                      Receive Leadership Award Bonuses for successful student enrollments
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Trophy className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="mb-2 font-semibold">Build Your Resume</h3>
                    <p className="text-sm text-gray-600">
                      Gain valuable leadership experience and priority access to opportunities
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg bg-green-50 p-6 mb-8">
                <h3 className="mb-4 text-lg font-semibold text-green-900">Your Campus Guide Journey Starts Now</h3>
                <div className="grid gap-4 md:grid-cols-2 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Training Materials Coming Soon</p>
                      <p className="text-sm text-gray-600">You'll receive comprehensive training materials and campus outreach strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Start Sharing Today</p>
                      <p className="text-sm text-gray-600">Begin sharing your link with classmates interested in studying abroad</p>
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

              {/* Edit Details Dialog */}
              <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Edit Campus Guide Details</DialogTitle>
                    <DialogDescription>
                      Update your campus guide information. Your referral link will remain the same.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Full Name</label>
                        <Input
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          disabled
                          className="bg-gray-50"
                        />
                        <p className="text-xs text-gray-500 mt-1">Name from Google account (cannot be changed)</p>
                      </div>
                      
                      <div>
                        <label className="mb-2 block text-sm font-medium">Email Address</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          disabled
                          className="bg-gray-50"
                        />
                        <p className="text-xs text-gray-500 mt-1">Email from Google account (cannot be changed)</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">WhatsApp Number <span className="text-red-500">*</span></label>
                        <Input
                          type="tel"
                          value={formData.whatsappNumber}
                          onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                          placeholder="+91 9876543210"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="mb-2 block text-sm font-medium">LinkedIn Profile <span className="text-red-500">*</span></label>
                        <Input
                          type="url"
                          value={formData.linkedinProfile}
                          onChange={(e) => setFormData({...formData, linkedinProfile: e.target.value})}
                          placeholder="https://linkedin.com/in/yourprofile"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">University/College <span className="text-red-500">*</span></label>
                        <Input
                          value={formData.university}
                          onChange={(e) => setFormData({...formData, university: e.target.value})}
                          placeholder="e.g., University of Delhi, IIT Bombay"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="mb-2 block text-sm font-medium">Year of Study <span className="text-red-500">*</span></label>
                        <Input
                          value={formData.yearOfStudy}
                          onChange={(e) => setFormData({...formData, yearOfStudy: e.target.value})}
                          placeholder="e.g., 2nd Year, Final Year"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Course of Study</label>
                        <Input
                          value={formData.courseOfStudy}
                          onChange={(e) => setFormData({...formData, courseOfStudy: e.target.value})}
                          placeholder="e.g., Computer Science, Business, Engineering"
                        />
                      </div>
                      
                      <div>
                        <label className="mb-2 block text-sm font-medium">City</label>
                        <Input
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          placeholder="e.g., Mumbai, Delhi, Bangalore"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Previous Leadership Experience</label>
                      <Textarea
                        value={formData.previousLeadershipExperience}
                        onChange={(e) => setFormData({...formData, previousLeadershipExperience: e.target.value})}
                        placeholder="Describe any leadership roles, club positions, volunteer work..."
                        className="min-h-[80px]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Why do you want to become a Campus Guide? <span className="text-red-500">*</span></label>
                      <Textarea
                        value={formData.whyBecomeGuide}
                        onChange={(e) => setFormData({...formData, whyBecomeGuide: e.target.value})}
                        placeholder="Share your motivation and how you plan to help fellow students..."
                        className="min-h-[80px]"
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Additional Information</label>
                      <Textarea
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                        placeholder="Any additional information you'd like to share..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </form>

                  <DialogFooter>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Updating...
                        </>
                      ) : (
                        'Update Details'
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Container>
        </div>
      </>
    );
  }

  return (
    <>
      <BaseNavigation variant="solid" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Student Leadership Program</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Become an EA Global Campus Guide — 
                <span className="text-primary"> Lead, Inspire, Earn</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600 leading-relaxed">
                As a Campus Guide, you become a trusted leader on your campus, helping fellow students discover global education opportunities while earning Leadership Award Bonuses and building valuable experience for your career.
              </p>
              
              {!session ? (
                <div className="space-y-6">
                  <Button 
                    onClick={() => signIn('google')}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg"
                  >
                    <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign in with Google to Apply
                  </Button>
                  <p className="text-sm text-gray-500">
                    Secure Google sign-in required to access the Campus Guides program
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                    <a href="#application">Apply Now</a>
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
                  The EA Global Campus Guides Program empowers ambitious students to become leaders on their campuses while helping peers discover life-changing international education opportunities. As a Campus Guide, you're not just earning—you're building a foundation for your future career.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <School className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Campus Leadership</h3>
                    <p className="text-gray-600">Develop authentic leadership skills while making a real impact on your campus community</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                      <Briefcase className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Career Building</h3>
                    <p className="text-gray-600">Gain valuable experience, networking opportunities, and priority access to internships</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                      <DollarSign className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Financial Recognition</h3>
                    <p className="text-gray-600">Earn Leadership Award Bonuses for successful student referrals and enrollments</p>
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
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Your Campus Guide Journey</h2>
              <p className="text-lg text-gray-600">
                A comprehensive 6-step program designed to help you succeed as a campus leader
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              {steps.map((step, index) => (
                <div key={step.number} className="mb-8 flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <step.icon className="h-8 w-8 text-green-600" />
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
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Campus Guide Benefits</h2>
              <p className="text-lg text-gray-600">
                Comprehensive benefits designed to support your academic and career success
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="h-full">
                    <CardContent className="p-6">
                      <Icon className="mb-4 h-10 w-10 text-green-600" />
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
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <UserPlus className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">
                      Campus Guide Application
                    </CardTitle>
                    <p className="text-gray-600">
                      Join our student leadership program and start making an impact on your campus
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
                      <div className="rounded-lg bg-green-50 p-4 mb-6">
                        <p className="text-sm text-green-800">
                          <strong>Required fields (*):</strong> Full Name, Email, WhatsApp Number, University, and Year of Study.
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
                          <label className="mb-2 block text-sm font-medium">WhatsApp Number *</label>
                          <Input
                            type="tel"
                            value={formData.whatsappNumber}
                            onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                            required
                            placeholder="+91 98765 43210"
                          />
                          <p className="mt-1 text-xs text-gray-500">Used for program updates and notifications</p>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">LinkedIn Profile <span className="text-red-500">*</span></label>
                          <Input
                            type="url"
                            value={formData.linkedinProfile}
                            onChange={(e) => setFormData({...formData, linkedinProfile: e.target.value})}
                            placeholder="https://linkedin.com/in/yourprofile"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium">University/College *</label>
                          <Input
                            value={formData.university}
                            onChange={(e) => setFormData({...formData, university: e.target.value})}
                            required
                            placeholder="e.g., University of Delhi, IIT Bombay"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Year of Study *</label>
                          <Input
                            value={formData.yearOfStudy}
                            onChange={(e) => setFormData({...formData, yearOfStudy: e.target.value})}
                            required
                            placeholder="e.g., 2nd Year, 3rd Year, Final Year"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium">Course of Study</label>
                          <Input
                            value={formData.courseOfStudy}
                            onChange={(e) => setFormData({...formData, courseOfStudy: e.target.value})}
                            placeholder="e.g., Computer Science, Business, Engineering"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium">City</label>
                          <Input
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                            placeholder="e.g., Mumbai, Delhi, Bangalore"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Previous Leadership Experience</label>
                        <Textarea
                          value={formData.previousLeadershipExperience}
                          onChange={(e) => setFormData({...formData, previousLeadershipExperience: e.target.value})}
                          placeholder="Describe any leadership roles, club positions, volunteer work, or organizing experience..."
                          className="min-h-[100px]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Why do you want to become a Campus Guide? <span className="text-red-500">*</span></label>
                        <Textarea
                          value={formData.whyBecomeGuide}
                          onChange={(e) => setFormData({...formData, whyBecomeGuide: e.target.value})}
                          placeholder="Share your motivation and how you plan to help fellow students..."
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium">Additional Information</label>
                        <Textarea
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                          placeholder="Any additional information you'd like to share..."
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
                            Generating Your Campus Guide Link...
                          </>
                        ) : (
                          <>
                            <Zap className="mr-2 h-5 w-5" />
                            Apply to Become a Campus Guide
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
        <section className="py-16 bg-green-600">
          <Container>
            <div className="mx-auto max-w-3xl text-center text-white">
              <h2 className="mb-4 text-3xl font-bold">Ready to Lead Your Campus?</h2>
              <p className="mb-8 text-xl opacity-90">
                Join the EA Global Campus Guides Program today and start building your leadership experience while helping fellow students discover amazing international education opportunities.
              </p>
              
              {!session ? (
                <Button 
                  onClick={() => signIn('google')}
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
