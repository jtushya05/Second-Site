export type TestimonialType = "video" | "text" | "text+video";

export interface Testimonial {
  id: number;
  type: TestimonialType;
  name: string;
  designation: string;
  profilePic: string;
  rating: number;
  text?: string;
  googleLink: string;
  tags: string[];
  videoUrl?: string;
}
