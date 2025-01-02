'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Code, ChartBar, Building2, Stethoscope, Flask, GraduationCap } from 'lucide-react';

const courses = [
  {
    icon: Code,
    name: 'Technology & Computing',
    programs: [
      'MSc Data Science & Analytics',
      'MSc Computer Science',
      'MSc Artificial Intelligence',
      'MSc Cybersecurity',
      'MSc Cloud Computing'
    ],
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200'
  },
  {
    icon: ChartBar,
    name: 'Business & Management',
    programs: [
      'MBA',
      'MSc Business Analytics',
      'Master of Management',
      'MSc Finance',
      'MSc Digital Marketing'
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200'
  },
  {
    icon: Building2,
    name: 'Engineering',
    programs: [
      'MEng Mechanical Engineering',
      'MEng Civil Engineering',
      'MEng Electrical Engineering',
      'MEng Robotics',
      'MEng Construction Management'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200'
  },
  {
    icon: Stethoscope,
    name: 'Healthcare & Medicine',
    programs: [
      'MSc Nursing',
      'Master of Public Health',
      'MSc Healthcare Administration',
      'MSc Pharmacy',
      'MSc Medical Laboratory Science'
    ],
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1200'
  },
  {
    icon: Flask,
    name: 'Sciences',
    programs: [
      'MSc Biotechnology',
      'MSc Environmental Science',
      'MSc Food Science',
      'MSc Chemistry',
      'MSc Physics'
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200'
  },
  {
    icon: GraduationCap,
    name: 'Social Sciences',
    programs: [
      'MA International Relations',
      'MSc Economics',
      'MA Education',
      'MSc Psychology',
      'MA Communication Studies'
    ],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200'
  }
];

export default function PopularCourses() {
  return (
    <section className="py-24" id="popular-courses">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Popular Courses for Indian Students</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the most sought-after programs by Indian students in Canadian universities
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