/**
 * Contact Form Types
 * Type definitions for the contact form system
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string; // Bot detection field
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  error?: string;
  rateLimited?: boolean;
}

export interface RateLimitEntry {
  count: number;
  resetAt: number;
}

