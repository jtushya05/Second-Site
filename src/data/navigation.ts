export const destinations = [
  'United Kingdom', 'Australia', 'Canada', 'Germany', 'Ireland',  'United States',
   'New Zealand', 'Singapore', 'France', 'Sweden'
];

export const testPrep = [
  { 
    name: 'IELTS', 
    path: '/test-prep/ielts-prep',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjq4Nt1w2IdiLG0_6szJLicrCznfc2SUtn8w&s'
  },
  { 
    name: 'PTE', 
    path: '/test-prep/pte-prep',
    logo: 'https://www.jnjeducation.edu.np/storage/media/test_preparation/1724510153.png'
  },
  { 
    name: 'TOEFL', 
    path: '/test-prep/toefl-prep',
    logo: 'https://getvectorlogo.com/wp-content/uploads/2020/01/ets-toefl-vector-logo.png'
  },
  { 
    name: 'OET', 
    path: '/test-prep/oet-prep',
    logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=100'
  },
  { 
    name: 'CELPIP', 
    path: '/test-prep/celpip-prep',
    logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=100'
  },
  { 
    name: 'Duolingo English Test (DET)', 
    path: '/test-prep/det-prep',
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
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];