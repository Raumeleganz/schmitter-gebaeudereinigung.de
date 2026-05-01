/**
 * Analytics Client-Side Tracker
 * Professional Event Tracking System
 */

'use client';

import { AnalyticsEventType } from '@/types/analytics';

interface TrackEventOptions {
  type: AnalyticsEventType;
  page?: string;
  service?: string;
  city?: string;
  metadata?: Record<string, any>;
}

class AnalyticsTracker {
  private sessionId: string;
  private queue: TrackEventOptions[] = [];
  private sending = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeTracking();
  }

  /**
   * Track an analytics event
   */
  async track(options: TrackEventOptions): Promise<void> {
    const event: TrackEventOptions = {
      ...options,
      page: options.page || this.getCurrentPage(),
      metadata: {
        ...options.metadata,
        sessionId: this.sessionId,
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer,
        language: navigator.language,
      },
    };

    // Add to queue
    this.queue.push(event);

    // Send immediately if not already sending
    if (!this.sending) {
      await this.flush();
    }
  }

  /**
   * Track page view
   */
  trackPageView(page?: string): void {
    this.track({
      type: 'page_view',
      page: page || this.getCurrentPage(),
    });
  }

  /**
   * Track form interaction
   */
  trackFormView(): void {
    this.track({ type: 'form_view' });
  }

  trackFormStart(): void {
    this.track({ type: 'form_start' });
  }

  trackFormSubmit(): void {
    this.track({ type: 'form_submit' });
  }

  trackFormSuccess(): void {
    this.track({ type: 'form_success' });
  }

  trackFormError(error: string): void {
    this.track({
      type: 'form_error',
      metadata: { error },
    });
  }

  /**
   * Track service interaction
   */
  trackServiceClick(service: string): void {
    this.track({
      type: 'service_click',
      service,
    });
  }

  /**
   * Track calculator usage
   */
  trackCalculatorUse(data: Record<string, any>): void {
    this.track({
      type: 'calculator_use',
      metadata: data,
    });
  }

  /**
   * Flush queue to server
   */
  private async flush(): Promise<void> {
    if (this.queue.length === 0 || this.sending) return;

    this.sending = true;
    const eventsToSend = [...this.queue];
    this.queue = [];

    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: eventsToSend }),
        // Use keepalive for unload events
        keepalive: true,
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
      // Re-add to queue on failure
      this.queue.unshift(...eventsToSend);
    } finally {
      this.sending = false;
    }
  }

  /**
   * Initialize tracking
   */
  private initializeTracking(): void {
    // Track page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        this.flush();
      });

      // Track visibility changes
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          this.flush();
        }
      });

      // Periodic flush
      setInterval(() => {
        this.flush();
      }, 10000); // Every 10 seconds
    }
  }

  /**
   * Get current page
   */
  private getCurrentPage(): string {
    return typeof window !== 'undefined' ? window.location.pathname : '/';
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    const stored = sessionStorage.getItem('analytics_session');
    if (stored) return stored;

    const newId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session', newId);
    return newId;
  }
}

// Singleton instance
let trackerInstance: AnalyticsTracker | null = null;

export function getTracker(): AnalyticsTracker {
  if (typeof window === 'undefined') {
    // Server-side: return dummy tracker
    return {
      track: async () => {},
      trackPageView: () => {},
      trackFormView: () => {},
      trackFormStart: () => {},
      trackFormSubmit: () => {},
      trackFormSuccess: () => {},
      trackFormError: () => {},
      trackServiceClick: () => {},
      trackCalculatorUse: () => {},
    } as AnalyticsTracker;
  }

  if (!trackerInstance) {
    trackerInstance = new AnalyticsTracker();
  }
  return trackerInstance;
}

export { AnalyticsTracker };

