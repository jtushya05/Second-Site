'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const founder = {
name: 'Darshana Jain', // Updated founder's name
  role: 'Founder & CEO',
  image: 'images/founderImage.png',
  linkedin: 'https://www.linkedin.com/in/darshana-englisharena',
  message: `As the founder of EA Global, my vision has always been to bridge the gap between Indian students and world-class international education. With over two decades of experience in education consulting, I understand the challenges and aspirations of students seeking to study abroad.

Our commitment goes beyond just admissions - we strive to be true mentors, guiding students through every step of their journey towards academic and professional success.`
};

const team = [
  {
    name: 'Priya Sharma',
    role: 'Head of Counseling',
    image: '/images/team members/team-pic2_2.png',
    linkedin: '#'
  },
  {
    name: 'Arun Patel',
    role: 'Test Prep Director',
    image: '/images/team members/team-img1.jpg',
    linkedin: '#'
  },
  {
    name: 'Sarah Johnson',
    role: 'International Relations',
    image: '/images/team members/team-pic1.jpg',
    linkedin: '#'
  },
  {
    name: 'Akshay Mehta',
    role: 'Student Advisor',
    image: '/images/team members/team-img2.jpeg',
    linkedin: '#'
  }
];

export default function OurTeam() {
  return (
    <section className="py-24">
      <Container>
        {/* Founder Section */}
        <div className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Founder's Message
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={founder.image}
                alt={founder.name}
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 text-2xl font-bold">{founder.name}</h3>
              <p className="mb-4 text-lg text-gray-600">{founder.role}</p>
              <div className="space-y-4 text-gray-600">
                {founder.message.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <a
                href={founder.linkedin}
                className="mt-6 inline-flex w-fit items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Expert Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-4 text-gray-600">{member.role}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Connect</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}