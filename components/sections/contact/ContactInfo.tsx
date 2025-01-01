'use client';

import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    content: ['123 Anna Nagar, 2nd Floor', 'Near Anna Nagar Tower', 'Chennai, Tamil Nadu 600040', 'India']
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+91 98765 43210']
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@eaglobal.edu']
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed'
    ]
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfo.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title}>
            <CardContent className="flex items-start gap-4 p-4">
              <Icon className="h-6 w-6 shrink-0 text-blue-600" />
              <div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                {item.content.map((line, index) => (
                  <p key={index} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}