import { GraduationCap, BookOpen, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

const services = [
  {
    title: 'University Admissions',
    description: 'Expert guidance for university selection and application process',
    icon: GraduationCap,
    href: '/destinations'
  },
  {
    title: 'Test Preparation',
    description: 'Comprehensive training for IELTS, TOEFL, PTE, and more',
    icon: BookOpen,
    href: '/test-prep'
  },
  {
    title: 'Visa Assistance',
    description: 'Support throughout the student visa application process',
    icon: Globe,
    href: '/visa-assistance'
  },
  {
    title: 'Career Counseling',
    description: 'Personalized guidance for course and career selection',
    icon: Users,
    href: 'https://counselling.englisharenaglobal.com'
  }
];

export default function Services() {
  return (
    <section className="w-full py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Comprehensive support for your international education journey
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
<Link key={service.title} href={service.href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary" />
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}