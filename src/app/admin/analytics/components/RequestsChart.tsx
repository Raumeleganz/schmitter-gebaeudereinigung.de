'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ChartData {
  date: string;
  anfragen: number;
}

export default function RequestsChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/analytics/overview');
      const overview = await res.json();
      
      const chartData = overview.last7Days.map((day: any) => ({
        date: new Date(day.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
        anfragen: day.totalRequests,
      }));

      setData(chartData);
    } catch (error) {
      console.error('Failed to fetch chart data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <ChartSkeleton title="Anfragen der letzten 7 Tage" />;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📈 Anfragen der letzten 7 Tage</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="anfragen" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 5 }}
            activeDot={{ r: 8 }}
            name="Anfragen"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function ChartSkeleton({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
      <div className="w-64 h-6 bg-gray-200 rounded mb-6"></div>
      <div className="w-full h-[300px] bg-gray-100 rounded"></div>
    </div>
  );
}

