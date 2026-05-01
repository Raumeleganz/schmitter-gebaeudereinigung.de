/**
 * Analytics Cities API Endpoint
 * GET /api/analytics/cities
 */

import { NextResponse } from 'next/server';
import { calculateTopCities } from '@/lib/analytics/aggregator';
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

    const topCities = calculateTopCities(events);

    return NextResponse.json({
      cities: topCities,
      total: topCities.reduce((sum, c) => sum + c.count, 0),
    });
  } catch (error) {
    console.error('Analytics cities error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch city analytics' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';

