import React from 'react';
import { Metadata } from 'next';
import { DigitalLibraryClient } from '@/components/ebook/DigitalLibraryClient';
import { sampleBooks } from '@/lib/data/books';

export const metadata: Metadata = {
  title: 'Digital Library - EA Global Education',
  description: 'Access our comprehensive collection of career development and study abroad guides. Featuring expert insights on top careers, educational pathways, and professional growth strategies.',
  keywords: 'digital library, career development, study abroad, education guides, professional development, career planning',
  openGraph: {
    title: 'Digital Library - EA Global Education',
    description: 'Access our comprehensive collection of career development and study abroad guides.',
    images: ['/images/digital-library-og.jpg'],
  },
  alternates: {
    canonical: '/digital-library'
  }
};

// Generate structured data for SEO
function generateStructuredData() {
  // Filter out any undefined books for safety
  const validBooks = sampleBooks.filter(book => book && book.title);
  
  return {
    "@context": "https://schema.org",
    "@type": "Library",
    "name": "EA Global Digital Library",
    "description": "A comprehensive collection of career development and study abroad guides",
    "provider": {
      "@type": "Organization",
      "name": "EA Global Education"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Books Collection",
      "itemListElement": validBooks.map((book, index) => ({
        "@type": "Book",
        "position": index + 1,
        "name": book.title,
        "author": book.author,
        "description": book.description,
        "genre": book.genre,
        "isbn": book.isbn,
        "numberOfPages": book.totalPages,
        "datePublished": book.publishedDate,
        "image": book.coverImage,
        "url": `/digital-library/books/${book.id}`
      }))
    }
  };
}

export default function DigitalLibraryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      <DigitalLibraryClient books={sampleBooks} />
    </>
  );
}
