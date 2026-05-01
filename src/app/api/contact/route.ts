/**
 * Contact Form API Route
 * Handles contact form submissions with validation, rate limiting, and email sending
 */

import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation/contact-schema';
import { checkRateLimit, getRateLimitInfo } from '@/lib/rate-limiter';
import { sendContactEmail } from '@/lib/email-service';
import { ContactApiResponse } from '@/types/contact';

// Configuration
const CONFIG = {
  RECIPIENT_EMAIL: process.env.CONTACT_EMAIL || 'info@datra-gebaeudereinigung.de',
  FROM_EMAIL: process.env.FROM_EMAIL || 'noreply@datra-gebaeudereinigung.de',
};

/**
 * POST /api/contact
 * Handle contact form submission
 */
export async function POST(request: NextRequest): Promise<NextResponse<ContactApiResponse>> {
  try {
    // Get client identifier (IP or fallback)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (checkRateLimit(ip)) {
      const info = getRateLimitInfo(ip);
      const resetMinutes = Math.ceil((info.resetAt - Date.now()) / 60000);
      
      return NextResponse.json(
        {
          success: false,
          message: `Zu viele Anfragen. Bitte versuchen Sie es in ${resetMinutes} Minuten erneut.`,
          rateLimited: true,
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((info.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Honeypot check (bot detection)
    if (body.honeypot && body.honeypot.length > 0) {
      // Silent fail for bots
      return NextResponse.json(
        {
          success: true,
          message: 'Anfrage erfolgreich gesendet.',
        },
        { status: 200 }
      );
    }

    // Validate input with Zod
    const validatedData = contactFormSchema.parse(body);

    // Send email
    const emailResult = await sendContactEmail({
      formData: validatedData,
      recipientEmail: CONFIG.RECIPIENT_EMAIL,
      fromEmail: CONFIG.FROM_EMAIL,
    });

    if (!emailResult.success) {
      console.error('Email send failed:', emailResult.error);
      
      return NextResponse.json(
        {
          success: false,
          message: 'Die Anfrage konnte nicht versendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns telefonisch.',
          error: process.env.NODE_ENV === 'development' ? emailResult.error : undefined,
        },
        { status: 500 }
      );
    }

    // Success response
    const info = getRateLimitInfo(ip);
    
    return NextResponse.json(
      {
        success: true,
        message: 'Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.',
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': String(info.remaining),
          'X-RateLimit-Reset': String(info.resetAt),
        },
      }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    // Validation error
    if (error && typeof error === 'object' && 'issues' in error) {
      const zodError = error as { issues: Array<{ message: string }> };
      const firstError = zodError.issues[0];
      return NextResponse.json(
        {
          success: false,
          message: firstError.message,
          error: process.env.NODE_ENV === 'development' 
            ? JSON.stringify(zodError.issues) 
            : undefined,
        },
        { status: 400 }
      );
    }

    // Generic error
    return NextResponse.json(
      {
        success: false,
        message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
        error: process.env.NODE_ENV === 'development' && error instanceof Error 
          ? error.message 
          : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/contact
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}

