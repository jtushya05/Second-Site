'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { BookReader } from '@/components/ebook/BookReader';
import { Book } from '@/types/ebook';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BookPageClientProps {
  book: Book;
  user?: any;
  userHasAccess?: boolean;
}

export function BookPageClient({ book, user, userHasAccess }: BookPageClientProps) {
  const { data: session } = useSession();

  // Use passed props or fallback to session-based access check
  const finalUser = user || session?.user;
  const finalAccess = userHasAccess !== undefined ? userHasAccess : checkUserAccess();

  // Check if user has access to the book (fallback method)
  function checkUserAccess(): boolean {
    // Check book-level access control
    if (book.isPublic || book.accessLevel === 'public') {
      return true;
    }
    
    if (!finalUser && (book.accessLevel === 'authenticated' || book.accessLevel === 'premium' || book.accessLevel === 'vip')) {
      return false;
    }

    if (book.allowedUsers && finalUser?.email) {
      return book.allowedUsers.includes(finalUser.email);
    }

    if (book.requiredRoles && finalUser?.roles) {
      return book.requiredRoles.some((role: string) => finalUser.roles.includes(role));
    }

    switch (book.accessLevel) {
      case 'authenticated':
        return !!finalUser;
      case 'premium':
        return finalUser?.isPremium || finalUser?.subscription === 'premium';
      case 'vip':
        return finalUser?.isVip || finalUser?.subscription === 'vip';
      default:
        return true;
    }
  }

  const handleBackToLibrary = () => {
    window.history.pushState(null, '', '/digital-library');
    window.location.reload();
  };

  return (
    <div className="min-h-screen">
      <BookReader 
        book={book} 
        onBack={handleBackToLibrary}
        user={finalUser}
        userHasAccess={finalAccess}
      />
    </div>
  );
}
