import { NextRequest, NextResponse } from 'next/server';
import { trackReferralUsageDB } from '@/lib/database';

export async function POST(req: NextRequest) {
  try {
    const { referralCode, action, userAgent, ip } = await req.json();

    if (!referralCode) {
      return NextResponse.json({ error: 'Referral code is required' }, { status: 400 });
    }

    // Get client IP address
    const clientIp = ip || req.ip || req.headers.get('x-forwarded-for') || 'unknown';
    const refererUrl = req.headers.get('referer') || '';
    
    // Parse UTM parameters from referer
    let utmSource, utmMedium, utmCampaign;
    try {
      const urlObj = new URL(refererUrl);
      utmSource = urlObj.searchParams.get('utm_source') || urlObj.searchParams.get('src');
      utmMedium = urlObj.searchParams.get('utm_medium') || urlObj.searchParams.get('med');
      utmCampaign = urlObj.searchParams.get('utm_campaign') || urlObj.searchParams.get('campaign');
    } catch (e) {
      // Invalid URL, skip UTM parsing
    }

    // Save to database
    const dbResult = await trackReferralUsageDB({
      referral_code: referralCode,
      action: action || 'link_click',
      user_agent: userAgent || req.headers.get('user-agent'),
      ip_address: clientIp,
      url: refererUrl,
      utm_source: utmSource || undefined,
      utm_medium: utmMedium || undefined,
      utm_campaign: utmCampaign || undefined,
      misc_params: {
        timestamp: new Date().toISOString(),
        headers: Object.fromEntries(req.headers.entries()),
      }
    });

    // Basic tracking data for Google Form (existing functionality)
    const trackingData = {
      'entry.65240077': 'referral_tracking',
      'entry.656520329': referralCode,
      'entry.2069179441': action || 'link_click',
      'entry.402453603': JSON.stringify({
        userAgent: userAgent || req.headers.get('user-agent'),
        ip: clientIp,
        timestamp: new Date().toISOString(),
        referer: refererUrl,
        action: action,
        utmSource,
        utmMedium,
        utmCampaign,
      })
    };

    const currentDate = new Date();
    // Add timestamp entries if the form supports them
    Object.assign(trackingData, {
      'entry.584851820_year': currentDate.getFullYear().toString(),
      'entry.584851820_month': (currentDate.getMonth() + 1).toString(),
      'entry.584851820_day': currentDate.getDate().toString(),
    });

    // Submit tracking data to Google Form (same form as UrlHandler uses)
    await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSe62LkyGvo2YQibKfEdzPsE_4tRjysQEiJ322icEzY51xmWig/formResponse', {
      method: 'POST',
      body: new URLSearchParams(trackingData),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Tracking data recorded',
      dbResult: dbResult ? 'saved' : 'skipped'
    });
  } catch (error) {
    console.error('Error tracking referral:', error);
    return NextResponse.json({ error: 'Failed to track referral' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Basic referral analytics endpoint
  // In a real implementation, you'd query your database or Google Sheets API
  // For now, return a simple response
  
  const { searchParams } = new URL(req.url);
  const referralCode = searchParams.get('code');

  if (referralCode) {
    // Return basic info about a specific referral code
    return NextResponse.json({
      referralCode,
      message: 'To get detailed analytics, integrate with Google Sheets API or add a database',
      suggestion: 'Consider using Google Sheets API to query your form responses for real analytics'
    });
  }

  return NextResponse.json({
    message: 'Referral tracking endpoint',
    usage: {
      post: 'Submit tracking data with { referralCode, action, userAgent, ip }',
      get: 'Get analytics with ?code=REFERRAL_CODE parameter'
    }
  });
}
