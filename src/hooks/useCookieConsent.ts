"use client";

import { useState, useEffect } from 'react';

export type CookieCategory = 'necessary' | 'functional' | 'analytics' | 'marketing';

export interface CookieConsent {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_EXPIRY_DAYS = 365;

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const savedConsent = loadConsent();
    
    if (savedConsent && !isConsentExpired(savedConsent)) {
      setConsent(savedConsent);
      setShowBanner(false);
      applyConsent(savedConsent);
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: Omit<CookieConsent, 'timestamp'>) => {
    const consentWithTimestamp: CookieConsent = {
      ...newConsent,
      necessary: true, // Always true
      timestamp: Date.now(),
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    setConsent(consentWithTimestamp);
    setShowBanner(false);
    applyConsent(consentWithTimestamp);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  };

  const updateConsent = (category: CookieCategory, value: boolean) => {
    if (category === 'necessary') return; // Can't disable necessary cookies

    const newConsent = {
      ...consent,
      [category]: value,
    } as Omit<CookieConsent, 'timestamp'>;

    saveConsent(newConsent);
  };

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
    // Remove all tracking scripts
    removeTrackingScripts();
  };

  return {
    consent,
    showBanner,
    acceptAll,
    acceptNecessary,
    updateConsent,
    resetConsent,
    setShowBanner,
  };
}

function loadConsent(): CookieConsent | null {
  try {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) return null;
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

function isConsentExpired(consent: CookieConsent): boolean {
  const expiryTime = consent.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
  return Date.now() > expiryTime;
}

function applyConsent(consent: CookieConsent) {
  // Apply analytics consent
  if (consent.analytics) {
    loadAnalyticsScripts();
  } else {
    removeAnalyticsScripts();
  }

  // Apply marketing consent
  if (consent.marketing) {
    loadMarketingScripts();
  } else {
    removeMarketingScripts();
  }

  // Apply functional consent
  if (consent.functional) {
    enableFunctionalFeatures();
  }
}

function loadAnalyticsScripts() {
  // Example: Load Google Analytics
  if (typeof window !== 'undefined' && !document.getElementById('ga-script')) {
    // Uncomment and add your GA ID when ready:
    /*
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.id = 'ga-config';
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `;
    document.head.appendChild(script2);
    */
  }
}

function removeAnalyticsScripts() {
  const gaScript = document.getElementById('ga-script');
  const gaConfig = document.getElementById('ga-config');
  if (gaScript) gaScript.remove();
  if (gaConfig) gaConfig.remove();
  
  // Clear GA cookies
  document.cookie.split(";").forEach((c) => {
    if (c.trim().startsWith('_ga')) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    }
  });
}

function loadMarketingScripts() {
  // Example: Load Facebook Pixel, Google Ads, etc.
  // Add your marketing scripts here when ready
}

function removeMarketingScripts() {
  // Remove marketing scripts and cookies
}

function enableFunctionalFeatures() {
  // Enable functional features like language preferences, etc.
}

function removeTrackingScripts() {
  removeAnalyticsScripts();
  removeMarketingScripts();
}

