import { supabase } from './supabase';
import type { 
  User, 
  ReferralCode, 
  ReferralTracking, 
  LeadCapture, 
  AmbassadorRegistration, 
  CampusGuideRegistration 
} from './supabase';

// User operations
export async function createOrUpdateUser(userData: {
  email: string;
  full_name: string;
  whatsapp_number?: string;
  linkedin_profile?: string;
  city?: string;
  google_account_data?: any;
}): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .upsert(userData, { 
        onConflict: 'email',
        ignoreDuplicates: false 
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating/updating user:', error);
    return null;
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows returned
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

// Referral code operations
export async function createReferralCode(codeData: {
  code: string;
  user_id: string;
  type: 'ambassador' | 'campus_guide' | 'general';
  metadata?: any;
}): Promise<ReferralCode | null> {
  try {
    const { data, error } = await supabase
      .from('referral_codes')
      .insert(codeData)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating referral code:', error);
    return null;
  }
}

export async function getReferralCodeByCode(code: string): Promise<ReferralCode | null> {
  try {
    const { data, error } = await supabase
      .from('referral_codes')
      .select('*')
      .eq('code', code)
      .eq('is_active', true)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  } catch (error) {
    console.error('Error fetching referral code:', error);
    return null;
  }
}

// Referral tracking operations
export async function trackReferralUsageDB(trackingData: {
  referral_code?: string;
  action: string;
  user_agent?: string;
  ip_address?: string;
  url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  misc_params?: any;
}): Promise<ReferralTracking | null> {
  try {
    const { data, error } = await supabase
      .from('referral_tracking')
      .insert(trackingData)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error tracking referral usage:', error);
    return null;
  }
}

// Lead capture operations
export async function createLeadCapture(leadData: {
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  referral_code?: string;
  source_page: string;
  utm_data?: any;
}): Promise<LeadCapture | null> {
  try {
    const { data, error } = await supabase
      .from('lead_captures')
      .insert(leadData)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating lead capture:', error);
    return null;
  }
}

// Ambassador registration operations
export async function createAmbassadorRegistration(registrationData: {
  user_id: string;
  referral_code: string;
  current_occupation?: string;
  connection_to_ea_global?: string;
  additional_info?: string;
  referral_link: string;
  google_account_data?: any;
  browser_info?: any;
  tracking_data?: any;
}): Promise<AmbassadorRegistration | null> {
  try {
    const { data, error } = await supabase
      .from('ambassador_registrations')
      .insert(registrationData)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating ambassador registration:', error);
    return null;
  }
}

export async function completeAmbassadorRegistrationDB(userData: {
  email: string;
  full_name: string;
  whatsapp_number?: string;
  linkedin_profile?: string;
  city?: string;
  current_occupation?: string;
  connection_to_ea_global?: string;
  additional_info?: string;
  referral_code: string;
  google_account_data?: any;
}) {
  try {
    // First, create or update the user
    const user = await createOrUpdateUser({
      email: userData.email,
      full_name: userData.full_name,
      whatsapp_number: userData.whatsapp_number,
      linkedin_profile: userData.linkedin_profile,
      city: userData.city,
      google_account_data: userData.google_account_data
    });

    if (!user) {
      throw new Error('Failed to create/update user');
    }

    // Create the referral code
    const referralCode = await createReferralCode({
      code: userData.referral_code,
      user_id: user.id,
      type: 'ambassador'
    });

    if (!referralCode) {
      throw new Error('Failed to create referral code');
    }

    // Create the ambassador registration
    const registration = await createAmbassadorRegistration({
      user_id: user.id,
      referral_code: userData.referral_code,
      current_occupation: userData.current_occupation,
      connection_to_ea_global: userData.connection_to_ea_global,
      additional_info: userData.additional_info,
      referral_link: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}?ref=${userData.referral_code}`,
      google_account_data: userData.google_account_data
    });

    return registration;
  } catch (error) {
    console.error('Error completing ambassador registration:', error);
    return null;
  }
}

// Campus guide registration operations
export async function createCampusGuideRegistration(registrationData: {
  user_id: string;
  referral_code: string;
  university: string;
  year_of_study: string;
  course_of_study?: string;
  previous_leadership_experience?: string;
  additional_info?: string;
  referral_link: string;
  google_account_data?: any;
  browser_info?: any;
  tracking_data?: any;
}): Promise<CampusGuideRegistration | null> {
  try {
    const { data, error } = await supabase
      .from('campus_guide_registrations')
      .insert(registrationData)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating campus guide registration:', error);
    return null;
  }
}

export async function completeCampusGuideRegistrationDB(userData: {
  email: string;
  full_name: string;
  whatsapp_number?: string;
  linkedin_profile?: string;
  city?: string;
  university: string;
  year_of_study: string;
  course_of_study?: string;
  previous_leadership_experience?: string;
  additional_info?: string;
  referral_code: string;
  google_account_data?: any;
}) {
  try {
    // First, create or update the user
    const user = await createOrUpdateUser({
      email: userData.email,
      full_name: userData.full_name,
      whatsapp_number: userData.whatsapp_number,
      linkedin_profile: userData.linkedin_profile,
      city: userData.city,
      google_account_data: userData.google_account_data
    });

    if (!user) {
      throw new Error('Failed to create/update user');
    }

    // Create the referral code
    const referralCode = await createReferralCode({
      code: userData.referral_code,
      user_id: user.id,
      type: 'campus_guide'
    });

    if (!referralCode) {
      throw new Error('Failed to create referral code');
    }

    // Create the campus guide registration
    const registration = await createCampusGuideRegistration({
      user_id: user.id,
      referral_code: userData.referral_code,
      university: userData.university,
      year_of_study: userData.year_of_study,
      course_of_study: userData.course_of_study,
      previous_leadership_experience: userData.previous_leadership_experience,
      additional_info: userData.additional_info,
      referral_link: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}?ref=${userData.referral_code}`,
      google_account_data: userData.google_account_data
    });

    return registration;
  } catch (error) {
    console.error('Error completing campus guide registration:', error);
    return null;
  }
}

// Booking operations
export async function createBooking(bookingData: {
  name: string;
  email: string;
  phone?: string;
  booking_type: string;
  preferred_date?: string;
  message?: string;
  referral_code?: string;
  utm_data?: any;
}): Promise<any> {
  try {
    // For now, we'll just log the booking data since we don't have a bookings table yet
    console.log('Booking data:', bookingData);
    return { success: true, data: bookingData };
  } catch (error) {
    console.error('Error creating booking:', error);
    return null;
  }
}

// Admin functions
export async function getAdminStats() {
  try {
    const [ambassadors, campusGuides, referralCodes, referralTracking] = await Promise.all([
      supabase.from('ambassador_registrations').select('id, approval_status'),
      supabase.from('campus_guide_registrations').select('id, approval_status'),
      supabase.from('referral_codes').select('id'),
      supabase.from('referral_tracking').select('id')
    ]);

    const totalAmbassadors = ambassadors.data?.filter((a: any) => a.approval_status === 'approved').length || 0;
    const totalCampusGuides = campusGuides.data?.filter((c: any) => c.approval_status === 'approved').length || 0;
    const pendingApprovals = [
      ...(ambassadors.data?.filter((a: any) => a.approval_status === 'pending') || []),
      ...(campusGuides.data?.filter((c: any) => c.approval_status === 'pending') || [])
    ].length;
    const totalReferralCodes = referralCodes.data?.length || 0;
    const totalReferralClicks = referralTracking.data?.length || 0;
    const conversionRate = totalReferralClicks > 0 ? ((totalAmbassadors + totalCampusGuides) / totalReferralClicks) * 100 : 0;

    return {
      totalAmbassadors,
      totalCampusGuides,
      pendingApprovals,
      totalReferralCodes,
      totalReferralClicks,
      conversionRate
    };
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return {
      totalAmbassadors: 0,
      totalCampusGuides: 0,
      pendingApprovals: 0,
      totalReferralCodes: 0,
      totalReferralClicks: 0,
      conversionRate: 0
    };
  }
}

export async function getAllAmbassadorRegistrations() {
  try {
    const { data, error } = await supabase
      .from('ambassador_registrations')
      .select(`
        *,
        users (
          full_name,
          email,
          whatsapp_number,
          city,
          linkedin_profile
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching ambassador registrations:', error);
    return [];
  }
}

export async function getAllCampusGuideRegistrations() {
  try {
    const { data, error } = await supabase
      .from('campus_guide_registrations')
      .select(`
        *,
        users (
          full_name,
          email,
          whatsapp_number,
          city,
          linkedin_profile
        )
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching campus guide registrations:', error);
    return [];
  }
}

export async function getAllReferralCodes() {
  try {
    const { data, error } = await supabase
      .from('referral_codes')
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
    console.error('Error fetching referral codes:', error);
    return [];
  }
}

export async function getAllReferralTracking() {
  try {
    const { data, error } = await supabase
      .from('referral_tracking')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1000); // Limit to avoid large data loads

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching referral tracking:', error);
    return [];
  }
}

export async function updateAmbassadorStatus(
  id: string, 
  status: 'pending' | 'approved' | 'rejected',
  notes?: string,
  approvedBy?: string
) {
  try {
    const updateData: any = {
      approval_status: status,
      updated_at: new Date().toISOString()
    };

    if (notes) updateData.approval_notes = notes;
    if (approvedBy) updateData.approved_by = approvedBy;
    if (status === 'approved') updateData.approved_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('ambassador_registrations')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating ambassador status:', error);
    return null;
  }
}

export async function updateCampusGuideStatus(
  id: string, 
  status: 'pending' | 'approved' | 'rejected',
  notes?: string,
  approvedBy?: string
) {
  try {
    const updateData: any = {
      approval_status: status,
      updated_at: new Date().toISOString()
    };

    if (notes) updateData.approval_notes = notes;
    if (approvedBy) updateData.approved_by = approvedBy;
    if (status === 'approved') updateData.approved_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('campus_guide_registrations')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating campus guide status:', error);
    return null;
  }
}

export async function getUserReferralCodes(userId: string) {
  try {
    const { data, error } = await supabase
      .from('referral_codes')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching user referral codes:', error);
    return [];
  }
}
