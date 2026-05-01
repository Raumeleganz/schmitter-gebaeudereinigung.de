/**
 * Analytics Overview API Endpoint
 * GET /api/analytics/overview
 */

import { NextResponse } from 'next/server';
import { getAnalyticsOverview } from '@/lib/analytics/aggregator';

export async function GET() {
  try {
    const overview = getAnalyticsOverview();

    return NextResponse.json(overview);
  } catch (error) {
    console.error('Analytics overview error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics overview' },
      { status: 500 }
    );
  }
}

// Enable dynamic rendering
export const dynamic = 'force-dynamic';

