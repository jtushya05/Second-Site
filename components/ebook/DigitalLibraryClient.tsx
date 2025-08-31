'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { DigitalLibrary } from '@/components/ebook/DigitalLibrary';
import { BookReader } from '@/components/ebook/BookReader';
import { Book } from '@/types/ebook';
import { initializeEbookTracking } from '@/lib/ebook-tracking';

interface DigitalLibraryClientProps {
  books: Book[];
}

export function DigitalLibraryClient({ books }: DigitalLibraryClientProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const { data: session, status } = useSession();

  // Initialize tracking when component mounts
  useEffect(() => {
    initializeEbookTracking();
  }, []);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleBackToLibrary = () => {
    setSelectedBook(null);
  };

  // Check if user has access to the book
  const checkUserAccess = (book: Book): boolean => {
    // Public books are accessible to everyone
    if (book.isPublic || book.accessLevel === 'public') {
      return true;
    }

    // If no user is logged in and book requires authentication
    if (!session && (book.accessLevel === 'authenticated' || book.accessLevel === 'premium' || book.accessLevel === 'vip')) {
      return false;
    }

    if (!session) return false;
    const user = session.user as any;

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
  };

  return (
    <div className="min-h-screen">
      {selectedBook ? (
        <BookReader 
          book={selectedBook} 
          onBack={handleBackToLibrary}
          user={session?.user}
          userHasAccess={checkUserAccess(selectedBook)}
        />
      ) : (
        <DigitalLibrary 
          books={books} 
          onSelectBook={handleSelectBook} 
          userHasAccess={checkUserAccess}
        />
      )}
    </div>
  );
}
