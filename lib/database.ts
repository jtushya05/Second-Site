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

export async function getReferralCodeByUser(userId: string, type: 'ambassador' | 'campus_guide' | 'general'): Promise<ReferralCode | null> {
  try {
    const { data, error } = await supabase
      .from('referral_codes')
      .select('*')
      .eq('user_id', userId)
      .eq('type', type)
      .eq('is_active', true)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  } catch (error) {
    console.error('Error fetching user referral code:', error);
    return null;
  }
}

export async function getExistingAmbassadorRegistration(email: string): Promise<any> {
  try {
    const { data, error } = await supabase
      .from('ambassador_registrations')
      .select(`
        *,
        users (
          email,
          full_name,
          whatsapp_number,
          linkedin_profile,
          city,
          google_account_data
        )
      `)
      .eq('users.email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  } catch (error) {
    console.error('Error fetching existing ambassador registration:', error);
    return null;
  }
}

export async function getExistingCampusGuideRegistration(email: string): Promise<any> {
  try {
    const { data, error } = await supabase
      .from('campus_guide_registrations')
      .select(`
        *,
        users (
          email,
          full_name,
          whatsapp_number,
          linkedin_profile,
          city,
          google_account_data
        )
      `)
      .eq('users.email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  } catch (error) {
    console.error('Error fetching existing campus guide registration:', error);
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
  why_become_guide?: string;
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
  why_become_guide?: string;
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
      why_become_guide: userData.why_become_guide,
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

// Update operations for existing registrations
export async function updateAmbassadorRegistrationDB(email: string, updateData: {
  whatsapp_number?: string;
  linkedin_profile?: string;
  city?: string;
  current_occupation?: string;
  connection_to_ea_global?: string;
  additional_info?: string;
}) {
  try {
    // First update the user data
    const user = await createOrUpdateUser({
      email: email,
      full_name: '', // This will be ignored in update
      whatsapp_number: updateData.whatsapp_number,
      linkedin_profile: updateData.linkedin_profile,
      city: updateData.city
    });

    if (!user) {
      throw new Error('Failed to update user');
    }

    // Update the ambassador registration
    const { data, error } = await supabase
      .from('ambassador_registrations')
      .update({
        current_occupation: updateData.current_occupation,
        connection_to_ea_global: updateData.connection_to_ea_global,
        additional_info: updateData.additional_info,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating ambassador registration:', error);
    return null;
  }
}

export async function updateCampusGuideRegistrationDB(email: string, updateData: {
  whatsapp_number?: string;
  linkedin_profile?: string;
  city?: string;
  university?: string;
  year_of_study?: string;
  course_of_study?: string;
  previous_leadership_experience?: string;
  why_become_guide?: string;
  additional_info?: string;
}) {
  try {
    // First update the user data
    const user = await createOrUpdateUser({
      email: email,
      full_name: '', // This will be ignored in update
      whatsapp_number: updateData.whatsapp_number,
      linkedin_profile: updateData.linkedin_profile,
      city: updateData.city
    });

    if (!user) {
      throw new Error('Failed to update user');
    }

    // Update the campus guide registration
    const { data, error } = await supabase
      .from('campus_guide_registrations')
      .update({
        university: updateData.university,
        year_of_study: updateData.year_of_study,
        course_of_study: updateData.course_of_study,
        previous_leadership_experience: updateData.previous_leadership_experience,
        why_become_guide: updateData.why_become_guide,
        additional_info: updateData.additional_info,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating campus guide registration:', error);
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

export async function getAllUsers() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching all users:', error);
    return [];
  }
}

export async function getAllLeadCaptures() {
  try {
    const { data, error } = await supabase
      .from('lead_captures')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1000); // Limit to avoid large data loads

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching lead captures:', error);
    return [];
  }
}

// Conversion tracking functions
export async function createConversion(conversionData: {
  referral_code: string;
  ambassador_id?: string;
  campus_guide_id?: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  service_type: string;
  service_amount?: number;
  conversion_date: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  created_by: string;
}) {
  try {
    const { data, error } = await supabase
      .from('conversions')
      .insert([conversionData])
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error creating conversion:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function getAllConversions() {
  try {
    const { data, error } = await supabase
      .from('conversions')
      .select(`
        *,
        ambassador:ambassador_id(full_name, email),
        campus_guide:campus_guide_id(full_name, email)
      `)
      .order('conversion_date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching conversions:', error);
    return [];
  }
}

export async function getConversionsByReferralCode(referralCode: string) {
  try {
    const { data, error } = await supabase
      .from('conversions')
      .select(`
        *,
        ambassador:ambassador_id(full_name, email),
        campus_guide:campus_guide_id(full_name, email)
      `)
      .eq('referral_code', referralCode)
      .order('conversion_date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching conversions by referral code:', error);
    return [];
  }
}

export async function getConversionsByAmbassador(ambassadorId: string) {
  try {
    const { data, error } = await supabase
      .from('conversions')
      .select('*')
      .eq('ambassador_id', ambassadorId)
      .order('conversion_date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching conversions by ambassador:', error);
    return [];
  }
}

export async function getConversionsByCampusGuide(campusGuideId: string) {
  try {
    const { data, error } = await supabase
      .from('conversions')
      .select('*')
      .eq('campus_guide_id', campusGuideId)
      .order('conversion_date', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching conversions by campus guide:', error);
    return [];
  }
}

export async function updateConversion(conversionId: string, updates: {
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  service_type?: string;
  service_amount?: number;
  conversion_date?: string;
  notes?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
}) {
  try {
    const { data, error } = await supabase
      .from('conversions')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', conversionId)
      .select()
      .single();

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error updating conversion:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function deleteConversion(conversionId: string) {
  try {
    const { error } = await supabase
      .from('conversions')
      .delete()
      .eq('id', conversionId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error deleting conversion:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function getAllAmbassadors() {
  try {
    const { data, error } = await supabase
      .from('ambassador_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching all ambassadors:', error);
    return [];
  }
}

export async function getAllCampusGuides() {
  try {
    const { data, error } = await supabase
      .from('campus_guide_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching all campus guides:', error);
    return [];
  }
}

// Export all data function for admin
export async function exportAllData() {
  try {
    const [
      users,
      ambassadors,
      campusGuides,
      referralTracking,
      leadCaptures,
      conversions
    ] = await Promise.all([
      getAllUsers(),
      getAllAmbassadors(),
      getAllCampusGuides(),
      getAllReferralTracking(),
      getAllLeadCaptures(),
      getAllConversions()
    ]);

    return {
      users,
      ambassadors,
      campusGuides,
      referralTracking,
      leadCaptures,
      conversions,
      exportedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error exporting all data:', error);
    throw error;
  }
}
