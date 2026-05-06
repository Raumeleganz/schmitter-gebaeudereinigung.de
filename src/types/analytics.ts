/**
 * Analytics Type Definitions
 * Professional Analytics System für Schmitter Gebäudereinigung
 */

export type AnalyticsEventType = 
  | 'page_view'
  | 'form_view'
  | 'form_start'
  | 'form_field_focus'
  | 'form_submit'
  | 'form_success'
  | 'form_error'
  | 'calculator_use'
  | 'service_click';

export interface AnalyticsEvent {
  id: string;
  type: AnalyticsEventType;
  timestamp: string;
  page: string;
  service?: string;
  city?: string;
  ip?: string;
  userAgent?: string;
  screenSize?: string;
  sessionId?: string;
  metadata?: Record<string, any>;
}

export interface DailyMetrics {
  date: string;
  totalRequests: number;
  successfulSubmissions: number;
  formStarts: number;
  formViews: number;
  conversionRate: number;
  topCities: CityMetric[];
  topServices: ServiceMetric[];
}

export interface CityMetric {
  city: string;
  count: number;
  conversionRate: number;
  trend: 'up' | 'down' | 'stable';
}

export interface ServiceMetric {
  service: string;
  views: number;
  requests: number;
  conversionRate: number;
}

export interface ConversionFunnel {
  pageViews: number;
  formViews: number;
  formStarts: number;
  formSubmits: number;
  formSuccess: number;
  rates: {
    viewToStart: number;
    startToSubmit: number;
    submitToSuccess: number;
    overall: number;
  };
}

export interface AnalyticsOverview {
  today: DailyMetrics;
  yesterday: DailyMetrics;
  last7Days: DailyMetrics[];
  last30Days: DailyMetrics[];
  conversionFunnel: ConversionFunnel;
  topPerformers: {
    cities: CityMetric[];
    services: ServiceMetric[];
  };
  trends: {
    requestsGrowth: number;
    conversionGrowth: number;
  };
}

export interface TimeSeriesData {
  date: string;
  value: number;
  label?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    fill?: boolean;
  }[];
}

