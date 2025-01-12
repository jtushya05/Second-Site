export interface Destination {
  id: string;
  name: string;
  flagUrl: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export interface TestPrep {
  id: string;
  name: string;
  shortName: string;
  description: string;
  slug: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Testimonial {
  id: number;
  type: 'text' | 'video' | 'text+video';
  name: string;
  designation: string;
  profilePic: string;
  rating: number;
  text?: string;
  videoUrl?: string;
  googleLink?: string;
  tags: string[];
}