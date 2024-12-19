import React, { useState } from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date: "15 November 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample1.pdf",
    },
    {
      id: 2,
      title: "Another news headline to be displayed here",
      date: "16 November 2024",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
      image: "https://rsebl.org.bt/agm/storage/timeline/nndHtH0cBoh6rMuj511dDJkYxdq55baFOzL0bR7o.jpg",
      pdfUrl: "/path/to/sample2.pdf",
    },
    {
      id: 3,
      title: "Yet another piece of news to showcase",
      date: "17 November 2024",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit...",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample3.pdf",
    },
    {
      id: 4,
      title: "Breaking news for the modern reader",
      date: "18 November 2024",
      description:
        "This is breaking news content with a quick preview for our readers. Check out the full story by clicking the buttons below...",
      image: "https://rsebl.org.bt/agm/storage/timeline/79G6RcwLEPev5ma0pAKB8gCOUe5YpkvYyHPTZNhW.png",
      pdfUrl: "/path/to/sample4.pdf",
    },
    {
      id: 5,
      title: "Highlights from the recent event",
      date: "19 November 2024",
      description:
        "Catch up on the recent event highlights with a detailed report available for reading and download. Stay updated with the latest news!",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample5.pdf",
    },
    {
      id: 6,
      title: "Important updates from the community",
      date: "20 November 2024",
      description:
        "Get the latest updates from the community. This is your chance to read about the most impactful developments happening around us.",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample6.pdf",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="xl:container xl:mx-auto p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">News</h2>
        <a
          href="/news"
          className="text-blue-500 hover:underline text-sm font-medium"
        >
          All News
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentItems.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            date={news.date}
            description={news.description}
            image={news.image}
            pdfUrl={news.pdfUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
