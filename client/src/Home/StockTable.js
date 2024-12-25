import React, { useState } from 'react';

export default function StockTable({ tableName, data, rowsNumber }) {
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-2 bg-grey-500">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
        {tableName}
      </h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex flex-col items-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-2 py-2">SYM</th>
            <th scope="col" className="px-2 py-2">MARKET PRICE</th>
            <th scope="col" className="px-2 py-2">CHANGE</th>
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
              } border-b w-full dark:bg-gray-800 dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-5  py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {stock.name}
              </th>
              <td className="px-5 py-3">{stock.price}</td>
              <td
                className={`px-5 py-3 font-medium ${
                  stock.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stock.change.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4">
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
