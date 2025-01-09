import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const Home = () => {
  // Line chart data
  const lineChartData = [
    { name: 'January', sales: 65 },
    { name: 'February', sales: 59 },
    { name: 'March', sales: 80 },
    { name: 'April', sales: 81 },
    { name: 'May', sales: 56 },
    { name: 'June', sales: 55 },
    { name: 'July', sales: 40 },
  ];

  // Pie chart data
  const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Pie chart label rendering
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      {/* Main layout container */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg bg-white shadow-md p-4 flex flex-col justify-center items-center text-[#64748b]">
          <div className="stat-title text-center text-[#64748b]">Purchases</div>
          <div className="stat-value text-center text-[#64748b]">31K</div>
          <div className="stat-desc text-center text-[#64748b]">Jan 1st - Feb 1st</div>
        </div>

        <div className="h-32 rounded-lg bg-white shadow-md p-4 flex flex-col justify-center items-center text-[#64748b]">
          <div className="stat-title text-center text-[#64748b]">Deliveries</div>
          <div className="stat-value text-center text-[#64748b]">4,200</div>
          <div className="stat-desc text-center text-[#64748b]">↗︎ 400 (22%)</div>
        </div>

        <div className="h-32 rounded-lg bg-white shadow-md p-4 flex flex-col justify-center items-center text-[#64748b]">
          <div className="stat-title text-center text-[#64748b]">Pendings</div>
          <div className="stat-value text-center text-[#64748b]">1,200</div>
          <div className="stat-desc text-center text-[#64748b]">↘︎ 90 (14%)</div>
        </div>
        
        <div className="h-32 rounded-lg bg-white shadow-md p-4 flex flex-col justify-center items-center text-[#64748b]">
          <div className="stat-title text-center text-[#64748b]">Total Sales</div>
          <div className="stat-value text-center text-[#64748b]">89,400</div>
          <div className="stat-desc text-center text-[#64748b]">21% more than last month</div>
        </div>

      </div>

      {/* Chart containers */}
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {/* Line Chart container */}
        <div className="rounded-lg bg-white shadow-md lg:col-span-2 p-4 w-full h-auto">
          <div className="w-full" style={{ height: '450px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart container */}
        <div className="rounded-lg bg-white shadow-md p-4 w-full h-auto">
          <div className="w-full" style={{ height: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
