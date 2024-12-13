import StockTable from './StockTable'
import { useState } from 'react';
import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import StockChart from './StockChart';

export default function StockOverview() {
const [tableData, setTableData] = useState([
        { name: 'BBPL', price: '6,651.207', change: 0.53 },
        { name: 'BCCL', price: '6,651.207', change: 0.53 },
        { name: 'BFAL', price: '6,651.207', change: -0.53 },
        { name: 'BIL', price: '6,651.207', change: 0.39 },
        { name: 'DPL', price: '6,651.207', change: 0.34 },
        { name: 'GCIB', price: '6,651.207', change: 0.34 },
        { name: 'KCL', price: '6,651.207', change: 0.22 },
        { name: 'PCAL', price: '6,651.207', change: 0.89 },
        { name: 'RICB', price: '6,651.207', change: 0.73 },
        { name: 'STCB', price: '6,651.207', change: 0.91 },
        { name: 'SVL', price: '439.865', change: 0.65 },
      ]);

  return (

    <div className="flex flex-wrap xl:container xl:mx-auto overflow-x-auto relative  my-7 h-fit">
        <div className="flex-initial w-full lg:w-3/4 border ">
        <div className="flex flex-col">
          {/* search and tittle */}
            <div className='mt-5 mx-5'>
                <div className="flex flex-row items-center justify-between ">
                  <div>
                    <h1 className='text-xl font-bold dark:text-whited me-3'>Stock Overview</h1>
                  </div>
                  {/* <div className='flex flex-row items-center'>
                    <button type="button" class="text-custom-1 bg-white border border-custom-1  px-4 py-1 ms-2 hover:bg-custom-1 hover:text-white focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-xs  dark:bg-blue-600 dark:hover:bg-custom-1 focus:outline-none dark:focus:ring-custom-1">Live Feed</button>
                    <button type="button" class="text-grey-900 bg-white border border-grey-900  px-4 py-1 ms-2 hover:bg-custom-1 hover:text-white focus:ring-2 focus:ring-blue-300 font-medium rounded-md text-xs  dark:bg-blue-600 dark:hover:bg-custom-1 focus:outline-none dark:focus:ring-custom-1">Historical</button>
                  </div> */}
                
              
                {/* Search bar */}
                <form class="max-w-sm w-full mx-auto m-2">   
                  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div class="relative">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" class="block w-full p-2 ps-10 text-xs text-gray-900 border border-gray-300 rounded bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Stocks" required />
                      <button type="submit" class="text-white absolute end-2 bottom-1 bg-custom-1 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-2 py-1 dark:bg-blue-600 dark:hover:bg-custom-1 dark:focus:ring-blue-800">Search</button>
                  </div>
              </form>

                </div>
            </div>
            {/* Table and Graph */}
            <div className="flex flex-wrap">
                <div className="flex-initial w-full md:w-1/3 border ">
                  <StockTable data={tableData} rowsNumber={9}></StockTable>
                </div>
                <div className="flex-initial w-full md:w-2/3 border ">
                  <StockChart></StockChart>
                </div>
                
            </div>
        </div>

        </div>
        <div className="flex-initial w-full lg:w-1/4">
        {/* Dropdown Group */}
              <div className='p-5'>
                    <button  class="text-dark w-full border border-gray-200 hover:bg-custom-1 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-custom-1 dark:focus:ring-custom-1" type="button">
                      LISTED SCRIPTS 
                      </button>
              </div>
              <div className='pb-5 px-5'>
              <button id="dropdownDivider1Button" data-dropdown-toggle="dropdownDivider1" class=" text-dark w-full border border-gray-200 hover:bg-custom-1 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-custom-1 dark:focus:ring-custom-1" type="button">
                  <svg class="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                DEBT SECURITIES 
                </button>
                <div id="dropdownDivider1" class="z-10 hidden bg-white divide-y divide-gray-100 rounded hover:text-white shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDivider1Button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div class="py-2">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div>
              </div>
              <div className='pb-5 px-5'>
              <button id="dropdownDivider2Button" data-dropdown-toggle="dropdownDivider2" class=" hover:text-white text-dark w-full border border-gray-200 hover:bg-custom-1 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-custom-1 dark:focus:ring-custom-1" type="button">
                  <svg class="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                MARKETS
                </button>
                <div id="dropdownDivider2" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDivider2Button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div class="py-2">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div>
              </div>
              <div className='pb-5 px-5'>
              <button id="dropdownDivider3Button" data-dropdown-toggle="dropdownDivider3" class="text-dark w-full border border-gray-200 hover:bg-custom-1 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-custom-1 dark:focus:ring-custom-1" type="button">
                  <svg class="w-2.5 h-2.5 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                GRAPHS & ANALYTICS
                </button>
                <div id="dropdownDivider3" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-64 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDivider3Button">
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                    <div class="py-2">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div>
              </div>
            {/* Stock Table */}
            <div>
              <h1 className='text-xl font-bold dark:text-white ms-5'>Stock Available</h1>
            </div>
            <StockTable data={tableData} rowsNumber={5}></StockTable>
        </div>
    </div>
  )
}
