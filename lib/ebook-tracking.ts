// Digital Library User Tracking System
import { supabase } from './supabase';

// Types for ebook tracking
export interface EbookUser {
  id: string;
  email?: string;
  user_agent: string;
  ip_address?: string;
  first_visit: string;
  last_visit: string;
  total_sessions: number;
  created_at: string;
  updated_at: string;
}

export interface EbookSession {
  id: string;
  user_id: string;
  session_start: string;
  session_end?: string;
  pages_viewed: number;
  books_accessed: string[];
  highlights_created: number;
  comments_created: number;
  total_reading_time: number; // in seconds
  referral_source?: string;
  utm_data?: any;
  created_at: string;
}

export interface EbookInteraction {
  id: string;
  user_id: string;
  session_id: string;
  book_id: string;
  page_number: number;
  interaction_type: 'page_view' | 'highlight' | 'comment' | 'bookmark' | 'search';
  interaction_data?: any;
  timestamp: string;
}

export interface EbookBookAccess {
  id: string;
  user_id: string;
  book_id: string;
  first_accessed: string;
  last_accessed: string;
  total_time_spent: number; // in seconds
  pages_read: number;
  completion_percentage: number;
  highlights_count: number;
  comments_count: number;
  bookmarks_count: number;
  created_at: string;
  updated_at: string;
}

// Browser fingerprinting for user identification
function generateUserFingerprint(): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Digital Library Fingerprint', 2, 2);
  }
  
  const fingerprint = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screen: `${screen.width}x${screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    canvas: canvas.toDataURL(),
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
  };
  
  return btoa(JSON.stringify(fingerprint)).substring(0, 32);
}

// Get or create user ID
export function getUserId(): string {
  let userId = localStorage.getItem('ebook_user_id');
  if (!userId) {
    userId = generateUserFingerprint();
    localStorage.setItem('ebook_user_id', userId);
  }
  return userId;
}

// Get session ID
export function getSessionId(): string {
  let sessionId = sessionStorage.getItem('ebook_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('ebook_session_id', sessionId);
  }
  return sessionId;
}

// Track user creation or update
export async function trackUser(additionalData?: { email?: string; referral_source?: string }): Promise<void> {
  try {
    const userId = getUserId();
    const userAgent = navigator.userAgent;
    const now = new Date().toISOString();
    
    // Get referral data from existing system
    const urlParams = localStorage.getItem('urlParams');
    const referralData = urlParams ? JSON.parse(urlParams) : {};
    
    // Check if user exists
    const { data: existingUser } = await supabase
      .from('ebook_users')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (existingUser) {
      // Update existing user
      await supabase
        .from('ebook_users')
        .update({
          last_visit: now,
          total_sessions: existingUser.total_sessions + 1,
          updated_at: now,
          ...(additionalData?.email && { email: additionalData.email })
        })
        .eq('id', userId);
    } else {
      // Create new user
      await supabase
        .from('ebook_users')
        .insert({
          id: userId,
          user_agent: userAgent,
          first_visit: now,
          last_visit: now,
          total_sessions: 1,
          email: additionalData?.email,
          created_at: now,
          updated_at: now
        });
      
      // Track first interaction
      await trackFirstInteraction(userId, additionalData?.referral_source || referralData.ref);
    }
  } catch (error) {
    console.error('Error tracking user:', error);
  }
}

// Track first point of interaction
async function trackFirstInteraction(userId: string, referralSource?: string): Promise<void> {
  try {
    const urlParams = localStorage.getItem('urlParams');
    const referralData = urlParams ? JSON.parse(urlParams) : {};
    
    await supabase
      .from('ebook_first_interactions')
      .insert({
        user_id: userId,
        entry_point: 'digital_library',
        entry_url: window.location.href,
        referral_source: referralSource || referralData.ref || 'direct',
        utm_source: referralData.utm_source,
        utm_medium: referralData.utm_medium,
        utm_campaign: referralData.utm_campaign,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
      });
  } catch (error) {
    console.error('Error tracking first interaction:', error);
  }
}

// Start a reading session
export async function startReadingSession(): Promise<void> {
  try {
    const userId = getUserId();
    const sessionId = getSessionId();
    const now = new Date().toISOString();
    
    // Get referral data
    const urlParams = localStorage.getItem('urlParams');
    const referralData = urlParams ? JSON.parse(urlParams) : {};
    
    await supabase
      .from('ebook_sessions')
      .insert({
        id: sessionId,
        user_id: userId,
        session_start: now,
        pages_viewed: 0,
        books_accessed: [],
        highlights_created: 0,
        comments_created: 0,
        total_reading_time: 0,
        referral_source: referralData.ref || 'direct',
        utm_data: referralData,
        created_at: now
      });
    
    // Track user
    await trackUser({ referral_source: referralData.ref });
  } catch (error) {
    console.error('Error starting reading session:', error);
  }
}

// End reading session
export async function endReadingSession(): Promise<void> {
  try {
    const sessionId = getSessionId();
    const now = new Date().toISOString();
    
    await supabase
      .from('ebook_sessions')
      .update({
        session_end: now
      })
      .eq('id', sessionId);
    
    // Clear session storage
    sessionStorage.removeItem('ebook_session_id');
  } catch (error) {
    console.error('Error ending reading session:', error);
  }
}

// Track book access
export async function trackBookAccess(bookId: string): Promise<void> {
  try {
    const userId = getUserId();
    const now = new Date().toISOString();
    
    // Check if book access record exists
    const { data: existingAccess } = await supabase
      .from('ebook_book_access')
      .select('*')
      .eq('user_id', userId)
      .eq('book_id', bookId)
      .single();
    
    if (existingAccess) {
      // Update existing record
      await supabase
        .from('ebook_book_access')
        .update({
          last_accessed: now,
          updated_at: now
        })
        .eq('id', existingAccess.id);
    } else {
      // Create new record
      await supabase
        .from('ebook_book_access')
        .insert({
          user_id: userId,
          book_id: bookId,
          first_accessed: now,
          last_accessed: now,
          total_time_spent: 0,
          pages_read: 0,
          completion_percentage: 0,
          highlights_count: 0,
          comments_count: 0,
          bookmarks_count: 0,
          created_at: now,
          updated_at: now
        });
    }
    
    // Update session with book access
    const sessionId = getSessionId();
    const { data: session } = await supabase
      .from('ebook_sessions')
      .select('books_accessed')
      .eq('id', sessionId)
      .single();
    
    if (session) {
      const booksAccessed = session.books_accessed || [];
      if (!booksAccessed.includes(bookId)) {
        booksAccessed.push(bookId);
        await supabase
          .from('ebook_sessions')
          .update({ books_accessed: booksAccessed })
          .eq('id', sessionId);
      }
    }
  } catch (error) {
    console.error('Error tracking book access:', error);
  }
}

// Track page interaction
export async function trackInteraction(
  bookId: string,
  pageNumber: number,
  interactionType: 'page_view' | 'highlight' | 'comment' | 'bookmark' | 'search',
  interactionData?: any
): Promise<void> {
  try {
    const userId = getUserId();
    const sessionId = getSessionId();
    
    await supabase
      .from('ebook_interactions')
      .insert({
        user_id: userId,
        session_id: sessionId,
        book_id: bookId,
        page_number: pageNumber,
        interaction_type: interactionType,
        interaction_data: interactionData,
        timestamp: new Date().toISOString()
      });
    
    // Update session counters
    const updates: any = { pages_viewed: 1 };
    if (interactionType === 'highlight') updates.highlights_created = 1;
    if (interactionType === 'comment') updates.comments_created = 1;
    
    // Increment session counters
    const { data: session } = await supabase
      .from('ebook_sessions')
      .select('pages_viewed, highlights_created, comments_created')
      .eq('id', sessionId)
      .single();
    
    if (session) {
      await supabase
        .from('ebook_sessions')
        .update({
          pages_viewed: (session.pages_viewed || 0) + (updates.pages_viewed || 0),
          highlights_created: (session.highlights_created || 0) + (updates.highlights_created || 0),
          comments_created: (session.comments_created || 0) + (updates.comments_created || 0)
        })
        .eq('id', sessionId);
    }
    
    // Update book access counters
    if (interactionType === 'page_view') {
      await updateBookProgress(bookId, pageNumber);
    }
  } catch (error) {
    console.error('Error tracking interaction:', error);
  }
}

// Update book reading progress
async function updateBookProgress(bookId: string, pageNumber: number): Promise<void> {
  try {
    const userId = getUserId();
    
    const { data: bookAccess } = await supabase
      .from('ebook_book_access')
      .select('*')
      .eq('user_id', userId)
      .eq('book_id', bookId)
      .single();
    
    if (bookAccess) {
      const newPagesRead = Math.max(bookAccess.pages_read, pageNumber);
      // Assuming 20 pages per book on average for completion calculation
      const completionPercentage = Math.min(100, (newPagesRead / 20) * 100);
      
      await supabase
        .from('ebook_book_access')
        .update({
          pages_read: newPagesRead,
          completion_percentage: completionPercentage,
          updated_at: new Date().toISOString()
        })
        .eq('id', bookAccess.id);
    }
  } catch (error) {
    console.error('Error updating book progress:', error);
  }
}

// Track reading time
export async function trackReadingTime(seconds: number): Promise<void> {
  try {
    const sessionId = getSessionId();
    
    const { data: session } = await supabase
      .from('ebook_sessions')
      .select('total_reading_time')
      .eq('id', sessionId)
      .single();
    
    if (session) {
      await supabase
        .from('ebook_sessions')
        .update({
          total_reading_time: (session.total_reading_time || 0) + seconds
        })
        .eq('id', sessionId);
    }
  } catch (error) {
    console.error('Error tracking reading time:', error);
  }
}

// Get user analytics
export async function getUserAnalytics(userId?: string): Promise<any> {
  try {
    const targetUserId = userId || getUserId();
    
    const [userStats, sessionStats, bookStats] = await Promise.all([
      supabase
        .from('ebook_users')
        .select('*')
        .eq('id', targetUserId)
        .single(),
      
      supabase
        .from('ebook_sessions')
        .select('*')
        .eq('user_id', targetUserId),
      
      supabase
        .from('ebook_book_access')
        .select('*')
        .eq('user_id', targetUserId)
    ]);
    
    return {
      user: userStats.data,
      sessions: sessionStats.data,
      books: bookStats.data,
      totalSessions: sessionStats.data?.length || 0,
      totalReadingTime: sessionStats.data?.reduce((sum: number, session: any) => sum + (session.total_reading_time || 0), 0) || 0,
      booksAccessed: bookStats.data?.length || 0,
      averageCompletion: bookStats.data?.reduce((sum: number, book: any) => sum + book.completion_percentage, 0) / (bookStats.data?.length || 1) || 0
    };
  } catch (error) {
    console.error('Error getting user analytics:', error);
    return null;
  }
}

// Initialize tracking on page load
export function initializeEbookTracking(): void {
  if (typeof window !== 'undefined') {
    // Start session tracking
    startReadingSession();
    
    // Track reading time
    let startTime = Date.now();
    let isActive = true;
    
    // Track when user becomes inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isActive) {
          const timeSpent = Math.floor((Date.now() - startTime) / 1000);
          trackReadingTime(timeSpent);
          isActive = false;
        }
      } else {
        startTime = Date.now();
        isActive = true;
      }
    };
    
    // Track when user leaves page
    const handleBeforeUnload = () => {
      if (isActive) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        trackReadingTime(timeSpent);
      }
      endReadingSession();
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Periodic time tracking (every 30 seconds)
    setInterval(() => {
      if (isActive && !document.hidden) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        if (timeSpent >= 30) {
          trackReadingTime(timeSpent);
          startTime = Date.now();
        }
      }
    }, 30000);
  }
}
