import React, { useEffect, useState } from "react";

export function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [language, setLanguage] = useState("EN");
  const [marketData, setMarketData] = useState([
    { symbol: "BNBL", price: 176.53, prevPrice: 176.53 },
    { symbol: "STCB", price: 139.87, prevPrice: 139.87 },
    { symbol: "GCIB", price: 252.45, prevPrice: 252.45 },
    { symbol: "BIL", price: 45323.15, prevPrice: 45323.15 },
    { symbol: "BCCL", price: 3178.89, prevPrice: 3178.89 },
    { symbol: "SVL", price: 176.53, prevPrice: 376.53 },
    { symbol: "RICB", price: 139.87, prevPrice: 5639.87 },
    { symbol: "PCAL", price: 252.45, prevPrice: 1052.45 },
    { symbol: "DPNB", price: 45323.15, prevPrice: 45323.15 },
    { symbol: "BPCL", price: 3178.89, prevPrice: 178.89 },
  ]);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    // Format the current date
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);

    return `${formattedDate} BST`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setTime(formatDate(currentDate)); // Set the formatted date
    }, 1000); // Update every second (you can adjust the interval as needed)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) =>
        prevData.map((data) => {
          const newPrice = (data.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2);
          return {
            ...data,
            prevPrice: data.price,
            price: parseFloat(newPrice),
          };
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const calculateChange = (price, prevPrice) => {
    const change = ((price - prevPrice) / prevPrice) * 100;
    return change.toFixed(2);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left: Market Ticker */}
      <div className=" flex items-center justify-center text-black text-sm py-2 w-full lg:w-3/5 overflow-hidden">
        <div className="flex items-center justify-center  animate-marquee">
          {marketData.map((item, index) => {
            const percentageChange = calculateChange(item.price, item.prevPrice);
            const isIncrease = item.price > item.prevPrice;

            return (
              <div
                key={index}
                className={`flex items-center space-x-2 px-4 ${
                  index > 0 ? "border-l border-gray-500" : ""
                }`}
              >
                <span className="text-black opacity-85">{item.symbol}</span>
                <span className="text-stone-300">{item.price}</span>
                <span
                  className={`${
                    isIncrease
                      ? "text-green-500"
                      : item.price < item.prevPrice
                      ? "text-red-500"
                      : "text-black"
                  } flex items-center`}
                >
                  {isIncrease ? (
                    <>
                      {percentageChange}% <span className="ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M7.38784 4.72827L4.1808 1.00952C4.08901 0.903076 3.91225 0.903076 3.81948 1.00952L0.612445 4.72827C0.493304 4.86694 0.600726 5.07007 0.793109 5.07007H7.20717C7.39955 5.07007 7.50698 4.86694 7.38784 4.72827Z" fill="#52C41A"/>
                        </svg>
                      </span>
                    </>
                  ) : (
                    <>
                      {percentageChange}% <span className="ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M7.20717 0.929688H0.793109C0.600726 0.929688 0.493304 1.13281 0.612445 1.27148L3.81948 4.99023C3.91127 5.09668 4.08803 5.09668 4.1808 4.99023L7.38784 1.27148C7.50698 1.13281 7.39955 0.929688 7.20717 0.929688Z" fill="#FF4D4F"/>
                      </svg>
                        </span>
                    </>
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Date Time, Search, Language */}
      <div className="w-full lg:w-2/5 flex items-center justify-between px-2  space-x-1 py-2">
        {/* Date & Time */}
        <div className="text-xs text-black opacity-45">{time}</div>

        {/* Search Bar with Icon */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 max-h-7 text-xs text-black border border-black border-opacity-25  rounded-l focus:outline-none"
          />
          <button className="p-2 max-h-6 text-black border border-black border-opacity-25 rounded-r hover:bg-gray-600">
          <svg
          className="w-3 h-3 text-black opacity-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>

          </button>
        </div>

        {/* Language Dropdown */}
        <div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1 max-h-7 text-xs text-black  opacity-45 border border-black border-opacity-25 rounded focus:outline-none "
          >
            <option className="text-xs" value="EN">
              English
            </option>
            <option className="text-xs" value="DZ">
              Dzongkha
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
