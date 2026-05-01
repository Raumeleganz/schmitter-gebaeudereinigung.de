'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface CityData {
  city: string;
  count: number;
}

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#6366f1', '#ef4444', '#14b8a6'];

export default function TopCitiesChart() {
  const [data, setData] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/analytics/cities');
      const result = await res.json();
      setData(result.cities.slice(0, 8));
    } catch (error) {
      console.error('Failed to fetch cities data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <ChartSkeleton title="Top 8 Städte" />;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🏙️ Top 8 Städte</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="city" 
            stroke="#666"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis stroke="#666" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number) => [`${value} Anfragen`, 'Anzahl']}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ChartSkeleton({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg animate-pulse">
      <div className="w-48 h-6 bg-gray-200 rounded mb-6"></div>
      <div className="w-full h-[300px] bg-gray-100 rounded"></div>
    </div>
  );
}

