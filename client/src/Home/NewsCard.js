import React from "react";

const NewsCard = ({ title, date, description, image, pdfUrl }) => {
  const handlePdfOpen = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow ">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-500 mb-4">{date}</p>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
        </div>
        <div className="flex justify-between space-x-5 mt-auto">
          <button
            onClick={handlePdfOpen}
            className="hover:bg-custom-4 hover:text-white px-4 py-2 rounded-md bg-white border border-custom-1 text-custom-1"
          >
            Download 
          </button>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;
