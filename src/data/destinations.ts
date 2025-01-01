import { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 'usa',
    name: 'United States',
    flagUrl: 'https://flagcdn.com/us.svg',
    description: 'World-class universities and diverse opportunities',
    slug: 'united-states',
    imageUrl: 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?q=80&w=1200'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flagUrl: 'https://flagcdn.com/gb.svg',
    description: 'Rich academic heritage and cultural experience',
    slug: 'united-kingdom',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200'
  },
  {
    id: 'canada',
    name: 'Canada',
    flagUrl: 'https://flagcdn.com/ca.svg',
    description: 'High quality of life and post-study work opportunities',
    slug: 'canada',
    imageUrl: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200'
  },
  // Add other destinations...
];