'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Code, ChartBar, Building2, FlaskConical, GraduationCap, Stethoscope } from 'lucide-react';

const courses = [
  {
    icon: Code,
    name: 'Technology & Computing',
    programs: [
      'MSc Artificial Intelligence',
      'MSc Data Science',
      'MSc Cybersecurity',
      'MSc Software Engineering',
    ],
    image: 'https://images.unsplash.com/photo-1555435023-d82913b6ccef?q=80&w=1200',
  },
  {
    icon: ChartBar,
    name: 'Business & Management',
    programs: [
      'MBA in International Business',
      'Master in Finance',
      'Master in Marketing',
      'Master in Management',
    ],
    image: 'https://images.unsplash.com/photo-1581092580493-90abf7e36f9d?q=80&w=1200',
  },
  {
    icon: Building2,
    name: 'Engineering',
    programs: [
      'Mechanical Engineering',
      'Civil Engineering',
      'Aerospace Engineering',
      'Environmental Engineering',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200',
  },
];

export default function PopularCourses() {
  return (
    <section className="py-24" id="popular-courses">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-900">Popular Courses in France</h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-700">
            Discover the most sought-after programs by international students in French universities.
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
                  <ul className="ml-4 list-disc space-y-2 text-gray-700">
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
