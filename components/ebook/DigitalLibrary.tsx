'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from '@/types/ebook';
import { BookOpen, User, Calendar, Hash, Lock, Globe, Star, Crown } from 'lucide-react';

interface DigitalLibraryProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  userHasAccess?: (book: Book) => boolean;
}

// Access level icons and colors
const getAccessLevelInfo = (book: Book) => {
  switch (book.accessLevel) {
    case 'public':
      return { icon: Globe, color: 'text-green-600', bg: 'bg-green-100', text: 'Public' };
    case 'authenticated':
      return { icon: User, color: 'text-blue-600', bg: 'bg-blue-100', text: 'Members Only' };
    case 'premium':
      return { icon: Star, color: 'text-orange-600', bg: 'bg-orange-100', text: 'Premium' };
    case 'vip':
      return { icon: Crown, color: 'text-purple-600', bg: 'bg-purple-100', text: 'VIP' };
    default:
      return { icon: Globe, color: 'text-green-600', bg: 'bg-green-100', text: 'Public' };
  }
};

export const DigitalLibrary: React.FC<DigitalLibraryProps> = ({ 
  books, 
  onSelectBook, 
  userHasAccess = () => true 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Digital Library</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover a curated collection of professional development books designed to advance your career and education
          </p>
          <div className="mt-6 flex justify-center items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-green-600" />
              <span>Public Access</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-blue-600" />
              <span>Members Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-orange-600" />
              <span>Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown size={16} className="text-purple-600" />
              <span>VIP</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => {
            const hasAccess = userHasAccess(book);
            const accessInfo = getAccessLevelInfo(book);
            const AccessIcon = accessInfo.icon;
            
            return (
              <div
                key={book.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Access Level Badge */}
                  <div className={`absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${accessInfo.bg} ${accessInfo.color}`}>
                    <AccessIcon size={12} />
                    <span>{accessInfo.text}</span>
                  </div>
                  
                  {/* Page Count */}
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen size={16} />
                      <span>{book.totalPages} pages</span>
                    </div>
                  </div>
                  
                  {/* Lock Overlay for restricted content */}
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Lock size={32} className="mx-auto mb-2" />
                        <p className="text-sm font-semibold">Access Required</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {book.genre}
                    </span>
                    <span className="text-sm text-slate-500">{book.publishedDate}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-600 mb-3">
                    <User size={16} />
                    <span className="text-sm">{book.author}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Hash size={14} />
                      <span>ISBN: {book.isbn}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{book.publishedDate}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    {/* Single Read Book Button */}
                    {book.url && hasAccess ? (
                      <Link 
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center text-sm flex items-center justify-center gap-2 block"
                      >
                        <BookOpen size={16} />
                        Read Book
                      </Link>
                    ) : hasAccess ? (
                      <button 
                        onClick={() => onSelectBook(book)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                      >
                        <BookOpen size={16} />
                        Read Book
                      </button>
                    ) : (
                      <button 
                        disabled
                        className="w-full bg-slate-100 text-slate-400 cursor-not-allowed font-semibold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
                      >
                        <Lock size={16} />
                        Access Required
                      </button>
                    )}
                  </div>
                  
                  {/* Access Requirements for restricted books */}
                  {!hasAccess && (
                    <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-xs text-amber-800">
                        <Lock size={12} className="inline mr-1" />
                        {book.accessLevel === 'authenticated' && 'Sign in to access this book'}
                        {book.accessLevel === 'premium' && 'Premium subscription required'}
                        {book.accessLevel === 'vip' && 'VIP membership required'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
