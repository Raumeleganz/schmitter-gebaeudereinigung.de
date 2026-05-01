/**
 * Analytics Tracking API Endpoint
 * POST /api/analytics/track
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAnalyticsStore } from '@/lib/analytics/store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { events } = body;

    if (!events || !Array.isArray(events)) {
      return NextResponse.json(
        { error: 'Invalid request: events array required' },
        { status: 400 }
      );
    }

    const store = getAnalyticsStore();
    const savedEvents = [];

    // Get client IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Save each event
    for (const event of events) {
      const saved = await store.addEvent({
        ...event,
        ip,
        userAgent: request.headers.get('user-agent') || undefined,
      });
      savedEvents.push(saved);
    }

    return NextResponse.json({
      success: true,
      count: savedEvents.length,
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track events' },
      { status: 500 }
    );
  }
}

