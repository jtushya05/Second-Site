'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Video, Globe, Code, GraduationCap, Clock, MapPin, Building } from 'lucide-react';

const roles = [
  {
    title: 'Social Media Admin',
    type: ['Internship'],
    icon: Users,
    description: 'Manage and grow our social media presence across platforms. Create engaging content and build our online community.',
    responsibilities: [
      'Create and schedule social media content',
      'Engage with followers and respond to queries',
      'Track analytics and create performance reports',
      'Stay updated with social media trends'
    ],
    requirements: [
      'Strong understanding of social media platforms',
      'Excellent written and verbal communication',
      'Experience with social media management tools',
      'Creative mindset and attention to detail'
    ]
  },
  {
    title: 'Video Editor',
    type: ['Internship'],
    icon: Video,
    description: 'Create compelling video content for our educational and marketing materials. Transform raw footage into engaging stories.',
    responsibilities: [
      'Edit and produce high-quality videos',
      'Create motion graphics and animations',
      'Collaborate with content team',
      'Maintain brand consistency in videos'
    ],
    requirements: [
      'Proficiency in Adobe Premiere Pro/Final Cut Pro or similar softwares',
      'Understanding of video editing principles',
      //'Portfolio of previous work',
      'Knowledge of motion graphics is a plus'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    type: ['Internship'],
    icon: Globe,
    description: 'Drive our digital marketing initiatives and help students discover their educational opportunities abroad.',
    responsibilities: [
      'Plan and execute digital marketing campaigns',
      'Manage PPC and social media advertising',
      'Analyze campaign performance',
      'Create marketing content'
    ],
    requirements: [
      'Understanding of digital marketing channels',
      'Experience with Google Ads and social media ads',
      'Analytical mindset',
      'Strong communication skills'
    ]
  },
  {
    title: 'Web Developer',
    type: ['Internship'],
    icon: Code,
    description: 'Build and maintain our web applications. Create seamless digital experiences for our users.',
    responsibilities: [
      'Develop and maintain web applications',
      'Implement responsive designs',
      'Optimize application performance',
      'Write clean, maintainable code'
    ],
    requirements: [
      'Proficiency in React/Next.js',
      'Understanding of modern web technologies',
      'Experience with version control (Git)',
      'Knowledge of UI/UX principles'
    ]
  }
];

const perks = [
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible scheduling'
  },
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description: 'Regular training and skill development'
  },
  {
    icon: MapPin,
    title: 'Hybrid Work',
    description: 'Mix of remote and office work options'
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work with a supportive and dynamic team'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] w-full bg-blue-600">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
          alt="Join Our Team"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Join Our Team as Interns
              </h1>
              <p className="text-lg text-white/90 md:text-xl">
                Help shape the future of international education. We're looking for passionate individuals to join our growing team.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Main Content */}
      <Container className="py-16">
        {/* Open Positions */}
        <section>
          <h2 className="mb-8 text-center text-3xl font-bold">Open Positions</h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600">We are currently hiring interns for the following roles:</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {roles.map((role) => (
                <Link key={role.title} href={`#${role.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  <Badge variant="outline">
                    {role.title}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8">
            {roles.map((role) => (
              <Card key={role.title} id={role.title.replace(/\s+/g, '-').toLowerCase()} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <role.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{role.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {role.type.map((type) => (
                            <Badge key={type} variant="secondary">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/careers/apply">Apply Now</Link>
                    </Button>
                  </div>

                  <p className="mb-6 text-gray-600">{role.description}</p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 font-semibold">Responsibilities</h4>
                      <ul className="list-inside list-disc space-y-2 text-gray-600">
                        {role.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-semibold">Requirements</h4>
                      <ul className="list-inside list-disc space-y-2 text-gray-600">
                        {role.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Add space before Why Work With Us section */}
        <div className="my-16"></div>

        {/* Perks Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Why Work With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <Card key={perk.title} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="mx-auto mb-4 h-8 w-8 text-blue-600" />
                    <h3 className="mb-2 font-semibold">{perk.title}</h3>
                    <p className="text-gray-600">{perk.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
}