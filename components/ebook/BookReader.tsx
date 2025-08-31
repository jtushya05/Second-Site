'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Book, Highlight, Comment, ReadingSettings, MediaItem } from '@/types/ebook';
import { 
  initializeEbookTracking, 
  trackBookAccess, 
  trackInteraction,
  getUserAnalytics 
} from '@/lib/ebook-tracking';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Eye,
  Shield,
  Lock,
  SkipBack,
  SkipForward,
  Bookmark,
  MessageCircle,
  Highlighter,
  Settings,
  Sun,
  Moon,
  Type,
  Minus,
  Plus,
  Search,
  X,
  Palette
} from 'lucide-react';

interface BookReaderProps {
  book: Book;
  onBack: () => void;
  user?: any; // Add user prop for authentication
  userHasAccess?: boolean; // Add access control prop
}

// Helper function to enhance content formatting
const enhanceContent = (content: string): string => {
  // Clean up the content and improve formatting
  return content
    // Remove excessive whitespace and normalize line breaks
    .replace(/\s+/g, ' ')
    .replace(/\n\s*\n/g, '\n')
    // Convert markdown-style formatting
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">$1</code>')
    // Convert markdown links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>')
    // Ensure proper spacing around block elements
    .replace(/(<\/div>|<\/p>|<\/h[1-6]>|<\/ul>|<\/ol>|<\/li>)/g, '$1\n')
    .replace(/(<div|<p|<h[1-6]|<ul|<ol|<li)/g, '\n$1')
    // Clean up extra spaces
    .trim();
};

export const BookReader: React.FC<BookReaderProps> = ({ book, onBack, user, userHasAccess = true }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedText, setSelectedText] = useState('');
  const [showHighlightMenu, setShowHighlightMenu] = useState(false);
  const [highlightMenuPosition, setHighlightMenuPosition] = useState({ x: 0, y: 0 });
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{ pageIndex: number; matches: number }>>([]);
  
  const [settings, setSettings] = useState<ReadingSettings>({
    fontSize: 16,
    lineHeight: 1.6,
    theme: 'light',
    fontFamily: 'serif',
    columnCount: 1,
    margin: 'normal'
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const highlightColors = ['#fef08a', '#fed7d7', '#bee3f8', '#c6f6d5', '#e9d8fd', '#fed7aa'];

  // Enhanced content protection and persistence loading
  useEffect(() => {
    // Initialize ebook tracking system
    initializeEbookTracking();
    
    // Track book access
    trackBookAccess(book.id);
    
    // Load saved highlights and comments
    try {
      const savedHighlights = localStorage.getItem(`book-highlights-${book.id}`);
      if (savedHighlights) {
        const parsedHighlights = JSON.parse(savedHighlights).map((h: any) => ({
          ...h,
          timestamp: new Date(h.timestamp)
        }));
        setHighlights(parsedHighlights);
      }
      
      const savedComments = localStorage.getItem(`book-comments-${book.id}`);
      if (savedComments) {
        const parsedComments = JSON.parse(savedComments).map((c: any) => ({
          ...c,
          timestamp: new Date(c.timestamp)
        }));
        setComments(parsedComments);
      }
    } catch (error) {
      console.warn('Error loading saved data:', error);
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Navigation shortcuts
      if (!showSearch && !showSettings && !showCommentDialog) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          nextPage();
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevPage();
        }
        if (e.key === 'Home') {
          e.preventDefault();
          jumpToPage(0);
        }
        if (e.key === 'End') {
          e.preventDefault();
          jumpToPage(book.pages.length - 1);
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
          e.preventDefault();
          setShowSearch(true);
        }
      }
      
      // Disable common shortcuts
      if ((e.ctrlKey || e.metaKey) && ['c', 'a', 's', 'p', 'u'].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
      }
    };

    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectedText(selection.toString().trim());
        setHighlightMenuPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        });
        setShowHighlightMenu(true);
      } else {
        setShowHighlightMenu(false);
        setSelectedText('');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [book.id]); // Only depend on book.id for initial load

  const nextPage = useCallback(() => {
    if (currentPage < book.pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        const newPageIndex = currentPage + 1;
        setCurrentPage(newPageIndex);
        
        // Track page view
        trackInteraction(book.id, newPageIndex + 1, 'page_view');
        
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection(null);
        }, 300);
      }, 150);
    }
  }, [currentPage, isFlipping, book.pages.length, book.id]);

  const prevPage = useCallback(() => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        const newPageIndex = currentPage - 1;
        setCurrentPage(newPageIndex);
        
        // Track page view
        trackInteraction(book.id, newPageIndex + 1, 'page_view');
        
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection(null);
        }, 300);
      }, 150);
    }
  }, [currentPage, isFlipping, book.id]);

  const jumpToPage = useCallback((pageIndex: number) => {
    if (pageIndex !== currentPage && !isFlipping && pageIndex >= 0 && pageIndex < book.pages.length) {
      setIsFlipping(true);
      setFlipDirection(pageIndex > currentPage ? 'next' : 'prev');
      setTimeout(() => {
        setCurrentPage(pageIndex);
        
        // Track page view
        trackInteraction(book.id, pageIndex + 1, 'page_view');
        
        setTimeout(() => {
          setIsFlipping(false);
          setFlipDirection(null);
        }, 300);
      }, 150);
    }
  }, [currentPage, isFlipping, book.pages.length, book.id]);

  const addHighlight = (color: string) => {
    if (selectedText) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const highlight: Highlight = {
          id: Date.now().toString(),
          pageId: book.pages[currentPage].id,
          text: selectedText,
          color,
          startOffset: range.startOffset,
          endOffset: range.endOffset,
          timestamp: new Date()
        };
        
        // Wrap the selected text with a highlight span
        const span = document.createElement('span');
        span.className = `user-highlight ${color}`;
        span.setAttribute('data-highlight-id', highlight.id);
        
        try {
          range.surroundContents(span);
          setHighlights([...highlights, highlight]);
          
          // Save to localStorage for persistence
          const savedHighlights = localStorage.getItem(`book-highlights-${book.id}`) || '[]';
          const allHighlights = [...JSON.parse(savedHighlights), highlight];
          localStorage.setItem(`book-highlights-${book.id}`, JSON.stringify(allHighlights));
          
          // Track highlight interaction
          trackInteraction(book.id, currentPage + 1, 'highlight', {
            text: selectedText,
            color: color,
            highlightId: highlight.id
          });
        } catch (error) {
          console.warn('Could not apply highlight:', error);
        }
      }
      
      setShowHighlightMenu(false);
      setSelectedText('');
      window.getSelection()?.removeAllRanges();
    }
  };

  const addComment = () => {
    if (commentText.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        pageId: book.pages[currentPage].id,
        text: commentText,
        position: { x: highlightMenuPosition.x, y: highlightMenuPosition.y },
        timestamp: new Date(),
        selectedText: selectedText || undefined
      };
      
      const newComments = [...comments, comment];
      setComments(newComments);
      
      // Save to localStorage for persistence
      const savedComments = localStorage.getItem(`book-comments-${book.id}`) || '[]';
      const allComments = [...JSON.parse(savedComments), comment];
      localStorage.setItem(`book-comments-${book.id}`, JSON.stringify(allComments));
      
      // Track comment interaction
      trackInteraction(book.id, currentPage + 1, 'comment', {
        text: commentText,
        selectedText: selectedText,
        commentId: comment.id
      });
      
      setCommentText('');
      setShowCommentDialog(false);
      setSelectedText('');
      window.getSelection()?.removeAllRanges();
    }
  };

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Track search interaction
    trackInteraction(book.id, currentPage + 1, 'search', {
      query: query,
      timestamp: new Date().toISOString()
    });

    const results: Array<{ pageIndex: number; matches: number }> = [];
    book.pages.forEach((page, index) => {
      const content = page.content.toLowerCase();
      const searchTerm = query.toLowerCase();
      const matches = (content.match(new RegExp(searchTerm, 'g')) || []).length;
      if (matches > 0) {
        results.push({ pageIndex: index, matches });
      }
    });
    setSearchResults(results);
  };

  const getThemeClasses = () => {
    switch (settings.theme) {
      case 'dark':
        return 'bg-gray-900 text-gray-100';
      case 'sepia':
        return 'bg-amber-50 text-amber-900';
      case 'high-contrast':
        return 'bg-black text-white';
      default:
        return 'bg-white text-gray-900';
    }
  };

  const getFontFamilyClass = () => {
    switch (settings.fontFamily) {
      case 'sans-serif':
        return 'font-sans';
      case 'mono':
        return 'font-mono';
      default:
        return 'font-serif';
    }
  };

  const getMarginClass = () => {
    switch (settings.margin) {
      case 'narrow':
        return 'px-6 md:px-8';
      case 'wide':
        return 'px-12 md:px-20';
      default:
        return 'px-8 md:px-12';
    }
  };

  const currentPageData = book.pages[currentPage];
  const pageHighlights = highlights.filter(h => h.pageId === currentPageData.id);
  const pageComments = comments.filter(c => c.pageId === currentPageData.id);
  
  // Check if current page requires authentication
  const pageRequiresAuth = currentPageData.accessLevel === 'authenticated' || currentPageData.accessLevel === 'premium';
  const showRestrictedContent = pageRequiresAuth && !userHasAccess;

  // Generate SEO-friendly preview content (first 2 sentences)
  const getPreviewContent = (content: string): string => {
    const textContent = content.replace(/<[^>]*>/g, '');
    const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
    return sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : '');
  };

  return (
    <div className={`transition-colors duration-300 book-container ${
      settings.theme === 'dark' ? 'bg-gray-900' : 
      settings.theme === 'sepia' ? 'bg-amber-100' : 
      settings.theme === 'high-contrast' ? 'bg-black' : 'bg-gradient-to-br from-amber-50 to-orange-50'
    } ${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen pt-20'}`}>
      
      {/* Reader Toolbar - positioned below main nav */}
      <div className={`shadow-sm border-b sticky z-40 transition-colors duration-300 ${
        isFullscreen ? 'top-0' : 'top-16 md:top-20'
      } ${
        settings.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 
        settings.theme === 'sepia' ? 'bg-amber-100 border-amber-200' : 
        settings.theme === 'high-contrast' ? 'bg-black border-white' : 'bg-white border-slate-200'
      }`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className={`flex items-center gap-2 transition-colors ${
                  settings.theme === 'dark' ? 'text-gray-300 hover:text-white' :
                  settings.theme === 'high-contrast' ? 'text-white hover:text-gray-300' :
                  'text-slate-600 hover:text-slate-800'
                }`}
              >
                <Home size={18} />
                <span className="hidden sm:inline">Back to Library</span>
              </button>
              <div className={`h-4 w-px ${
                settings.theme === 'dark' ? 'bg-gray-600' :
                settings.theme === 'high-contrast' ? 'bg-white' : 'bg-slate-300'
              }`} />
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-blue-600" />
                <h1 className={`text-base font-semibold truncate max-w-xs sm:max-w-md ${
                  settings.theme === 'dark' ? 'text-gray-100' :
                  settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-800'
                }`}>
                  {book.title}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`p-2 rounded-lg transition-colors ${
                  settings.theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' :
                  settings.theme === 'high-contrast' ? 'text-white hover:bg-gray-800' :
                  'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
                title="Search (Ctrl+F)"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-lg transition-colors ${
                  settings.theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' :
                  settings.theme === 'high-contrast' ? 'text-white hover:bg-gray-800' :
                  'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Settings size={18} />
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className={`p-2 rounded-lg transition-colors ${
                  settings.theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' :
                  settings.theme === 'high-contrast' ? 'text-white hover:bg-gray-800' :
                  'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                <Eye size={18} />
              </button>
              <div className={`hidden sm:flex items-center gap-2 text-xs px-2 py-1 rounded-full ${
                settings.theme === 'dark' ? 'text-green-400 bg-green-900/20' :
                settings.theme === 'high-contrast' ? 'text-green-300 bg-green-900' :
                'text-green-600 bg-green-100'
              }`}>
                <Shield size={14} />
                <span>Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className={`border-b transition-colors duration-300 ${
          settings.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 
          settings.theme === 'sepia' ? 'bg-amber-100 border-amber-200' : 
          settings.theme === 'high-contrast' ? 'bg-black border-white' : 'bg-white border-slate-200'
        }`}>
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search in book..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    performSearch(e.target.value);
                  }}
                  className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' :
                    settings.theme === 'high-contrast' ? 'bg-gray-900 border-white text-white' :
                    'bg-white border-slate-300 text-slate-900'
                  }`}
                />
                {searchResults.length > 0 && (
                  <div className={`absolute top-full left-0 right-0 mt-1 border rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto ${
                    settings.theme === 'dark' ? 'bg-gray-700 border-gray-600' :
                    settings.theme === 'high-contrast' ? 'bg-gray-900 border-white' :
                    'bg-white border-slate-300'
                  }`}>
                    {searchResults.map((result) => (
                      <button
                        key={result.pageIndex}
                        onClick={() => {
                          jumpToPage(result.pageIndex);
                          setShowSearch(false);
                          setSearchQuery('');
                          setSearchResults([]);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-opacity-10 hover:bg-blue-500 transition-colors ${
                          settings.theme === 'dark' ? 'text-gray-300' :
                          settings.theme === 'high-contrast' ? 'text-white' :
                          'text-slate-700'
                        }`}
                      >
                        Page {result.pageIndex + 1} ({result.matches} match{result.matches !== 1 ? 'es' : ''})
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className={`p-2 rounded-lg transition-colors ${
                  settings.theme === 'dark' ? 'text-gray-400 hover:text-gray-200' :
                  settings.theme === 'high-contrast' ? 'text-gray-300 hover:text-white' :
                  'text-slate-500 hover:text-slate-700'
                }`}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className={`border-b transition-colors duration-300 ${
          settings.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 
          settings.theme === 'sepia' ? 'bg-amber-100 border-amber-200' : 
          settings.theme === 'high-contrast' ? 'bg-black border-white' : 'bg-white border-slate-200'
        }`}>
          <div className="container mx-auto px-3 md:px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Theme Settings */}
              <div>
                <h3 className={`font-medium mb-3 ${
                  settings.theme === 'dark' ? 'text-gray-200' :
                  settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-800'
                }`}>Theme</h3>
                <div className="space-y-2">
                  {[
                    { value: 'light', label: 'Light', icon: Sun },
                    { value: 'dark', label: 'Dark', icon: Moon },
                    { value: 'sepia', label: 'Sepia', icon: Palette },
                    { value: 'high-contrast', label: 'High Contrast', icon: Eye }
                  ].map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setSettings({ ...settings, theme: value as any })}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        settings.theme === value
                          ? 'bg-blue-600 text-white'
                          : settings.theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-700'
                          : settings.theme === 'high-contrast'
                          ? 'text-white hover:bg-gray-800'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Icon size={16} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Typography Settings */}
              <div>
                <h3 className={`font-medium mb-3 ${
                  settings.theme === 'dark' ? 'text-gray-200' :
                  settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-800'
                }`}>Typography</h3>
                <div className="space-y-3">
                  <div>
                    <label className={`block text-sm mb-1 ${
                      settings.theme === 'dark' ? 'text-gray-300' :
                      settings.theme === 'high-contrast' ? 'text-gray-300' : 'text-slate-600'
                    }`}>Font Size</label>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSettings({ ...settings, fontSize: Math.max(12, settings.fontSize - 1) })}
                        className={`p-1 rounded transition-colors ${
                          settings.theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' :
                          settings.theme === 'high-contrast' ? 'text-white hover:bg-gray-800' :
                          'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className={`px-2 ${
                        settings.theme === 'dark' ? 'text-gray-200' :
                        settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-700'
                      }`}>
                        {settings.fontSize}px
                      </span>
                      <button
                        onClick={() => setSettings({ ...settings, fontSize: Math.min(24, settings.fontSize + 1) })}
                        className={`p-1 rounded transition-colors ${
                          settings.theme === 'dark' ? 'text-gray-300 hover:bg-gray-700' :
                          settings.theme === 'high-contrast' ? 'text-white hover:bg-gray-800' :
                          'text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm mb-1 ${
                      settings.theme === 'dark' ? 'text-gray-300' :
                      settings.theme === 'high-contrast' ? 'text-gray-300' : 'text-slate-600'
                    }`}>Font Family</label>
                    <select
                      value={settings.fontFamily}
                      onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value as any })}
                      className={`w-full px-3 py-1 rounded border ${
                        settings.theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' :
                        settings.theme === 'high-contrast' ? 'bg-gray-900 border-white text-white' :
                        'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="serif">Serif</option>
                      <option value="sans-serif">Sans Serif</option>
                      <option value="mono">Monospace</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Layout Settings */}
              <div>
                <h3 className={`font-medium mb-3 ${
                  settings.theme === 'dark' ? 'text-gray-200' :
                  settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-800'
                }`}>Layout</h3>
                <div className="space-y-3">
                  <div>
                    <label className={`block text-sm mb-1 ${
                      settings.theme === 'dark' ? 'text-gray-300' :
                      settings.theme === 'high-contrast' ? 'text-gray-300' : 'text-slate-600'
                    }`}>Margin</label>
                    <select
                      value={settings.margin}
                      onChange={(e) => setSettings({ ...settings, margin: e.target.value as any })}
                      className={`w-full px-3 py-1 rounded border ${
                        settings.theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' :
                        settings.theme === 'high-contrast' ? 'bg-gray-900 border-white text-white' :
                        'bg-white border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="narrow">Narrow</option>
                      <option value="normal">Normal</option>
                      <option value="wide">Wide</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 relative">
        {/* Page Content */}
        <div className={`container mx-auto py-4 md:py-8 px-2 md:px-6 transition-all duration-300 ${getMarginClass()}`}>
          <div
            ref={contentRef}
            className={`book-page-content relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
              isFlipping ? `transform ${flipDirection === 'next' ? 'rotateY-15' : '-rotateY-15'} scale-95` : ''
            } ${getThemeClasses()}`}
            style={{
              fontSize: `${settings.fontSize}px`,
              lineHeight: settings.lineHeight,
              minHeight: '70vh'
            }}
          >
            {/* Page Header */}
            <div className={`p-3 md:p-6 border-b ${
              settings.theme === 'dark' ? 'border-gray-700' :
              settings.theme === 'sepia' ? 'border-amber-200' :
              settings.theme === 'high-contrast' ? 'border-white' : 'border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-xl font-semibold ${getFontFamilyClass()}`}>
                  {currentPageData.title}
                </h2>
                <div className={`text-sm px-3 py-1 rounded-full ${
                  settings.theme === 'dark' ? 'bg-gray-700 text-gray-300' :
                  settings.theme === 'sepia' ? 'bg-amber-200 text-amber-800' :
                  settings.theme === 'high-contrast' ? 'bg-gray-800 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  Page {currentPage + 1} of {book.pages.length}
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className={`book-page p-4 md:p-8 ${getFontFamilyClass()}`}>
              {showRestrictedContent ? (
                <div className="space-y-6">
                  {/* SEO-friendly preview content */}
                  <div
                    className={`prose prose-lg max-w-none opacity-75 ${
                      settings.theme === 'dark' ? 'prose-invert prose-headings:text-gray-100 prose-p:text-gray-200 prose-strong:text-gray-100 prose-li:text-gray-200' :
                      settings.theme === 'sepia' ? 'prose-amber prose-headings:text-amber-900 prose-p:text-amber-800 prose-strong:text-amber-900 prose-li:text-amber-800' :
                      settings.theme === 'high-contrast' ? 'prose-invert prose-headings:text-white prose-p:text-gray-200 prose-strong:text-white prose-li:text-gray-200' :
                      'prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-li:text-slate-700'
                    }`}
                    style={{
                      fontSize: `${settings.fontSize}px`,
                      lineHeight: settings.lineHeight
                    }}
                  >
                    <p>{getPreviewContent(currentPageData.content)}</p>
                  </div>
                  
                  {/* Access restriction overlay */}
                  <div className={`relative p-8 rounded-xl text-center border-2 border-dashed ${
                    settings.theme === 'dark' ? 'border-gray-600 bg-gray-800/50' :
                    settings.theme === 'sepia' ? 'border-amber-300 bg-amber-100/50' :
                    settings.theme === 'high-contrast' ? 'border-white bg-gray-900/50' :
                    'border-gray-300 bg-gray-50/50'
                  }`}>
                    <Lock size={48} className={`mx-auto mb-4 ${
                      settings.theme === 'dark' ? 'text-gray-400' :
                      settings.theme === 'high-contrast' ? 'text-gray-300' :
                      'text-gray-500'
                    }`} />
                    <h3 className={`text-xl font-semibold mb-2 ${
                      settings.theme === 'dark' ? 'text-gray-200' :
                      settings.theme === 'high-contrast' ? 'text-white' :
                      'text-gray-800'
                    }`}>
                      {currentPageData.accessLevel === 'premium' ? 'Premium Content' : 'Member-Only Content'}
                    </h3>
                    <p className={`mb-6 ${
                      settings.theme === 'dark' ? 'text-gray-400' :
                      settings.theme === 'high-contrast' ? 'text-gray-300' :
                      'text-gray-600'
                    }`}>
                      {currentPageData.accessLevel === 'premium' 
                        ? 'Upgrade to premium to access this exclusive content'
                        : 'Please log in to continue reading this content'
                      }
                    </p>
                    <div className="flex gap-4 justify-center">
                      {!user ? (
                        <>
                          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Sign In
                          </button>
                          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            Create Account
                          </button>
                        </>
                      ) : (
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
                          Upgrade to Premium
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* SEO content - hidden but crawlable */}
                  <div className="sr-only">
                    <div dangerouslySetInnerHTML={{ __html: enhanceContent(currentPageData.content) }} />
                  </div>
                </div>
              ) : (
                <div
                  className={`book-content relative ${getFontFamilyClass()} ${
                    settings.columnCount === 2 ? 'columns-2 gap-8' : ''
                  }`}
                  style={{
                    fontSize: `${settings.fontSize}px`,
                    lineHeight: settings.lineHeight
                  }}
                  dangerouslySetInnerHTML={{ __html: enhanceContent(currentPageData.content) }}
                />
              )}
              
              {/* Embedded Media Support - only show if user has access */}
              {!showRestrictedContent && currentPageData.media && (
                <div className="mt-8 space-y-6">
                  {currentPageData.media.map((mediaItem: MediaItem, index: number) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      {mediaItem.type === 'video' && (
                        <div className="relative aspect-video">
                          <iframe
                            src={mediaItem.url}
                            className="w-full h-full"
                            allowFullScreen
                            title={mediaItem.title || `Video ${index + 1}`}
                          />
                        </div>
                      )}
                      {mediaItem.type === 'audio' && (
                        <audio
                          controls
                          className="w-full"
                          src={mediaItem.url}
                        />
                      )}
                      {mediaItem.type === 'image' && (
                        <img
                          src={mediaItem.url}
                          alt={mediaItem.title || `Image ${index + 1}`}
                          className="w-full h-auto"
                        />
                      )}
                      {mediaItem.title && (
                        <div className={`p-3 text-sm ${
                          settings.theme === 'dark' ? 'bg-gray-700 text-gray-300' :
                          settings.theme === 'sepia' ? 'bg-amber-100 text-amber-800' :
                          settings.theme === 'high-contrast' ? 'bg-gray-800 text-white' :
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {mediaItem.title}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Comments Display - only show if user has access */}
              {!showRestrictedContent && pageComments.map((comment) => (
                <div
                  key={comment.id}
                  className={`absolute p-3 rounded-lg shadow-lg max-w-xs ${
                    settings.theme === 'dark' ? 'bg-yellow-900 border-yellow-700' :
                    'bg-yellow-100 border-yellow-300'
                  } border`}
                  style={{
                    left: comment.position.x,
                    top: comment.position.y
                  }}
                >
                  <div className="flex items-start gap-2">
                    <MessageCircle size={16} className="text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm">{comment.text}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {comment.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Mobile Optimized */}
          <div className="book-navigation-controls">
            <div className="book-nav-buttons">
              <button
                onClick={prevPage}
                disabled={currentPage === 0 || isFlipping}
                className={`book-nav-button transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                  settings.theme === 'dark' 
                    ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                    : 'bg-white text-slate-700 hover:bg-slate-50 shadow-lg'
                }`}
              >
                <ChevronLeft />
                <span>Previous</span>
              </button>

              <div className="book-progress-container">
                <span className={`book-progress-text ${
                  settings.theme === 'dark' ? 'text-gray-400' :
                  settings.theme === 'high-contrast' ? 'text-gray-300' : 'text-slate-500'
                }`}>
                  Progress
                </span>
                <div className={`book-progress-bar ${
                  settings.theme === 'dark' ? 'bg-gray-700' :
                  settings.theme === 'sepia' ? 'bg-amber-200' :
                  settings.theme === 'high-contrast' ? 'bg-gray-800' : 'bg-slate-200'
                }`}>
                  <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentPage + 1) / book.pages.length) * 100}%` }}
                  />
                </div>
                <span className={`book-progress-text font-medium ${
                  settings.theme === 'dark' ? 'text-gray-300' :
                  settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-700'
                }`}>
                  {Math.round(((currentPage + 1) / book.pages.length) * 100)}%
                </span>
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === book.pages.length - 1 || isFlipping}
                className={`book-nav-button transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                  settings.theme === 'dark' 
                    ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                    : 'bg-white text-slate-700 hover:bg-slate-50 shadow-lg'
                }`}
              >
                <span>Next</span>
                <ChevronRight />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="book-action-buttons">
              <button
                onClick={() => setShowCommentDialog(true)}
                className={`book-action-button transition-colors ${
                  settings.theme === 'dark' 
                    ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                <MessageCircle />
                <span>Comment</span>
              </button>
              <button
                className={`book-action-button transition-colors ${
                  settings.theme === 'dark' 
                    ? 'bg-green-900 text-green-200 hover:bg-green-800' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                <Bookmark />
                <span>Bookmark</span>
              </button>
            </div>
          </div>

          {/* Enhanced Quick Navigation */}
          <div className={`mt-8 rounded-xl shadow-sm p-6 transition-colors duration-300 ${
            settings.theme === 'dark' ? 'bg-gray-800' :
            settings.theme === 'sepia' ? 'bg-amber-100' :
            settings.theme === 'high-contrast' ? 'bg-black border border-white' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${
                settings.theme === 'dark' ? 'text-gray-200' :
                settings.theme === 'high-contrast' ? 'text-white' : 'text-slate-800'
              }`}>Quick Navigation</h3>
              <div className={`text-sm ${
                settings.theme === 'dark' ? 'text-gray-400' :
                settings.theme === 'high-contrast' ? 'text-gray-300' : 'text-slate-500'
              }`}>
                Use arrow keys, spacebar, or click pages
              </div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-2">
              {book.pages.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => jumpToPage(index)}
                  disabled={isFlipping}
                  className={`aspect-square p-2 text-sm rounded-lg transition-all transform hover:scale-105 disabled:cursor-not-allowed ${
                    index === currentPage
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : settings.theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:shadow-md'
                      : settings.theme === 'high-contrast'
                      ? 'bg-gray-900 text-white hover:bg-gray-800 border border-gray-600'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-md'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Reading Statistics */}
          <div className={`mt-6 rounded-lg p-4 transition-colors duration-300 ${
            settings.theme === 'dark' ? 'bg-blue-900/20' :
            settings.theme === 'sepia' ? 'bg-amber-200/50' :
            settings.theme === 'high-contrast' ? 'bg-gray-900 border border-blue-500' : 'bg-blue-50'
          }`}>
            <div className="flex items-start gap-3">
              <BookOpen size={20} className={`mt-0.5 flex-shrink-0 ${
                settings.theme === 'dark' ? 'text-blue-400' :
                settings.theme === 'high-contrast' ? 'text-blue-300' : 'text-blue-600'
              }`} />
              <div>
                <h4 className={`font-medium mb-1 ${
                  settings.theme === 'dark' ? 'text-blue-300' :
                  settings.theme === 'high-contrast' ? 'text-blue-200' : 'text-blue-900'
                }`}>Reading Progress</h4>
                <p className={`text-sm ${
                  settings.theme === 'dark' ? 'text-blue-200' :
                  settings.theme === 'high-contrast' ? 'text-blue-100' : 'text-blue-700'
                }`}>
                  {Math.round(((currentPage + 1) / book.pages.length) * 100)}% complete • 
                  {highlights.length} highlights • {comments.length} comments
                </p>
                <div className="flex gap-4 mt-2 text-xs">
                  <kbd className={`px-2 py-1 rounded ${
                    settings.theme === 'dark' ? 'bg-gray-700 text-gray-300' :
                    settings.theme === 'high-contrast' ? 'bg-black text-white border border-gray-500' :
                    'bg-white text-gray-600'
                  }`}>← →</kbd>
                  <kbd className={`px-2 py-1 rounded ${
                    settings.theme === 'dark' ? 'bg-gray-700 text-gray-300' :
                    settings.theme === 'high-contrast' ? 'bg-black text-white border border-gray-500' :
                    'bg-white text-gray-600'
                  }`}>Space</kbd>
                  <kbd className={`px-2 py-1 rounded ${
                    settings.theme === 'dark' ? 'bg-gray-700 text-gray-300' :
                    settings.theme === 'high-contrast' ? 'bg-black text-white border border-gray-500' :
                    'bg-white text-gray-600'
                  }`}>Ctrl+F</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Menu */}
      {showHighlightMenu && (
        <div
          className="highlight-menu fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-3"
          style={{
            left: Math.max(10, Math.min(highlightMenuPosition.x - 110, window.innerWidth - 230)),
            top: Math.max(10, highlightMenuPosition.y - 60)
          }}
        >
          <div className="text-xs text-gray-500 mb-2 font-medium">Highlight Color</div>
          <div className="flex gap-2 mb-3">
            {highlightColors.map((color) => (
              <button
                key={color}
                onClick={() => addHighlight(color)}
                className="highlight-color-btn w-7 h-7 rounded-full border-2 border-gray-300 hover:border-gray-400 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: color }}
                title={`Highlight with ${color}`}
              />
            ))}
          </div>
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => {
                setShowCommentDialog(true);
                setShowHighlightMenu(false);
              }}
              className="w-full flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <MessageCircle size={14} />
              Add Comment
            </button>
          </div>
        </div>
      )}

      {/* Comment Dialog */}
      {showCommentDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-blue-600" size={20} />
              <h3 className="text-lg font-semibold text-gray-800">Add Comment</h3>
            </div>
            {selectedText && (
              <div className="bg-gray-50 rounded-lg p-3 mb-4 border-l-4 border-blue-500">
                <div className="text-xs text-gray-500 mb-1">Selected text:</div>
                <div className="text-sm text-gray-700 italic">"{selectedText}"</div>
              </div>
            )}
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts about this passage..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              rows={4}
              autoFocus
            />
            <div className="flex gap-3 mt-6">
              <button
                onClick={addComment}
                disabled={!commentText.trim()}
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Add Comment
              </button>
              <button
                onClick={() => {
                  setShowCommentDialog(false);
                  setCommentText('');
                  setSelectedText('');
                  window.getSelection()?.removeAllRanges();
                }}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
