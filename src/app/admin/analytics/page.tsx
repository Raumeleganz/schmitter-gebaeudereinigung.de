/**
 * Admin Analytics Dashboard
 * Professional Analytics System für Schmitter Gebäudereinigung
 */

import { Metadata } from 'next';
import { Suspense } from 'react';
import MetricsOverview from './components/MetricsOverview';
import RequestsChart from './components/RequestsChart';
import TopCitiesChart from './components/TopCitiesChart';
import ServicesChart from './components/ServicesChart';
import ConversionFunnel from './components/ConversionFunnel';

export const metadata: Metadata = {
  title: 'Analytics Dashboard | Schmitter Admin',
  description: 'Echtzeit-Einblicke in Ihre Geschäftsdaten',
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                📊 Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Echtzeit-Einblicke in Ihre Geschäftsdaten und Performance
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Letzte Aktualisierung: {new Date().toLocaleString('de-DE')}
            </div>
          </div>
        </header>

        {/* Metrics Overview */}
        <section className="mb-8">
          <Suspense fallback={<MetricsSkeleton />}>
            <MetricsOverview />
          </Suspense>
        </section>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Suspense fallback={<ChartSkeleton />}>
            <RequestsChart />
          </Suspense>

          <Suspense fallback={<ChartSkeleton />}>
            <TopCitiesChart />
          </Suspense>

          <Suspense fallback={<ChartSkeleton />}>
            <ServicesChart />
          </Suspense>

          <Suspense fallback={<ChartSkeleton />}>
            <ConversionFunnel />
          </Suspense>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">💡 Analytics-System Information</h3>
              <div className="text-blue-800 text-sm space-y-1">
                <p>✅ Tracking läuft automatisch auf allen Seiten</p>
                <p>✅ Daten werden alle 5 Minuten persistent gespeichert</p>
                <p>✅ Dashboard aktualisiert sich automatisch alle 30 Sekunden</p>
                <p>✅ Conversion Funnel zeigt die letzten 7 Tage an</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
          <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
          <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-32 h-8 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
      <div className="w-64 h-6 bg-gray-200 rounded mb-6"></div>
      <div className="w-full h-[300px] bg-gray-100 rounded"></div>
    </div>
  );
}

