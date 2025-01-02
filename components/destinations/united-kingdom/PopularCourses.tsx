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
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    programs: [
      'MSc Public Health',
      'MSc Healthcare Management',
      'MSc Nursing',
      'MSc Psychology'
    ]
  },
  {
    icon: Flask,
    name: 'Sciences',
    programs: [
      'MSc Biotechnology',
      'MSc Environmental Science',
      'MSc Chemistry',
      'MSc Physics'
    ]
  },
  {
    icon: GraduationCap,
    name: 'Social Sciences',
    programs: [
      'MA International Relations',
      'MSc Economics',
      'MA Education',
      'MA Media & Communications'
    ]
  }
];

export default function PopularCourses() {
  return (
    <section className="py-24" id="popular-courses">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Popular Courses for International Students</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discover the most sought-after programs by international students in UK universities
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.name} className="hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                      <Icon className="h-6 w-6 text-red-600" />
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