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
      'MSc Data Science',
      'MSc Computer Science',
      'MSc Cybersecurity',
      'MSc Artificial Intelligence',
    ],
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200'
  },
  {
    icon: ChartBar,
    name: 'Business & Management',
    programs: [
      'MBA',
      'Master of Finance',
      'Master of Marketing',
      'Master of Management',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200'
  },
  {
    icon: Building2,
    name: 'Engineering',
    programs: [
      'Civil Engineering',
      'Mechanical Engineering',
      'Electrical Engineering',
      'Environmental Engineering',
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200'
  },
  {
    icon: FlaskConical,
    name: 'Sciences',
    programs: [
      'MSc Biotechnology',
      'MSc Environmental Science',
      'MSc Chemistry',
      'MSc Physics',
    ],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200' // Replace with a science-related image
  },
  {
    icon: GraduationCap,
    name: 'Humanities & Arts',
    programs: [
      'Philosophy',
      'History',
      'Sociology',
      'Literature',
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkr3tOGhctVIHAaamWmWPLVc6IClCYCympA&s', // Replace with a humanities-related image
  },
];

export default function PopularCourses() {
  return (
    <section className="py-24" id="popular-courses">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-800">Popular Courses in Singapore</h2>
          <p className="mx-auto max-w-2xl text-lg text-red-600">
            Explore the most sought-after programs by international students in Singapore.
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
