import React from 'react';
import TopChart from './TopChart';

export default function TopStocks() {
  const stockData = [
    {
      companyName: "BBPL",
      price: 54.32,
      prevPrice: 52.10, // Previous price
      priceChange: (54.32 - 52.10).toFixed(2), // Calculate price change
      chartData: [5, 10, 8, 12, 7, 10, 8, 13],
      isPositive: true,
    },
    {
      companyName: "BCCL",
      price: 13.43,
      prevPrice: 14.10, // Previous price
      priceChange: (13.43 - 14.10).toFixed(2), // Calculate price change
      chartData: [4, 8, 6, 9, 7, 10, 6, 8],
      isPositive: false,
    },
    {
      companyName: "BNBL",
      price: 73.18,
      prevPrice: 71.50, // Previous price
      priceChange: (73.18 - 71.50).toFixed(2), // Calculate price change
      chartData: [6, 9, 7, 10, 6, 11, 9, 12],
      isPositive: true,
    },
  ];

  // X-axis categories
  const xAxisLabels = [
    '01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', 
    '06 Feb', '07 Feb', '08 Feb'
  ];

  return (
    <div className="xl:container xl:mx-auto bg-red-500">
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Top Stocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stockData.map((stock, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md flex flex-col justify-between ${
                stock.isPositive ? "bg-green-custom" : "bg-red-custom"
              } text-white`}
            >
              {/* Header */}
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{stock.companyName}</h3>
                <p className="text-md">{stock.price.toFixed(2)}</p>
                <p className="text-sm">{stock.priceChange}</p>
              </div>

              {/* Chart */}
              
              <div className="w-full h-250 overflow-hidden mt-2 p-6">
              <TopChart
  title="Users this week"
  users="32.4k"
  percentage="12%"
  data={[6500, 6418, 6456, 6526, 6356, 6456]}
  categories={['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February']}
  buttonLabel="Last 7 days"
/>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
