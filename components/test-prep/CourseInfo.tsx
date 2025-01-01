'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar, Users, Check } from 'lucide-react';

interface CourseInfoProps {
  duration: string;
  schedule: string;
  batchSize: string;
}

export default function CourseInfo({ duration, schedule, batchSize }: CourseInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Course Information</h2>
      <div className="grid gap-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Duration</h3>
              <p className="text-gray-600">{duration}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Schedule</h3>
              <p className="text-gray-600">{schedule}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Batch Size</h3>
              <p className="text-gray-600">{batchSize}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-50">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Why Choose Our Program?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>Expert instructors with proven track record</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>Small batch sizes for personalized attention</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>Comprehensive study materials included</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>Regular mock tests and performance tracking</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}