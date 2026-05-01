'use client';

import { useEffect, useState } from 'react';

interface FunnelData {
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

export default function ConversionFunnel() {
  const [data, setData] = useState<FunnelData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/analytics/metrics');
      const result = await res.json();
      setData(result.funnel);
    } catch (error) {
      console.error('Failed to fetch funnel data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <ChartSkeleton />;
  }

  if (!data) return null;

  const steps = [
    { label: 'Seitenaufruf', value: data.pageViews, percentage: 100, color: 'bg-blue-500' },
    { label: 'Formular angezeigt', value: data.formViews, percentage: (data.formViews / data.pageViews) * 100, color: 'bg-blue-600' },
    { label: 'Formular gestartet', value: data.formStarts, percentage: (data.formStarts / data.pageViews) * 100, color: 'bg-blue-700' },
    { label: 'Formular abgesendet', value: data.formSubmits, percentage: (data.formSubmits / data.pageViews) * 100, color: 'bg-green-600' },
    { label: 'Erfolgreich', value: data.formSuccess, percentage: (data.formSuccess / data.pageViews) * 100, color: 'bg-green-700' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 Conversion Funnel (7 Tage)</h3>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.label} className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium">{step.label}</span>
                {index > 0 && (
                  <span className="ml-2 text-sm text-gray-500">
                    ({step.percentage.toFixed(1)}%)
                  </span>
                )}
              </div>
              <span className="font-bold text-gray-900">{step.value.toLocaleString('de-DE')}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full ${step.color} rounded-full transition-all duration-500`}
                style={{ width: `${step.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Conversion Raten:</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm text-gray-600">View → Start</p>
            <p className="text-lg font-bold text-blue-600">{data.rates.viewToStart.toFixed(1)}%</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-sm text-gray-600">Start → Submit</p>
            <p className="text-lg font-bold text-green-600">{data.rates.startToSubmit.toFixed(1)}%</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-sm text-gray-600">Submit → Success</p>
            <p className="text-lg font-bold text-purple-600">{data.rates.submitToSuccess.toFixed(1)}%</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-3">
            <p className="text-sm text-gray-600">Gesamt</p>
            <p className="text-lg font-bold text-orange-600">{data.rates.overall.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
      <div className="w-64 h-6 bg-gray-200 rounded mb-6"></div>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <div className="w-32 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

