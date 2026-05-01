'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Metrics {
  today: number;
  conversionRate: number;
  avgResponse: number;
  topCity: string;
}

export default function MetricsOverview() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
    // Refresh every 30 seconds
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  async function fetchMetrics() {
    try {
      const res = await fetch('/api/analytics/metrics');
      const data = await res.json();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <MetricsSkeleton />;
  }

  const cards = [
    {
      title: 'Anfragen heute',
      value: metrics?.today || 0,
      change: '+12%',
      icon: '📩',
      color: 'blue',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: `${metrics?.conversionRate?.toFixed(1) || 0}%`,
      change: '+3.2%',
      icon: '📈',
      color: 'green',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Durchschn. Response',
      value: `${metrics?.avgResponse || 0}h`,
      change: '-15%',
      icon: '⚡',
      color: 'purple',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Top Stadt',
      value: metrics?.topCity || 'N/A',
      change: '45 Anfragen',
      icon: '🏙️',
      color: 'orange',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`text-3xl p-2 rounded-lg ${card.bgColor}`}>{card.icon}</span>
            <span className={`text-sm font-semibold px-2 py-1 rounded ${card.bgColor} ${card.textColor}`}>
              {card.change}
            </span>
          </div>
          <h3 className="text-gray-600 text-sm mb-1 font-medium">{card.title}</h3>
          <p className="text-3xl font-bold text-gray-900">{card.value}</p>
        </motion.div>
      ))}
    </div>
  );
}

function MetricsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-16 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-32 h-8 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

