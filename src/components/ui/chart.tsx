// src/components/ui/chart.tsx
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: { month: string, desktop: number, mobile: number }[];
  type?: 'bar' | 'line';  // You can pass the chart type as a prop (bar or line)
}

const ChartContainer: React.FC<ChartProps> = ({ data, type = 'bar' }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        {type === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="desktop" fill="#8884d8" />
            <Bar dataKey="mobile" fill="#82ca9d" />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="desktop" stroke="#8884d8" />
            <Line type="monotone" dataKey="mobile" stroke="#82ca9d" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartContainer;
