/**
 * Rate Limiter
 * In-memory rate limiting for contact form submissions
 * Prevents spam and abuse
 */

import { RateLimitEntry } from '@/types/contact';

// In-memory store for rate limiting
// In production, use Redis or similar
const rateLimitStore = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT = {
  MAX_REQUESTS: 3, // Max requests per window
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  CLEANUP_INTERVAL_MS: 60 * 60 * 1000, // 1 hour
};

/**
 * Check if request is rate limited
 * @param identifier - IP address or other unique identifier
 * @returns true if rate limited, false otherwise
 */
export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // No entry exists, create one
  if (!entry) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    });
    return false;
  }

  // Entry expired, reset
  if (now > entry.resetAt) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    });
    return false;
  }

  // Within window, check count
  if (entry.count >= RATE_LIMIT.MAX_REQUESTS) {
    return true; // Rate limited
  }

  // Increment count
  entry.count++;
  rateLimitStore.set(identifier, entry);
  return false;
}

/**
 * Get rate limit info
 */
export function getRateLimitInfo(identifier: string): {
  remaining: number;
  resetAt: number;
} {
  const entry = rateLimitStore.get(identifier);
  const now = Date.now();

  if (!entry || now > entry.resetAt) {
    return {
      remaining: RATE_LIMIT.MAX_REQUESTS,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    };
  }

  return {
    remaining: Math.max(0, RATE_LIMIT.MAX_REQUESTS - entry.count),
    resetAt: entry.resetAt,
  };
}

/**
 * Clean up expired entries (run periodically)
 */
export function cleanupRateLimitStore(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(key);
    }
  }
}

// Auto-cleanup every hour
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimitStore, RATE_LIMIT.CLEANUP_INTERVAL_MS);
}

