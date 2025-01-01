'use client';

export const destinations = [
  'United States', 'United Kingdom', 'Canada', 'Australia',
  'Germany', 'New Zealand', 'Ireland', 'Singapore', 'France', 'Sweden'
];

export const testPrep = [
  { 
    name: 'IELTS', 
    path: '/test-prep/ielts',
    logo: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=100'
  },
  { 
    name: 'PTE', 
    path: '/test-prep/pte',
    logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=100'
  },
  { 
    name: 'TOEFL', 
    path: '/test-prep/toefl',
    logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=100'
  },
  { 
    name: 'OET', 
    path: '/test-prep/oet',
    logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=100'
  },
  { 
    name: 'CELPIP', 
    path: '/test-prep/celpip',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=100'
  },
  { 
    name: 'Duolingo English Test (DET)', 
    path: '/test-prep/det',
    logo: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=100'
  },
];

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Study Abroad',
    href: '/destinations',
    children: destinations.map(destination => ({
      label: destination,
      href: `/destinations/${destination.toLowerCase().replace(' ', '-')}`
    }))
  },
  {
    label: 'Test Prep',
    href: '/test-prep',
    children: testPrep.map(test => ({
      label: test.name,
      href: test.path
    }))
  },
  { label: 'Career Counseling', href: 'https://counselling.englisharenaglobal.com' },
  { label: 'Contact', href: '/contact' }
];