import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface User {
  id: string;
  email: string;
  full_name: string;
  whatsapp_number?: string;
  linkedin_profile?: string;
  city?: string;
  created_at: string;
  updated_at: string;
  google_account_data?: any;
}

export interface ReferralCode {
  id: string;
  code: string;
  user_id: string;
  type: 'ambassador' | 'campus_guide' | 'general';
  created_at: string;
  is_active: boolean;
  metadata?: any;
}

export interface ReferralTracking {
  id: string;
  referral_code: string;
  action: string;
  user_agent?: string;
  ip_address?: string;
  url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  misc_params?: any;
  created_at: string;
}

export interface LeadCapture {
  id: string;
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  referral_code?: string;
  source_page: string;
  utm_data?: any;
  created_at: string;
}

export interface AmbassadorRegistration {
  id: string;
  user_id: string;
  referral_code: string;
  current_occupation?: string;
  connection_to_ea_global?: string;
  additional_info?: string;
  approval_status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface CampusGuideRegistration {
  id: string;
  user_id: string;
  referral_code: string;
  university: string;
  year_of_study: string;
  course_of_study?: string;
  previous_leadership_experience?: string;
  additional_info?: string;
  approval_status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}
