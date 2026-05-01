/**
 * Analytics Metrics API Endpoint
 * GET /api/analytics/metrics
 */

import { NextResponse } from 'next/server';
import { calculateDailyMetrics, calculateConversionFunnel } from '@/lib/analytics/aggregator';

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0];
    const todayMetrics = calculateDailyMetrics(today);
    const funnel = calculateConversionFunnel(7);

    return NextResponse.json({
      today: todayMetrics.totalRequests,
      conversionRate: todayMetrics.conversionRate,
      avgResponse: 0, // TODO: Implement response time tracking
      topCity: todayMetrics.topCities[0]?.city || 'N/A',
      funnel,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Analytics metrics error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';

