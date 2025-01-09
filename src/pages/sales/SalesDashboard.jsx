// src/pages/BankList.tsx
import React from 'react';
import ChartContainer from '/src/components/ui/chart'; // Import the reusable chart component



const BankList = () => {
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 100, mobile: 95 },
    { month: 'March', desktop: 150, mobile: 120 },
    { month: 'April', desktop: 175, mobile: 110 },
  ];

  return (
    <div>
      <h1>Sales Dashboard</h1>
      <ChartContainer data={chartData} type="bar" /> {/* You can specify the chart type */}
    </div>
  );
};

export default BankList;


