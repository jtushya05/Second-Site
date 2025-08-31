-- Digital Library/Ebook Tracking Database Schema
-- Add these tables to your existing Supabase database

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Ebook Users table - tracks unique users by browser fingerprint
CREATE TABLE ebook_users (
    id VARCHAR(32) PRIMARY KEY, -- Browser fingerprint hash
    email VARCHAR(255),
    user_agent TEXT NOT NULL,
    ip_address INET,
    first_visit TIMESTAMP WITH TIME ZONE NOT NULL,
    last_visit TIMESTAMP WITH TIME ZONE NOT NULL,
    total_sessions INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ebook Sessions table - tracks individual reading sessions
CREATE TABLE ebook_sessions (
    id VARCHAR(64) PRIMARY KEY, -- Session ID
    user_id VARCHAR(32) REFERENCES ebook_users(id) ON DELETE CASCADE,
    session_start TIMESTAMP WITH TIME ZONE NOT NULL,
    session_end TIMESTAMP WITH TIME ZONE,
    pages_viewed INTEGER DEFAULT 0,
    books_accessed TEXT[] DEFAULT '{}', -- Array of book IDs
    highlights_created INTEGER DEFAULT 0,
    comments_created INTEGER DEFAULT 0,
    total_reading_time INTEGER DEFAULT 0, -- in seconds
    referral_source VARCHAR(100),
    utm_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ebook Interactions table - tracks individual user interactions
CREATE TABLE ebook_interactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id VARCHAR(32) REFERENCES ebook_users(id) ON DELETE CASCADE,
    session_id VARCHAR(64) REFERENCES ebook_sessions(id) ON DELETE CASCADE,
    book_id VARCHAR(100) NOT NULL,
    page_number INTEGER NOT NULL,
    interaction_type VARCHAR(20) NOT NULL CHECK (interaction_type IN ('page_view', 'highlight', 'comment', 'bookmark', 'search')),
    interaction_data JSONB,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ebook Book Access table - tracks per-book reading progress
CREATE TABLE ebook_book_access (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id VARCHAR(32) REFERENCES ebook_users(id) ON DELETE CASCADE,
    book_id VARCHAR(100) NOT NULL,
    first_accessed TIMESTAMP WITH TIME ZONE NOT NULL,
    last_accessed TIMESTAMP WITH TIME ZONE NOT NULL,
    total_time_spent INTEGER DEFAULT 0, -- in seconds
    pages_read INTEGER DEFAULT 0,
    completion_percentage DECIMAL(5,2) DEFAULT 0.00, -- 0.00 to 100.00
    highlights_count INTEGER DEFAULT 0,
    comments_count INTEGER DEFAULT 0,
    bookmarks_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, book_id)
);

-- Ebook First Interactions table - tracks user's first point of contact
CREATE TABLE ebook_first_interactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id VARCHAR(32) REFERENCES ebook_users(id) ON DELETE CASCADE,
    entry_point VARCHAR(50) NOT NULL, -- 'digital_library', 'book_page', etc.
    entry_url TEXT NOT NULL,
    referral_source VARCHAR(100),
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    user_agent TEXT,
    ip_address INET,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_ebook_users_email ON ebook_users(email);
CREATE INDEX idx_ebook_users_last_visit ON ebook_users(last_visit);
CREATE INDEX idx_ebook_sessions_user_id ON ebook_sessions(user_id);
CREATE INDEX idx_ebook_sessions_start ON ebook_sessions(session_start);
CREATE INDEX idx_ebook_interactions_user_id ON ebook_interactions(user_id);
CREATE INDEX idx_ebook_interactions_book_id ON ebook_interactions(book_id);
CREATE INDEX idx_ebook_interactions_timestamp ON ebook_interactions(timestamp);
CREATE INDEX idx_ebook_book_access_user_id ON ebook_book_access(user_id);
CREATE INDEX idx_ebook_book_access_book_id ON ebook_book_access(book_id);
CREATE INDEX idx_ebook_book_access_completion ON ebook_book_access(completion_percentage);
CREATE INDEX idx_ebook_first_interactions_user_id ON ebook_first_interactions(user_id);
CREATE INDEX idx_ebook_first_interactions_timestamp ON ebook_first_interactions(timestamp);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_ebook_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to automatically update updated_at
CREATE TRIGGER update_ebook_users_updated_at 
    BEFORE UPDATE ON ebook_users
    FOR EACH ROW EXECUTE FUNCTION update_ebook_updated_at_column();

CREATE TRIGGER update_ebook_book_access_updated_at 
    BEFORE UPDATE ON ebook_book_access
    FOR EACH ROW EXECUTE FUNCTION update_ebook_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE ebook_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_book_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE ebook_first_interactions ENABLE ROW LEVEL SECURITY;

-- Allow all operations for now (customize based on your security needs)
CREATE POLICY "Allow all operations" ON ebook_users FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON ebook_sessions FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON ebook_interactions FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON ebook_book_access FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON ebook_first_interactions FOR ALL USING (true);

-- Useful analytics queries for the digital library

-- 1. Most popular books
CREATE OR REPLACE VIEW popular_books AS
SELECT 
    book_id,
    COUNT(DISTINCT user_id) as unique_readers,
    COUNT(*) as total_accesses,
    AVG(completion_percentage) as avg_completion,
    SUM(total_time_spent) as total_reading_time
FROM ebook_book_access 
GROUP BY book_id 
ORDER BY unique_readers DESC;

-- 2. User reading patterns
CREATE OR REPLACE VIEW user_reading_patterns AS
SELECT 
    u.id,
    u.email,
    u.total_sessions,
    COUNT(DISTINCT ba.book_id) as books_accessed,
    AVG(ba.completion_percentage) as avg_completion,
    SUM(ba.total_time_spent) as total_reading_time,
    COUNT(i.id) FILTER (WHERE i.interaction_type = 'highlight') as total_highlights,
    COUNT(i.id) FILTER (WHERE i.interaction_type = 'comment') as total_comments
FROM ebook_users u
LEFT JOIN ebook_book_access ba ON u.id = ba.user_id
LEFT JOIN ebook_interactions i ON u.id = i.user_id
GROUP BY u.id, u.email, u.total_sessions;

-- 3. Daily usage statistics
CREATE OR REPLACE VIEW daily_usage_stats AS
SELECT 
    DATE(session_start) as date,
    COUNT(DISTINCT user_id) as unique_users,
    COUNT(*) as total_sessions,
    SUM(total_reading_time) as total_reading_time,
    SUM(pages_viewed) as total_pages_viewed,
    SUM(highlights_created) as total_highlights,
    SUM(comments_created) as total_comments
FROM ebook_sessions 
GROUP BY DATE(session_start)
ORDER BY date DESC;

-- 4. Referral source analysis
CREATE OR REPLACE VIEW referral_analysis AS
SELECT 
    fi.referral_source,
    fi.utm_source,
    fi.utm_medium,
    fi.utm_campaign,
    COUNT(*) as first_visits,
    COUNT(DISTINCT fi.user_id) as unique_users,
    AVG(u.total_sessions) as avg_sessions_per_user
FROM ebook_first_interactions fi
JOIN ebook_users u ON fi.user_id = u.id
GROUP BY fi.referral_source, fi.utm_source, fi.utm_medium, fi.utm_campaign
ORDER BY first_visits DESC;
