'use client';

import { Container } from '@/components/ui/container';
import { Card, CardContent } from '@/components/ui/card';
import { Code, ChartBar, Building2, Stethoscope, Flask, GraduationCap } from 'lucide-react';

const courses = [
  {
    icon: Code,
    name: 'Computer Science & IT',
    programs: [
      'MSc Data Science',
      'MSc Artificial Intelligence',
      'MSc Computer Science',
      'MSc Cyber Security'
    ]
  },
  {
    icon: ChartBar,
    name: 'Business & Management',
    programs: [
      'MBA',
      'MSc International Business',
      'MSc Finance',
      'MSc Marketing'
    ]
  },
  {
    icon: Building2,
    name: 'Engineering',
    programs: [
      'MSc Mechanical Engineering',
      'MSc Civil Engineering',
      'MSc Electrical Engineering',
      'MSc Aerospace Engineering'
    ]
  }
];

export function PopularCourses() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-8 text-3xl font-bold">Popular Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.name} className="hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{course.name}</h3>
                  </div>
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