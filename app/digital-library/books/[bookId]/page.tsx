import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookPageClient } from '@/components/ebook/BookPageClient';
import { sampleBooks } from '@/lib/data/books';

interface BookPageProps {
  params: {
    bookId: string;
  };
}

// Check if user has access to the book
function checkBookAccess(book: any, user?: any): boolean {
  // Public books are accessible to everyone
  if (book.isPublic || book.accessLevel === 'public') {
    return true;
  }

  // If no user is logged in and book requires authentication
  if (!user && (book.accessLevel === 'authenticated' || book.accessLevel === 'premium' || book.accessLevel === 'vip')) {
    return false;
  }

  // Check specific user permissions
  if (book.allowedUsers && user?.email) {
    return book.allowedUsers.includes(user.email);
  }

  // Check role-based access
  if (book.requiredRoles && user?.roles) {
    return book.requiredRoles.some((role: string) => user.roles.includes(role));
  }

  // Check access levels
  switch (book.accessLevel) {
    case 'authenticated':
      return !!user;
    case 'premium':
      return user?.isPremium || user?.subscription === 'premium';
    case 'vip':
      return user?.isVip || user?.subscription === 'vip';
    default:
      return true;
  }
}

interface BookPageProps {
  params: {
    bookId: string;
  };
}

export async function generateStaticParams() {
  return sampleBooks.map((book) => ({
    bookId: book.id,
  }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const book = sampleBooks.find(b => b.id === params.bookId);
  
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: `${book.title} - ${book.author} | EA Global Digital Library`,
    description: book.description,
    keywords: `${book.genre}, ${book.title}, ${book.author}, career development, study abroad, education`,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.coverImage],
      type: 'book',
    },
    alternates: {
      canonical: `/digital-library/books/${book.id}`
    }
  };
}

// Generate structured data for individual book
function generateBookStructuredData(book: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "author": {
      "@type": "Person",
      "name": book.author
    },
    "description": book.description,
    "genre": book.genre,
    "isbn": book.isbn,
    "numberOfPages": book.totalPages,
    "datePublished": book.publishedDate,
    "image": book.coverImage,
    "publisher": {
      "@type": "Organization",
      "name": "EA Global Education"
    },
    "inLanguage": "en",
    "potentialAction": {
      "@type": "ReadAction",
      "target": `/digital-library/books/${book.id}`
    },
    // Include all pages for SEO (public content only)
    "hasPart": book.pages.map((page: any, index: number) => ({
      "@type": "Chapter",
      "name": page.title,
      "position": index + 1,
      "text": page.seoContent || page.content.replace(/<[^>]*>/g, '').substring(0, 300) + '...'
    }))
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = sampleBooks.find(b => b.id === params.bookId);
  
  if (!book) {
    notFound();
  }

  // TODO: Get user from session/auth - replace with actual auth
  const user = null; // This should come from your auth system
  const hasAccess = checkBookAccess(book, user);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBookStructuredData(book))
        }}
      />
      
      {/* SEO-friendly content for search engines */}
      <div className="sr-only">
        <h1>{book.title} by {book.author}</h1>
        <p>{book.description}</p>
        <ul>
          {book.pages.map((page, index) => (
            <li key={page.id}>
              <h2>{page.title}</h2>
              <div dangerouslySetInnerHTML={{ 
                __html: page.seoContent || page.content 
              }} />
            </li>
          ))}
        </ul>
      </div>
      
      <BookPageClient 
        book={book} 
        user={user}
        userHasAccess={hasAccess}
      />
    </>
  );
}
