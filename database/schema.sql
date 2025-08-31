-- Database Schema for EA Global Referral System
-- This file contains the SQL commands to create tables in Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    whatsapp_number VARCHAR(50),
    linkedin_profile TEXT,
    city VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    google_account_data JSONB
);

-- Referral codes table
CREATE TABLE referral_codes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    code VARCHAR(12) UNIQUE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) NOT NULL CHECK (type IN ('ambassador', 'campus_guide', 'general')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    metadata JSONB
);

-- Referral tracking table
CREATE TABLE referral_tracking (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    referral_code VARCHAR(12),
    action VARCHAR(50) NOT NULL,
    user_agent TEXT,
    ip_address INET,
    url TEXT,
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    misc_params JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lead capture table
CREATE TABLE lead_captures (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    interest TEXT,
    referral_code VARCHAR(12),
    source_page VARCHAR(100) NOT NULL,
    utm_data JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ambassador registrations table
CREATE TABLE ambassador_registrations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    referral_code VARCHAR(12) UNIQUE NOT NULL,
    current_occupation TEXT,
    connection_to_ea_global TEXT,
    additional_info TEXT,
    approval_status VARCHAR(20) DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
    referral_link TEXT NOT NULL,
    google_account_data JSONB,
    browser_info JSONB,
    tracking_data JSONB,
    approval_notes TEXT,
    approved_by VARCHAR(255),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Campus guide registrations table
CREATE TABLE campus_guide_registrations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    referral_code VARCHAR(12) UNIQUE NOT NULL,
    university VARCHAR(255) NOT NULL,
    year_of_study VARCHAR(50) NOT NULL,
    course_of_study VARCHAR(255),
    previous_leadership_experience TEXT,
    why_become_guide TEXT,
    additional_info TEXT,
    approval_status VARCHAR(20) DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
    referral_link TEXT NOT NULL,
    google_account_data JSONB,
    browser_info JSONB,
    tracking_data JSONB,
    approval_notes TEXT,
    approved_by VARCHAR(255),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_referral_codes_code ON referral_codes(code);
CREATE INDEX idx_referral_codes_user_id ON referral_codes(user_id);
CREATE INDEX idx_referral_tracking_code ON referral_tracking(referral_code);
CREATE INDEX idx_referral_tracking_created_at ON referral_tracking(created_at);
CREATE INDEX idx_lead_captures_email ON lead_captures(email);
CREATE INDEX idx_lead_captures_referral_code ON lead_captures(referral_code);
CREATE INDEX idx_users_email ON users(email);

-- Conversions table - tracks successful conversions from referrals
CREATE TABLE conversions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    referral_code VARCHAR(12) NOT NULL,
    ambassador_id UUID REFERENCES users(id),
    campus_guide_id UUID REFERENCES users(id),
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50),
    service_type VARCHAR(100) NOT NULL, -- e.g., 'Study Abroad Consulting', 'IELTS Prep', etc.
    service_amount DECIMAL(10,2),
    conversion_date DATE NOT NULL,
    notes TEXT,
    status VARCHAR(20) DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by VARCHAR(255) -- admin email who created this record
);

-- Indexes for better performance on conversions
CREATE INDEX idx_conversions_referral_code ON conversions(referral_code);
CREATE INDEX idx_conversions_ambassador_id ON conversions(ambassador_id);
CREATE INDEX idx_conversions_campus_guide_id ON conversions(campus_guide_id);
CREATE INDEX idx_conversions_conversion_date ON conversions(conversion_date);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ambassador_registrations_updated_at BEFORE UPDATE ON ambassador_registrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_campus_guide_registrations_updated_at BEFORE UPDATE ON campus_guide_registrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_conversions_updated_at BEFORE UPDATE ON conversions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_captures ENABLE ROW LEVEL SECURITY;
ALTER TABLE ambassador_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE campus_guide_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversions ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies (can be customized based on your needs)
-- Allow all operations for now (you can restrict these later)
CREATE POLICY "Allow all operations" ON users FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON referral_codes FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON referral_tracking FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON lead_captures FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON ambassador_registrations FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON campus_guide_registrations FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON conversions FOR ALL USING (true);
