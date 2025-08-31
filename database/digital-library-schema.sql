-- Digital Library Database Schema
-- Add these tables to your existing Supabase database

-- Table to track book access permissions
CREATE TABLE user_book_access (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    book_id VARCHAR(100) NOT NULL, -- References book.id from the books data
    access_level VARCHAR(20) NOT NULL CHECK (access_level IN ('public', 'authenticated', 'premium')),
    granted_by UUID REFERENCES users(id), -- Admin who granted access
    granted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE, -- NULL for permanent access
    is_active BOOLEAN DEFAULT TRUE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table to track reading progress and bookmarks
CREATE TABLE reading_progress (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    book_id VARCHAR(100) NOT NULL,
    current_page INTEGER DEFAULT 0,
    total_pages INTEGER NOT NULL,
    reading_settings JSONB, -- Store user's reading preferences (theme, font size, etc.)
    last_read_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, book_id)
);

-- Table to store user highlights
CREATE TABLE book_highlights (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    book_id VARCHAR(100) NOT NULL,
    page_id VARCHAR(100) NOT NULL,
    highlighted_text TEXT NOT NULL,
    color VARCHAR(7) NOT NULL, -- Hex color code
    start_offset INTEGER NOT NULL,
    end_offset INTEGER NOT NULL,
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table to store user comments/annotations
CREATE TABLE book_comments (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    book_id VARCHAR(100) NOT NULL,
    page_id VARCHAR(100) NOT NULL,
    comment_text TEXT NOT NULL,
    position_x INTEGER NOT NULL,
    position_y INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table to track book analytics
CREATE TABLE book_analytics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    book_id VARCHAR(100) NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL, -- Allow NULL for anonymous tracking
    action VARCHAR(50) NOT NULL, -- 'view', 'read_page', 'complete', 'bookmark', etc.
    page_id VARCHAR(100),
    metadata JSONB, -- Additional data like reading time, device info, etc.
    session_id VARCHAR(255), -- Track reading sessions
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add premium status to users table (if not exists)
-- This adds a column to track if user has premium access
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_expires_at TIMESTAMP WITH TIME ZONE;

-- Indexes for better performance
CREATE INDEX idx_user_book_access_user_id ON user_book_access(user_id);
CREATE INDEX idx_user_book_access_book_id ON user_book_access(book_id);
CREATE INDEX idx_reading_progress_user_id ON reading_progress(user_id);
CREATE INDEX idx_reading_progress_book_id ON reading_progress(book_id);
CREATE INDEX idx_book_highlights_user_book ON book_highlights(user_id, book_id);
CREATE INDEX idx_book_comments_user_book ON book_comments(user_id, book_id);
CREATE INDEX idx_book_analytics_book_id ON book_analytics(book_id);
CREATE INDEX idx_book_analytics_created_at ON book_analytics(created_at);

-- Row Level Security (RLS) Policies
ALTER TABLE user_book_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_highlights ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE book_analytics ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user data protection
CREATE POLICY "Users can view their own book access" ON user_book_access
    FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can view their own reading progress" ON reading_progress
    FOR ALL USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can manage their own highlights" ON book_highlights
    FOR ALL USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can manage their own comments" ON book_comments
    FOR ALL USING (auth.uid()::text = user_id::text);

-- Allow all operations for service role (use this for now, can be restricted later)
CREATE POLICY "Allow all operations" ON user_book_access FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON book_analytics FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON reading_progress FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON book_highlights FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON book_comments FOR ALL USING (true);

-- Triggers for updated_at timestamps
CREATE TRIGGER update_reading_progress_updated_at BEFORE UPDATE ON reading_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
