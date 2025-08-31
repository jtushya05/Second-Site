export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  totalPages: number;
  genre: string;
  publishedDate: string;
  isbn: string;
  pages: BookPage[];
  // Access control properties
  accessLevel?: 'public' | 'authenticated' | 'premium' | 'vip';
  isPublic?: boolean;
  requiredRoles?: string[];
  allowedUsers?: string[];
  restricted?: boolean;
  // Book URL for individual links
  url?: string;
}

export interface BookPage {
  id: string;
  pageNumber: number;
  title: string;
  content: string;
  media?: MediaItem[];
  accessLevel?: 'public' | 'authenticated' | 'premium';
  restricted?: boolean;
  seoContent?: string;
}

export interface MediaItem {
  type: 'video' | 'audio' | 'image' | 'calculator' | 'interactive';
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}

export interface LibraryState {
  selectedBook: Book | null;
  currentPage: number;
  isReading: boolean;
}

export interface Highlight {
  id: string;
  pageId: string;
  text: string;
  color: string;
  startOffset: number;
  endOffset: number;
  note?: string;
  timestamp: Date;
}

export interface Comment {
  id: string;
  pageId: string;
  text: string;
  position: { x: number; y: number };
  timestamp: Date;
  selectedText?: string;
}

export interface ReadingSettings {
  fontSize: number;
  lineHeight: number;
  theme: 'light' | 'dark' | 'sepia' | 'high-contrast';
  fontFamily: 'serif' | 'sans-serif' | 'mono';
  columnCount: 1 | 2;
  margin: 'narrow' | 'normal' | 'wide';
}
