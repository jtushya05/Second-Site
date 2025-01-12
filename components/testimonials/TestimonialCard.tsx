'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Play, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import VideoModal from './VideoModal';
import { Testimonial } from '@/src/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const truncatedText = testimonial.text?.slice(0, 150) + '...';
  const shouldTruncate = testimonial.text && testimonial.text.length > 150;

  const handleVideoClick = () => {
    if (testimonial.videoUrl) {
      setIsVideoModalOpen(true);
    }
  };

  return (
    <>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={testimonial.profilePic}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.designation}</p>
            </div>
          </div>

          <div className="mb-4 flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          {(testimonial.type === 'text' || testimonial.type === 'text+video') && (
            <div className="mb-4">
              <p className="text-gray-600">
                {isExpanded ? testimonial.text : truncatedText}
              </p>
              {shouldTruncate && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
          )}

          {(testimonial.type === 'video' || testimonial.type === 'text+video') && testimonial.videoUrl && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <div
                className="group relative aspect-video cursor-pointer"
                onClick={handleVideoClick}
              >
                <Image
                  src={`https://img.youtube.com/vi/${getYouTubeId(testimonial.videoUrl)}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          )}

          <div className="mb-4 space-y-2">
            {testimonial.googleLink && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(testimonial.googleLink, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Google
              </Button>
            )}
            {testimonial.videoUrl && (
              <Button
                variant="outline"
                className="w-full"
                onClick={handleVideoClick}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Full Video
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {testimonial.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={testimonial.videoUrl}
      />
    </>
  );
}

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : '';
}