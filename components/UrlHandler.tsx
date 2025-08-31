'use client';

import { useEffect, useRef } from 'react';
import { trackReferralUsage, storeReferralData } from '@/lib/referral-utils';

export default function UrlHandler() {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log('UrlHandler already mounted, skipping execution');
      return;
    }
    isMounted.current = true;

    console.log('UrlHandler mounted');
    const urlParams = new URLSearchParams(window.location.search);
    const expectedParams = ['src', 'ref', 'med', 'referrer', 'campaign'];
    const localStorageKey = 'urlParams';
    let paramsToStore = JSON.parse(localStorage.getItem(localStorageKey) || '{}');

    let hasExpectedParams = false;
    let miscParams: Record<string, string> = {};

    // Process all URL parameters with improved accumulation
    urlParams.forEach((value, key) => {
      if (expectedParams.includes(key)) {
        // Improved accumulation: avoid duplicates and use comma separation
        if (paramsToStore[key]) {
          const existingValues = paramsToStore[key].split(',');
          if (!existingValues.includes(value)) {
            paramsToStore[key] += `,${value}`;
          }
        } else {
          paramsToStore[key] = value;
        }
        hasExpectedParams = true;
      } else {
        // Accumulate misc params as well
        if (miscParams[key]) {
          const existingValues = miscParams[key].split(',');
          if (!existingValues.includes(value)) {
            miscParams[key] += `,${value}`;
          }
        } else {
          miscParams[key] = value;
        }
      }
    });

    console.log('Params to store before update:', paramsToStore);
    console.log('Misc params:', miscParams);

    // Handle storage clearing
    if (miscParams['clearStorage']) {
      localStorage.removeItem(localStorageKey);
      localStorage.removeItem('ref');
      localStorage.removeItem('referralCode');
      localStorage.removeItem('referralData');
      console.log('Local storage cleared');
      return;
    }

    // Set default source if no expected params
    if (!hasExpectedParams && !paramsToStore['src']) {
      paramsToStore['src'] = 'direct';
    }

    // Enhanced referral tracking: Handle both new and legacy systems
    const urlRef = urlParams.get('ref');
    const urlReferrer = urlParams.get('referrer');
    const referralCode = urlRef || urlReferrer;
    
    if (referralCode) {
      // Store in multiple formats for compatibility
      localStorage.setItem('ref', referralCode);
      localStorage.setItem('referralCode', referralCode);
      paramsToStore['ref'] = referralCode;
      hasExpectedParams = true;
      
      // Store structured referral data for new system
      storeReferralData({
        code: referralCode,
        timestamp: Date.now(),
        source: 'general', // Will be updated if it's from ambassador/campus guide
      });
      
      // Track the referral usage asynchronously
      trackReferralUsage(referralCode, 'page_visit').catch(console.warn);
      
      console.log('Referral code stored:', referralCode);
    }

    // Store all URL parameters
    localStorage.setItem(localStorageKey, JSON.stringify(paramsToStore));
    console.log('Updated local storage:', localStorage.getItem(localStorageKey));

    // Submit to tracking form if we have expected parameters
    if (hasExpectedParams) {
      const formData = new URLSearchParams();
      
      // Map to existing Google Form fields
      formData.append('entry.65240077', paramsToStore['src'] || 'direct'); // Source
      formData.append('entry.656520329', paramsToStore['ref'] || ''); // Referral Code
      formData.append('entry.2069179441', paramsToStore['med'] || ''); // Medium
      // Enhanced miscellaneous data with full localStorage context
      formData.append('entry.402453603', JSON.stringify({
        ...miscParams,
        campaign: paramsToStore['campaign'] || '',
        allStoredParams: paramsToStore, // Include all accumulated localStorage params
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        sessionId: sessionStorage.getItem('sessionId') || `session_${Date.now()}`,
        pageLoadCount: (parseInt(sessionStorage.getItem('pageLoadCount') || '0') + 1).toString(),
      })); // Miscellaneous data

      // Add current date
      const currentDate = new Date();
      formData.append('entry.584851820_year', currentDate.getFullYear().toString());
      formData.append('entry.584851820_month', (currentDate.getMonth() + 1).toString());
      formData.append('entry.584851820_day', currentDate.getDate().toString());

      console.log('Form data to submit:', formData.toString());

      // Update session tracking
      if (!sessionStorage.getItem('sessionId')) {
        sessionStorage.setItem('sessionId', `session_${Date.now()}`);
      }
      sessionStorage.setItem('pageLoadCount', (parseInt(sessionStorage.getItem('pageLoadCount') || '0') + 1).toString());

      // Submit to existing tracking form
      fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSe62LkyGvo2YQibKfEdzPsE_4tRjysQEiJ322icEzY51xmWig/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
      .then(() => console.log('Tracking form submitted successfully'))
      .catch((error) => console.error('Tracking form submission error:', error));
    }
  }, []);

  return null; // UrlHandler does not render any UI.
}
