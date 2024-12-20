import React from 'react';
import TopChart from './TopChart';

export default function TopStocks() {
  const stockData = [
    {
      companyName: "BBPL",
      price: 54.32,
      prevPrice: 52.10,
      priceChange: (54.32 - 52.10).toFixed(2),
      chartData: [5, 10, 8, 12, 7, 10, 8, 13],
    },
    {
      companyName: "BCCL",
      price: 13.43,
      prevPrice: 14.10,
      priceChange: (13.43 - 14.10).toFixed(2),
      chartData: [4, 8, 6, 9, 7, 10, 6, 8],
    },
    {
      companyName: "BNBL",
      price: 73.18,
      prevPrice: 71.50,
      priceChange: (73.18 - 71.50).toFixed(2),
      chartData: [6, 9, 7, 10, 6, 11, 9, 12],
    },
  ];

  // Add `isPositive` dynamically based on price change
  const formattedStockData = stockData.map((stock) => ({
    ...stock,
    isPositive: stock.price > stock.prevPrice,
  }));

  const xAxisLabels = [
    "01 Feb",
    "02 Feb",
    "03 Feb",
    "04 Feb",
    "05 Feb",
    "06 Feb",
    "07 Feb",
    "08 Feb",
  ];

  return (
    <div className="xl:container xl:mx-auto ">
      <div className="p-6">
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-700">Top Stocks</h2>
        <a
          href="/news"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          All Stocks
        </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formattedStockData.map((stock, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md ${
                stock.isPositive ? "bg-green-custom" : "bg-red-custom"
              } text-white`}
            >
              <h3 className="text-lg font-semibold">{stock.companyName}</h3>
              <div className="flex flex-row items-center justify-between">
              <p className="text-md">Price: {stock.price.toFixed(2)}</p>
              <p
                className={`text-sm text-white`}
              >
              {stock.priceChange}  {stock.isPositive ? "↑" : "↓"} 
              </p>
              </div>
             
              <div className="mt-4">
                <TopChart
                  title={stock.companyName}
                  users={`${stock.price.toFixed(2)} BTN`}
                  percentage={`${stock.priceChange} (${(
                    (stock.priceChange / stock.prevPrice) *
                    100
                  ).toFixed(2)}%)`}
                  data={stock.chartData}
                  categories={xAxisLabels}
                  buttonLabel="Last 7 Days"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
