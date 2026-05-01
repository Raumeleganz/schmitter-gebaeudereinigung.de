'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ServiceData {
  name: string;
  value: number;
}

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#6366f1'];

export default function ServicesChart() {
  const [data, setData] = useState<ServiceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch('/api/analytics/services');
      const result = await res.json();
      
      const chartData = result.services.slice(0, 6).map((service: any) => ({
        name: service.service,
        value: service.requests,
      }));

      setData(chartData);
    } catch (error) {
      console.error('Failed to fetch services data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <ChartSkeleton title="Beliebte Services" />;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-6">💼 Beliebte Services</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
        </PieChart>
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

