import React from 'react'
import CryptoChart from './CryptoChart'
export default function TopStocks() {
  return (
    <div className="xl:container xl:mx-auto bg-red-500">
      <h1 className='bg-green-500'>Top Stocks</h1>
      <div className='flex flex-col md:flex-row xl:flex-row gap-4 '>
        <div className="border">        <CryptoChart
            title="Bitcoin"
            currentPrice="$24,000"
            priceChange="+2.5%"
            marketCap="$450B"
            volume="$12B"
            timeRanges={["1D", "1W", "1M", "1Y"]}
            selectedTimeRange="1D"
            onTimeRangeChange={(range) => console.log("Selected range:", range)}
            chartData={{
              colors: ["#1E90FF"],
              series: [{ name: "Price", data: [12000, 13000, 12500, 14000] }],
              options: {},
            }}
          /></div>
        <div className="border">        <CryptoChart
            title="Bitcoin"
            currentPrice="$24,000"
            priceChange="+2.5%"
            marketCap="$450B"
            volume="$12B"
            timeRanges={["1D", "1W", "1M", "1Y"]}
            selectedTimeRange="1D"
            onTimeRangeChange={(range) => console.log("Selected range:", range)}
            chartData={{
              colors: ["#1E90FF"],
              series: [{ name: "Price", data: [12000, 13000, 12500, 14000] }],
              options: {},
            }}
          /></div>
        <div className="border"> <CryptoChart
            title="Bitcoin"
            currentPrice="$24,000"
            priceChange="+2.5%"
            marketCap="$450B"
            volume="$12B"
            timeRanges={["1D", "1W", "1M", "1Y"]}
            selectedTimeRange="1D"
            onTimeRangeChange={(range) => console.log("Selected range:", range)}
            chartData={{
              colors: ["#1E90FF"],
              series: [{ name: "Price", data: [12000, 13000, 12500, 14000] }],
              options: {},
            }}
          /></div>
  
      </div>

    </div>
  )
}
