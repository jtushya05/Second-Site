/**
 * Utility functions for referral code generation, validation, and tracking
 */

export interface ReferralData {
  code: string;
  timestamp: number;
  source: 'ambassador' | 'campus_guide' | 'general';
  userId?: string;
  email?: string;
  name?: string;
}

/**
 * Generate a secure, random-looking referral code
 * Enhanced version that looks completely random to users
 */
export function generateReferralCode(email: string, name: string, timestamp?: number, source: 'ambassador' | 'campus_guide' = 'ambassador'): string {
  const ts = timestamp || Date.now();
  
  // Create hashes for email and name for better randomness
  const emailHash = email.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const nameHash = name.replace(/\s+/g, '').split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  // Add source identifier (subtle difference)
  const sourceMultiplier = source === 'ambassador' ? 17 : 23;
  const combined = Math.abs(emailHash) + Math.abs(nameHash) + ts + sourceMultiplier;
  
  // Create multiple random-looking segments
  const segments = [
    Math.abs(emailHash).toString(36).substring(0, 3),
    ts.toString(36).substring(-3),
    Math.abs(nameHash).toString(36).substring(0, 2),
    Math.random().toString(36).substring(2, 5),
    combined.toString(36).substring(-3)
  ];
  
  // Shuffle and join segments
  const shuffled = segments.sort(() => Math.random() - 0.5).join('');
  const randomChars = Math.random().toString(36).substring(2, 4);
  
  // Final mixing and ensure 12-character length
  const final = (shuffled + randomChars).toUpperCase().replace(/[^A-Z0-9]/g, '');
  return final.substring(0, 12).padEnd(12, 'X');
}

export function validateReferralCode(code: string): boolean {
  // Enhanced validation - check if it's alphanumeric and correct length
  return /^[A-Z0-9]{12}$/.test(code);
}

export function createReferralLink(baseUrl: string, referralCode: string): string {
  return `${baseUrl}?ref=${referralCode}`;
}

export function extractReferralFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('ref');
  } catch {
    return null;
  }
}

/**
 * Store referral data in localStorage
 */
export function storeReferralData(data: ReferralData): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('referralData', JSON.stringify(data));
    localStorage.setItem('ref', data.code);
    localStorage.setItem('referralCode', data.code);
  }
}

/**
 * Get referral data from localStorage
 */
export function getReferralData(): ReferralData | null {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('referralData');
    return stored ? JSON.parse(stored) : null;
  }
  return null;
}

/**
 * Get current referral code from localStorage or URL
 */
export function getCurrentReferralCode(): string | null {
  if (typeof window !== 'undefined') {
    // Check URL first
    const urlParams = new URLSearchParams(window.location.search);
    const urlRef = urlParams.get('ref');
    
    if (urlRef) {
      return urlRef;
    }
    
    // Fall back to localStorage
    return localStorage.getItem('ref') || localStorage.getItem('referralCode');
  }
  return null;
}

/**
 * Track referral link usage
 */
export async function trackReferralUsage(referralCode: string, action: string = 'link_click'): Promise<void> {
  if (typeof window !== 'undefined') {
    try {
      await fetch('/api/referral-tracking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referralCode,
          action,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.warn('Failed to track referral usage:', error);
    }
  }
}

/**
 * Submit referral data to Google Form
 */
export async function submitToGoogleForm(formUrl: string, data: Record<string, string>): Promise<boolean> {
  try {
    await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data)
    });
    return true;
  } catch (error) {
    console.error('Failed to submit to Google Form:', error);
    return false;
  }
}

/**
 * Enhanced referral link generator for ambassadors
 */
export function generateAmbassadorLink(userData: {
  email: string;
  name: string;
  whatsappNumber: string;
  city?: string;
}): { referralCode: string; referralLink: string } {
  const timestamp = Date.now();
  const referralCode = generateReferralCode(userData.email, userData.name, timestamp, 'ambassador');
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com';
  const referralLink = createReferralLink(baseUrl, referralCode);
  
  // Store additional ambassador data
  storeReferralData({
    code: referralCode,
    timestamp,
    source: 'ambassador',
    email: userData.email,
    name: userData.name,
  });
  
  return { referralCode, referralLink };
}

/**
 * Enhanced referral link generator for campus guides
 */
export function generateCampusGuideLink(userData: {
  email: string;
  name: string;
  whatsappNumber: string;
  university: string;
  yearOfStudy: string;
}): { referralCode: string; referralLink: string } {
  const timestamp = Date.now();
  const referralCode = generateReferralCode(userData.email, userData.name, timestamp, 'campus_guide');
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://your-domain.com';
  const referralLink = createReferralLink(baseUrl, referralCode);
  
  // Store additional campus guide data
  storeReferralData({
    code: referralCode,
    timestamp,
    source: 'campus_guide',
    email: userData.email,
    name: userData.name,
  });
  
  return { referralCode, referralLink };
}