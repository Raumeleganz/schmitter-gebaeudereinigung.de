/**
 * Analytics Data Aggregator
 * Professional Data Processing & Metrics Calculation
 */

import { 
  AnalyticsEvent, 
  DailyMetrics, 
  ConversionFunnel, 
  CityMetric, 
  ServiceMetric,
  AnalyticsOverview 
} from '@/types/analytics';
import { getAnalyticsStore } from './store';

/**
 * Calculate daily metrics for a specific date
 */
export function calculateDailyMetrics(date: string): DailyMetrics {
  const store = getAnalyticsStore();
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const events = store.getEvents({
    startDate: startOfDay.toISOString(),
    endDate: endOfDay.toISOString(),
  });

  const formViews = events.filter(e => e.type === 'form_view').length;
  const formStarts = events.filter(e => e.type === 'form_start').length;
  const formSubmits = events.filter(e => e.type === 'form_submit').length;
  const formSuccess = events.filter(e => e.type === 'form_success').length;

  const conversionRate = formViews > 0 ? (formSuccess / formViews) * 100 : 0;

  return {
    date,
    totalRequests: formSubmits,
    successfulSubmissions: formSuccess,
    formStarts,
    formViews,
    conversionRate: Math.round(conversionRate * 100) / 100,
    topCities: calculateTopCities(events),
    topServices: calculateTopServices(events),
  };
}

/**
 * Calculate conversion funnel
 */
export function calculateConversionFunnel(days: number = 7): ConversionFunnel {
  const store = getAnalyticsStore();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const events = store.getEvents({
    startDate: startDate.toISOString(),
  });

  const pageViews = events.filter(e => e.type === 'page_view').length;
  const formViews = events.filter(e => e.type === 'form_view').length;
  const formStarts = events.filter(e => e.type === 'form_start').length;
  const formSubmits = events.filter(e => e.type === 'form_submit').length;
  const formSuccess = events.filter(e => e.type === 'form_success').length;

  const viewToStart = formViews > 0 ? (formStarts / formViews) * 100 : 0;
  const startToSubmit = formStarts > 0 ? (formSubmits / formStarts) * 100 : 0;
  const submitToSuccess = formSubmits > 0 ? (formSuccess / formSubmits) * 100 : 0;
  const overall = formViews > 0 ? (formSuccess / formViews) * 100 : 0;

  return {
    pageViews,
    formViews,
    formStarts,
    formSubmits,
    formSuccess,
    rates: {
      viewToStart: Math.round(viewToStart * 100) / 100,
      startToSubmit: Math.round(startToSubmit * 100) / 100,
      submitToSuccess: Math.round(submitToSuccess * 100) / 100,
      overall: Math.round(overall * 100) / 100,
    },
  };
}

/**
 * Calculate top cities
 */
export function calculateTopCities(events: AnalyticsEvent[]): CityMetric[] {
  const cityMap = new Map<string, { count: number; submissions: number }>();

  events.forEach(event => {
    if (event.city) {
      const current = cityMap.get(event.city) || { count: 0, submissions: 0 };
      current.count++;
      if (event.type === 'form_success') {
        current.submissions++;
      }
      cityMap.set(event.city, current);
    }
  });

  const cities = Array.from(cityMap.entries())
    .map(([city, data]) => ({
      city,
      count: data.count,
      conversionRate: data.count > 0 ? (data.submissions / data.count) * 100 : 0,
      trend: 'stable' as const, // TODO: Calculate actual trend
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return cities;
}

/**
 * Calculate top services
 */
export function calculateTopServices(events: AnalyticsEvent[]): ServiceMetric[] {
  const serviceMap = new Map<string, { views: number; requests: number }>();

  events.forEach(event => {
    if (event.service) {
      const current = serviceMap.get(event.service) || { views: 0, requests: 0 };
      if (event.type === 'service_click' || event.type === 'page_view') {
        current.views++;
      }
      if (event.type === 'form_success') {
        current.requests++;
      }
      serviceMap.set(event.service, current);
    }
  });

  const services = Array.from(serviceMap.entries())
    .map(([service, data]) => ({
      service,
      views: data.views,
      requests: data.requests,
      conversionRate: data.views > 0 ? (data.requests / data.views) * 100 : 0,
    }))
    .sort((a, b) => b.requests - a.requests)
    .slice(0, 10);

  return services;
}

/**
 * Get complete analytics overview
 */
export function getAnalyticsOverview(): AnalyticsOverview {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  // Calculate last 7 and 30 days
  const last7Days: DailyMetrics[] = [];
  const last30Days: DailyMetrics[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    last7Days.push(calculateDailyMetrics(date.toISOString().split('T')[0]));
  }

  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    last30Days.push(calculateDailyMetrics(date.toISOString().split('T')[0]));
  }

  const todayMetrics = calculateDailyMetrics(today);
  const yesterdayMetrics = calculateDailyMetrics(yesterday);

  // Calculate trends
  const requestsGrowth = yesterdayMetrics.totalRequests > 0
    ? ((todayMetrics.totalRequests - yesterdayMetrics.totalRequests) / yesterdayMetrics.totalRequests) * 100
    : 0;

  const conversionGrowth = yesterdayMetrics.conversionRate > 0
    ? ((todayMetrics.conversionRate - yesterdayMetrics.conversionRate) / yesterdayMetrics.conversionRate) * 100
    : 0;

  return {
    today: todayMetrics,
    yesterday: yesterdayMetrics,
    last7Days: last7Days.reverse(),
    last30Days: last30Days.reverse(),
    conversionFunnel: calculateConversionFunnel(7),
    topPerformers: {
      cities: todayMetrics.topCities,
      services: todayMetrics.topServices,
    },
    trends: {
      requestsGrowth: Math.round(requestsGrowth * 100) / 100,
      conversionGrowth: Math.round(conversionGrowth * 100) / 100,
    },
  };
}

/**
 * Calculate growth percentage
 */
export function calculateGrowth(current: number, previous: number): number {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Math.round(((current - previous) / previous) * 100 * 100) / 100;
}

