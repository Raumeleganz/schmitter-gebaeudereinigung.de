/**
 * Analytics Services API Endpoint
 * GET /api/analytics/services
 */

import { NextResponse } from 'next/server';
import { calculateTopServices } from '@/lib/analytics/aggregator';
import { getAnalyticsStore } from '@/lib/analytics/store';

export async function GET() {
  try {
    const store = getAnalyticsStore();
    
    // Get last 30 days
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30);
    
    const events = store.getEvents({
      startDate: startDate.toISOString(),
    });

    const topServices = calculateTopServices(events);

    return NextResponse.json({
      services: topServices,
      total: topServices.reduce((sum, s) => sum + s.requests, 0),
    });
  } catch (error) {
    console.error('Analytics services error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch service analytics' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';

