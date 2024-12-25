import React from 'react';
import TopChart from './TopChart';
import { motion } from "motion/react"
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
      companyName: "RICB",
      price: 13.43,
      prevPrice: 14.10,
      priceChange: (13.43 - 14.10).toFixed(2),
      chartData: [4, 8, 6, 9, 7, 10, 6, 8],
    },
    {
      companyName: "SVL",
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
    {
      companyName: "DFAL",
      price: 73.18,
      prevPrice: 71.50,
      priceChange: (73.18 - 71.50).toFixed(2),
      chartData: [6, 9, 7, 10, 6, 11, 9, 12],
    },
    {
      companyName: "KCL",
      price: 73.18,
      prevPrice: 71.50,
      priceChange: (73.18 - 71.50).toFixed(2),
      chartData: [6, 9, 7, 10, 6, 11, 9, 12],
    },
    {
      companyName: "BDBL",
      price: 13.43,
      prevPrice: 14.10,
      priceChange: (13.43 - 14.10).toFixed(2),
      chartData: [4, 8, 6, 9, 7, 10, 6, 8],
    },
  ];

  const formattedStockData = stockData.map((stock) => ({
    ...stock,
    isPositive: stock.price > stock.prevPrice,
  }));

  const gainers = formattedStockData.filter((stock) => stock.isPositive);
  const losers = formattedStockData.filter((stock) => !stock.isPositive);

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

        <div className="flex flex-col md:flex-row gap-6">
          {/* Top Gainers */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-green-600 mb-4">Top Gainers</h3>
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
              {gainers.map((stock, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md bg-green-custom text-white"
                >
                  <h3 className="text-lg font-semibold">{stock.companyName}</h3>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-md">Price: {stock.price.toFixed(2)}</p>
                    <p className="text-sm text-white">
                      {stock.priceChange} ↑
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

          {/* Top Losers */}
          <div className="flex-1">

            <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}  > <h3 className="text-xl font-bold text-red-600 mb-4">Top Losers</h3> </motion.button> 
            <div className="grid grid-rows-2 grid-cols-2 gap-4">
              {losers.map((stock, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md bg-red-custom text-white"
                >
                  <h3 className="text-lg font-semibold">{stock.companyName}</h3>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-md">Price: {stock.price.toFixed(2)}</p>
                    <p className="text-sm text-white">
                      {stock.priceChange} ↓
                    </p>
                  </div>
                  <div className="mt-4">
                  <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log('hover started!')}

                  
                ></motion.button>
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
      </div>
    </div>
  );
}
