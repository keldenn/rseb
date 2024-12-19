import React from "react";

const NewsCard = ({ title, date, description, image, pdfUrl }) => {
  const handlePdfOpen = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-4">{date}</p>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
        </div>
        <div className="flex justify-between space-x-5 mt-auto">
          <button
            onClick={handlePdfOpen}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Read PDF
          </button>
          <a
            href={pdfUrl}
            download
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Download 
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
