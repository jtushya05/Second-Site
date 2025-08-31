// Digital Library Database Functions
import { supabase } from './supabase';

// User Book Access Functions
export async function checkUserBookAccess(userId: string, bookId: string): Promise<{
  hasAccess: boolean;
  accessLevel: 'public' | 'authenticated' | 'premium' | null;
}> {
  try {
    // Check if user has specific access granted
    const { data: accessData, error: accessError } = await supabase
      .from('user_book_access')
      .select('access_level, expires_at, is_active')
      .eq('user_id', userId)
      .eq('book_id', bookId)
      .eq('is_active', true)
      .single();

    if (accessError && accessError.code !== 'PGRST116') {
      throw accessError;
    }

    // If specific access is granted, check if it's still valid
    if (accessData) {
      const isExpired = accessData.expires_at && new Date(accessData.expires_at) < new Date();
      if (!isExpired) {
        return { hasAccess: true, accessLevel: accessData.access_level };
      }
    }

    // Check user's general premium status
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('is_premium, premium_expires_at')
      .eq('id', userId)
      .single();

    if (userError) throw userError;

    const isPremiumActive = userData.is_premium && 
      (!userData.premium_expires_at || new Date(userData.premium_expires_at) > new Date());

    return {
      hasAccess: isPremiumActive,
      accessLevel: isPremiumActive ? 'premium' : 'authenticated'
    };
  } catch (error) {
    console.error('Error checking user book access:', error);
    return { hasAccess: false, accessLevel: null };
  }
}

export async function grantUserBookAccess(data: {
  userId: string;
  bookId: string;
  accessLevel: 'authenticated' | 'premium';
  grantedBy: string;
  expiresAt?: Date;
  notes?: string;
}): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('user_book_access')
      .upsert({
        user_id: data.userId,
        book_id: data.bookId,
        access_level: data.accessLevel,
        granted_by: data.grantedBy,
        expires_at: data.expiresAt?.toISOString(),
        notes: data.notes,
        is_active: true
      }, { 
        onConflict: 'user_id,book_id',
        ignoreDuplicates: false 
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error granting book access:', error);
    return false;
  }
}

// Reading Progress Functions
export async function getReadingProgress(userId: string, bookId: string) {
  try {
    const { data, error } = await supabase
      .from('reading_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('book_id', bookId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  } catch (error) {
    console.error('Error fetching reading progress:', error);
    return null;
  }
}

export async function updateReadingProgress(data: {
  userId: string;
  bookId: string;
  currentPage: number;
  totalPages: number;
  readingSettings?: any;
  completed?: boolean;
}) {
  try {
    const updateData: any = {
      user_id: data.userId,
      book_id: data.bookId,
      current_page: data.currentPage,
      total_pages: data.totalPages,
      last_read_at: new Date().toISOString(),
      reading_settings: data.readingSettings
    };

    if (data.completed) {
      updateData.completed_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from('reading_progress')
      .upsert(updateData, { 
        onConflict: 'user_id,book_id',
        ignoreDuplicates: false 
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error updating reading progress:', error);
    return false;
  }
}

// Highlights Functions
export async function getUserHighlights(userId: string, bookId: string) {
  try {
    const { data, error } = await supabase
      .from('book_highlights')
      .select('*')
      .eq('user_id', userId)
      .eq('book_id', bookId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching highlights:', error);
    return [];
  }
}

export async function saveHighlight(data: {
  userId: string;
  bookId: string;
  pageId: string;
  highlightedText: string;
  color: string;
  startOffset: number;
  endOffset: number;
  note?: string;
}) {
  try {
    const { error } = await supabase
      .from('book_highlights')
      .insert({
        user_id: data.userId,
        book_id: data.bookId,
        page_id: data.pageId,
        highlighted_text: data.highlightedText,
        color: data.color,
        start_offset: data.startOffset,
        end_offset: data.endOffset,
        note: data.note
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error saving highlight:', error);
    return false;
  }
}

export async function deleteHighlight(userId: string, highlightId: string) {
  try {
    const { error } = await supabase
      .from('book_highlights')
      .delete()
      .eq('id', highlightId)
      .eq('user_id', userId);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting highlight:', error);
    return false;
  }
}

// Comments Functions
export async function getUserComments(userId: string, bookId: string) {
  try {
    const { data, error } = await supabase
      .from('book_comments')
      .select('*')
      .eq('user_id', userId)
      .eq('book_id', bookId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

export async function saveComment(data: {
  userId: string;
  bookId: string;
  pageId: string;
  commentText: string;
  positionX: number;
  positionY: number;
}) {
  try {
    const { error } = await supabase
      .from('book_comments')
      .insert({
        user_id: data.userId,
        book_id: data.bookId,
        page_id: data.pageId,
        comment_text: data.commentText,
        position_x: data.positionX,
        position_y: data.positionY
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error saving comment:', error);
    return false;
  }
}

// Analytics Functions
export async function trackBookAnalytics(data: {
  bookId: string;
  userId?: string;
  action: string;
  pageId?: string;
  metadata?: any;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
}) {
  try {
    const { error } = await supabase
      .from('book_analytics')
      .insert({
        book_id: data.bookId,
        user_id: data.userId || null,
        action: data.action,
        page_id: data.pageId,
        metadata: data.metadata,
        session_id: data.sessionId,
        ip_address: data.ipAddress,
        user_agent: data.userAgent
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error tracking analytics:', error);
    return false;
  }
}

export async function getBookAnalytics(bookId: string, startDate?: Date, endDate?: Date) {
  try {
    let query = supabase
      .from('book_analytics')
      .select('*')
      .eq('book_id', bookId);

    if (startDate) {
      query = query.gte('created_at', startDate.toISOString());
    }
    if (endDate) {
      query = query.lte('created_at', endDate.toISOString());
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching book analytics:', error);
    return [];
  }
}

// Admin Functions
export async function getAllUserBookAccess() {
  try {
    const { data, error } = await supabase
      .from('user_book_access')
      .select(`
        *,
        users (
          full_name,
          email
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching user book access:', error);
    return [];
  }
}

export async function getReadingProgressStats() {
  try {
    const { data, error } = await supabase
      .from('reading_progress')
      .select(`
        *,
        users (
          full_name,
          email
        )
      `)
      .order('last_read_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching reading progress stats:', error);
    return [];
  }
}
