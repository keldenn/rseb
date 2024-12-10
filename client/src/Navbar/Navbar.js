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

  const calculateChange = (price, prevPrice) => {
    const change = ((price - prevPrice) / prevPrice) * 100;
    return change.toFixed(2);
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return `${new Intl.DateTimeFormat("en-GB", options).format(date)} BST`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDate(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prevData) =>
        prevData.map((data) => {
          const newPrice = (data.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2);
          return { ...data, prevPrice: data.price, price: parseFloat(newPrice) };
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
     
    >
    {/* MARKET TICKER */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-center text-black text-sm py-2 w-full lg:w-3/5 overflow-hidden">
          <div className="flex items-center justify-center animate-marquee">
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
                    {percentageChange}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex items-center justify-between px-2 space-x-1 py-2">
          <div className="text-xs text-black opacity-45">{time}</div>
          <div className="flex items-center text-black opacity-45">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 max-h-7 text-xs text-black border border-black border-opacity-25 rounded-l focus:outline-none"
            />
            <button className="p-2 max-h-7 text-black border border-black border-opacity-25 rounded-r">
              <svg
                className="w-2 h-2 text-black"
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
          <div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-2 py-1 max-h-7 text-xs text-black opacity-45 border border-black border-opacity-25 rounded focus:outline-none"
            >
              <option value="EN">EN</option>
              <option value="DZ">DZ</option>
            </select>
          </div>
        </div>
      </div>
    {/* NAVBAR */}
    <nav class="bg-white dark:bg-gray-900   w-full z-20 top-30 start-0 border-t border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://rsebl.org.bt/#/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <svg
          width={40}
          // height={104}
          viewBox="0 0 152 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M65.5668 68.7814L49.0278 53.4644C48.0738 52.5814 48.0738 51.1494 49.0278 50.2664L95.1868 7.51839C96.1398 6.63539 97.6858 6.63539 98.6388 7.51839L144.798 50.2664C145.752 51.1494 145.752 52.5814 144.798 53.4644L98.6388 96.2124C97.6858 97.0954 96.1398 97.0954 95.1868 96.2124L83.9388 85.7964"
            stroke="#205A8A"
            strokeWidth="12.469"
            strokeMiterlimit={10}
          />{" "}
          <mask
            id="mask0_2230_2452"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={1}
            width={110}
            height={103}
          >
            {" "}
            <path d="M0 103.489H109.67V0.999969H0V103.489Z" fill="white" />{" "}
          </mask>{" "}
          <g mask="url(#mask0_2230_2452)">
            {" "}
            <path
              d="M86.181 35.3284L102.72 50.6454C103.674 51.5284 103.674 52.9604 102.72 53.8434L56.561 96.5914C55.608 97.4744 54.062 97.4744 53.109 96.5914L6.95 53.8434C5.996 52.9604 5.996 51.5284 6.95 50.6454L53.109 7.89742C54.062 7.01442 55.608 7.01442 56.561 7.89742L67.809 18.3134"
              stroke="#382E7A"
              strokeWidth="12.469"
              strokeMiterlimit={10}
            />{" "}
          </g>{" "}
        </svg>

        </a>
        <div class="flex xl:order-2">

          <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">
              Open main menu
            </span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-start hidden w-full xl:flex xl:w-auto xl:order-1"
        id="navbar-search">
          <ul class="flex flex-col p-4 xl:p-0 mt-4 font-normal border border-gray-100  bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 font-sans font-semibold text-sm text-white bg-custom-1 rounded xl:bg-transparent xl:text-custom-1 xl:p-0 xl:dark:text-custom-2"
              aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 font-sans  text-sm  text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 xl:dark:hover:text-custom-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Stocks
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 font-sans text-sm text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                News
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 font-sans text-sm text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Announcements
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 font-sans text-sm text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Corporate Events
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 font-sans text-sm text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Brokers
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 font-sans text-sm text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
