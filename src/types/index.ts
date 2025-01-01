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