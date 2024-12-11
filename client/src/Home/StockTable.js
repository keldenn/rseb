import React, { useState } from 'react';

export default function StockTable({tableName, data, rowsNumber}) {
    const [selectedRow, setSelectedRow] = useState(null);
    const [tableData] = useState(data);
  
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = rowsNumber; 
  
    // Calculate the data for the current page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  
    const totalPages = Math.ceil(tableData.length / rowsPerPage);
  
    const handleRowClick = (index) => {
      setSelectedRow(index === selectedRow ? null : index);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    return (
      <div className='bg-green-500 border border-yellow-500 '>
          <table className="w-1/3 text-xs text-left text-gray-500 dark:text-gray-400 mx-auto">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3 text-xs">Stock Name</th>
              <th scope="col" className="px-3 py-3 text-xs">Price (Nu)</th>
              <th scope="col" className="px-3 py-3 text-xs">Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((stock, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(index)}
                className={`cursor-pointer ${
                  selectedRow === index
                    ? 'bg-blue-100 dark:bg-blue-800'
                    : index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50'
                } dark:bg-gray-800 dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{stock.name}</td>
                <td className="px-6 py-4">{stock.price}</td>
                <td
                  className={`px-6 py-4 font-medium ${
                    stock.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stock.change.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="flex justify-between bg-red-500 items-center px-6 py-4 w-[100%]  mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Page <span className="font-medium">{currentPage}</span> of {totalPages}
          </p>
          <div className="inline-flex -space-x-px">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                currentPage === 1 && 'opacity-50 cursor-not-allowed'
              }`}
            >
              &lt;
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                currentPage === totalPages && 'opacity-50 cursor-not-allowed'
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    
  
    );
}
