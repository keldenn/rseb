import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const StockChart = () => {
  useEffect(() => {
    const options = {
      legend: {
        show: true
      },
     
      series: [
        {
          name: "Price",
          color: "#F40000",
          data: [
            { x: "Mon", y: 231 },
            { x: "Tue", y: 122 },
            { x: "Wed", y: 63 },
            { x: "Thu", y: 421 },
            { x: "Fri", y: 122 },
            { x: "Sat", y: 323 },
            { x: "Sun", y: 111 },
          ],
        }
      ],
      chart: {
        type: "area",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        curve: 'smooth',
        // show: true,
        // width: 0,
        // colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
          }
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    }
    

    const chartElement = document.getElementById("area-chart");
    if (chartElement) {
      const chart = new ApexCharts(chartElement, options);
      chart.render();
      return () => {
        chart.destroy(); 
      };
    }
  }, []);

  return (

<div class=" w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
  <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center">
      <div class="w-12 h-12 rounded-lg bg-white-100 dark:bg-gray-700 flex items-center justify-center me-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={50}
          height={47}
          viewBox="0 0 50 47"
          fill="none"
        >
  <rect width={50} height={47} fill="url(#pattern0_2282_1785)" />
  <defs>
    <pattern
      id="pattern0_2282_1785"
      patternContentUnits="objectBoundingBox"
      width={1}
      height={1}
    >
      <use
        xlinkHref="#image0_2282_1785"
        transform="matrix(0.00839286 0 0 0.00892857 -0.00357143 0)"
      />
    </pattern>
    <image
      id="image0_2282_1785"
      width={120}
      height={112}
      xlinkHref="data:image/png;base64,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"
    />
  </defs>
        </svg>

      </div>
      <div>
        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">BNB</h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">BHUTAN NATIONAL BANK LTD.</p>
      </div>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-2xl font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg class="w-3 h-5 ms-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>

  <div class="grid grid-cols-2">
    <dl class="flex items-center">
        <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Paid up shares:</dt>
        <dd class="text-gray-900 text-sm dark:text-white font-semibold"> 14,000,140</dd>
    </dl>
    <dl class="flex items-center justify-end">
        <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Conversion rate:</dt>
        <dd class="text-gray-900 text-sm dark:text-white font-semibold">1.2%</dd>
    </dl>
  </div>

  <div id="area-chart"></div>
    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div class="flex justify-between items-center pt-5">
      
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="lastDaysdropdown"
          data-dropdown-placement="bottom"
          class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
          type="button">
          Last 7 days
          <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        
        <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
              </li>
            </ul>
        </div>
        <a
          href="#"
          class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
          Tell me more
          <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
      </div>
    </div>
</div>

  );
};

export default StockChart;
