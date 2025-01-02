'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Code, ChartBar, Building2, User } from 'lucide-react';

const courses = [
  {
    icon: Building2,
    name: 'Engineering',
    programs: [
      'Mechanical Engineering',
      'Automotive Engineering',
      'Electrical Engineering',
      'Civil Engineering',
      'Industrial Engineering'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200'
  },
  {
    icon: Code,
    name: 'Computer Science',
    programs: [
      'Software Engineering',
      'Artificial Intelligence',
      'Data Science',
      'Cybersecurity',
      'Robotics'
    ],
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200'
  },
  {
    icon: User,
    name: 'Natural Sciences',
    programs: [
      'Physics',
      'Chemistry',
      'Biotechnology',
      'Environmental Science',
      'Materials Science'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200'
  }
];

export default function PopularCourses() {
  return (
    <section className="py-24" id="popular-courses">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Popular Courses in Germany</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover Germany's most sought-after programs known for their technical excellence and innovation
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.name} className="group overflow-hidden hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <Icon className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">{course.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="ml-4 list-disc space-y-2 text-gray-600">
                    {course.programs.map((program) => (
                      <li key={program}>{program}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}