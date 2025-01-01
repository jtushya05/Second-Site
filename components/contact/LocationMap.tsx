import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function LocationMap() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex items-start gap-4">
          <MapPin className="h-6 w-6 shrink-0 text-blue-600" />
          <div>
            <h3 className="mb-2 font-bold">Office</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              127A, Brikkiln Road, Purasaiwakkam, Chennai
            </p>
          </div>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080753342164!2d80.20901631482233!3d13.086204990775615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647887777777!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-video"
          />
        </div>
      </CardContent>
    </Card>
  );
}