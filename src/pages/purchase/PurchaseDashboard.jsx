import ChartContainer from '/src/components/ui/chart'; // Import the reusable chart component

const BankList = () => {
  const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 100, mobile: 95 },
    { month: 'March', desktop: 150, mobile: 120 },
    { month: 'April', desktop: 175, mobile: 110 },
  ];

  return (
    <div className="flex w-5/12 h-auto  shadow-md bg-white">
      <div className="flex w-full h-auto;">
        <ChartContainer data={chartData} type="bar" /> {/* You can specify the chart type */}
      </div>
    </div>
  );
};



const PurchaseDashboard = () => {
  return (
    <div>
      <BankList />
    </div>
      
    
  );
};




export default PurchaseDashboard;
