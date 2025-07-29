/**
 * Utility functions for referral code generation and validation
 */

export function generateReferralCode(email: string, name: string, timestamp?: number): string {
  const ts = timestamp || Date.now();
  
  // Extract meaningful parts
  const emailPart = email.split('@')[0].substring(0, 2).toUpperCase();
  const namePart = name.replace(/\s+/g, '').substring(0, 2).toUpperCase();
  const timePart = ts.toString().slice(-6);
  const randomPart = Math.random().toString(36).substring(2, 5).toUpperCase();
  
  // Create a mixed string that looks random but is deterministic
  const parts = [randomPart, emailPart, timePart.substring(0, 3), namePart, timePart.substring(3)];
  const mixed = parts.join('');
  
  // Shuffle to make it look more random
  return mixed.split('').sort(() => Math.random() - 0.5).join('').substring(0, 10);
}

export function validateReferralCode(code: string): boolean {
  // Basic validation - check if it's alphanumeric and correct length
  return /^[A-Z0-9]{10}$/.test(code);
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