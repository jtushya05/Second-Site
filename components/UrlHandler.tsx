'use client';

import { useEffect, useRef } from 'react';

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
    const expectedParams = ['src', 'ref', 'med'];
    const localStorageKey = 'urlParams';
    let paramsToStore = JSON.parse(localStorage.getItem(localStorageKey) || '{}');

    let hasExpectedParams = false;
    let miscParams: Record<string, string> = {};

    urlParams.forEach((value, key) => {
      if (expectedParams.includes(key)) {
        if (paramsToStore[key]) {
          paramsToStore[key] += `,${value}`;
        } else {
          paramsToStore[key] = value;
        }
        hasExpectedParams = true;
      } else {
        miscParams[key] = value;
      }
    });

    console.log('Params to store before update:', paramsToStore);
    console.log('Misc params:', miscParams);

    if (miscParams['clearStorage']) {
      localStorage.removeItem(localStorageKey);
      localStorage.removeItem('ref');
      console.log('Local storage cleared');
      return;
    }

    if (!hasExpectedParams && !paramsToStore['src']) {
      paramsToStore['src'] = 'direct';
    }

    // Ensure ref and referrer store the same value
    if (paramsToStore['ref']) {
      localStorage.setItem('ref', paramsToStore['ref']);
    } else if (paramsToStore['referrer']) {
      localStorage.setItem('ref', paramsToStore['referrer']);
    }

    localStorage.setItem(localStorageKey, JSON.stringify(paramsToStore));
    console.log('Updated local storage:', localStorage.getItem(localStorageKey));

    if (hasExpectedParams) {
      const formData = new URLSearchParams();
      formData.append('entry.65240077', paramsToStore['src'] || '');
      formData.append('entry.656520329', paramsToStore['ref'] || '');
      formData.append('entry.2069179441', paramsToStore['med'] || '');
      formData.append('entry.402453603', JSON.stringify(miscParams));

      const currentDate = new Date();
      formData.append('entry.584851820_year', currentDate.getFullYear().toString());
      formData.append('entry.584851820_month', (currentDate.getMonth() + 1).toString());
      formData.append('entry.584851820_day', currentDate.getDate().toString());

      console.log('Form data to submit:', formData.toString());

      fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSe62LkyGvo2YQibKfEdzPsE_4tRjysQEiJ322icEzY51xmWig/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
      .then(() => console.log('Form submitted successfully'))
      .catch((error) => console.error('Form submission error:', error));
    }
  }, []);

  return null; // UrlHandler does not render any UI.
}
