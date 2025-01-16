export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
    structuredData: {
      "@context": string;
      "@type": string;
      headline: string;
      datePublished: string;
      author: {
        "@type": string;
        name: string;
      };
      publisher: {
        "@type": string;
        name: string;
        logo: {
          "@type": string;
          url: string;
        };
      };
    };
  };
  relatedPosts: Array<{
    title: string;
    slug: string;
    context: string;
  }>;
  content: Array<{
    heading: string;
    text: string;
    internalLinks?: Array<{
      text: string;
      url: string;
      context: string;
    }>;
    image?: string;
    callToAction?: {
      text: string;
      url: string;
    };
  }>;
}
