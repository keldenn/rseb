import React, { useState } from "react";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  // const newsData = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     date: "15 November 2024",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
  //     image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
  //     pdfUrl: "/path/to/sample1.pdf",
  //   },
  //   {
  //     id: 2,
  //     title: "Another news headline to be displayed here",
  //     date: "16 November 2024",
  //     description:
  //       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...",
  //     image: "https://rsebl.org.bt/agm/storage/timeline/nndHtH0cBoh6rMuj511dDJkYxdq55baFOzL0bR7o.jpg",
  //     pdfUrl: "/path/to/sample2.pdf",
  //   },
  //   {
  //     id: 3,
  //     title: "Yet another piece of news to showcase",
  //     date: "17 November 2024",
  //     description:
  //       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit...",
  //     image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
  //     pdfUrl: "/path/to/sample3.pdf",
  //   },
  //   {
  //     id: 4,
  //     title: "Breaking news for the modern reader",
  //     date: "18 November 2024",
  //     description:
  //       "This is breaking news content with a quick preview for our readers. Check out the full story by clicking the buttons below...",
  //     image: "https://rsebl.org.bt/agm/storage/timeline/79G6RcwLEPev5ma0pAKB8gCOUe5YpkvYyHPTZNhW.png",
  //     pdfUrl: "/path/to/sample4.pdf",
  //   },
  //   {
  //     id: 5,
  //     title: "Highlights from the recent event",
  //     date: "19 November 2024",
  //     description:
  //       "Catch up on the recent event highlights with a detailed report available for reading and download. Stay updated with the latest news!",
  //     image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
  //     pdfUrl: "/path/to/sample5.pdf",
  //   },
  //   {
  //     id: 6,
  //     title: "Important updates from the community",
  //     date: "20 November 2024",
  //     description:
  //       "Get the latest updates from the community. This is your chance to read about the most impactful developments happening around us.",
  //     image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
  //     pdfUrl: "/path/to/sample6.pdf",
  //   },
  // ];
  const newsData = [
    {
      id: 1,
      title: "Breaking: Major Update on Policy Reform",
      date: "01 November 2024",
      description: "A groundbreaking policy reform has been announced today. This marks a significant milestone for the industry...",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample1.pdf",
    },
    {
      id: 2,
      title: "Tech Giants Reveal New Innovations",
      date: "02 November 2024",
      description: "Several tech companies showcased their latest innovations in a high-profile event yesterday...",
      image: "https://rsebl.org.bt/agm/storage/timeline/nndHtH0cBoh6rMuj511dDJkYxdq55baFOzL0bR7o.jpg",
      pdfUrl: "/path/to/sample2.pdf",
    },
    {
      id: 3,
      title: "Community Celebrates Cultural Festival",
      date: "03 November 2024",
      description: "The local community came together to celebrate the annual cultural festival with vibrant performances...",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample3.pdf",
    },
    {
      id: 4,
      title: "Stock Market Trends: Weekly Update",
      date: "04 November 2024",
      description: "This week's stock market trends indicate a shift in investor sentiment. Experts weigh in on the factors...",
      image: "https://rsebl.org.bt/agm/storage/timeline/79G6RcwLEPev5ma0pAKB8gCOUe5YpkvYyHPTZNhW.png",
      pdfUrl: "/path/to/sample4.pdf",
    },
    {
      id: 5,
      title: "Health Sector Sees Rapid Growth",
      date: "05 November 2024",
      description: "New reports suggest the health sector is growing rapidly, driven by increased investments and innovation...",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample5.pdf",
    },
    {
      id: 6,
      title: "Global Leaders Meet to Discuss Climate Change",
      date: "06 November 2024",
      description: "World leaders convened at an international summit to address pressing climate change concerns...",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample6.pdf",
    },
    {
      id: 7,
      title: "Sports: National Team Triumphs in Tournament",
      date: "07 November 2024",
      description: "The national sports team secured a remarkable victory in the latest international tournament...",
      image: "https://rsebl.org.bt/agm/storage/timeline/79G6RcwLEPev5ma0pAKB8gCOUe5YpkvYyHPTZNhW.png",
      pdfUrl: "/path/to/sample7.pdf",
    },
    {
      id: 8,
      title: "Technology: Advancements in AI",
      date: "08 November 2024",
      description: "Leading companies announced groundbreaking advancements in artificial intelligence during a recent conference...",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample8.pdf",
    },
    {
      id: 9,
      title: "Education: New Policies Announced",
      date: "09 November 2024",
      description: "The government has announced new policies aimed at improving education standards nationwide...",
      image: "https://rsebl.org.bt/agm/storage/timeline/nndHtH0cBoh6rMuj511dDJkYxdq55baFOzL0bR7o.jpg",
      pdfUrl: "/path/to/sample9.pdf",
    },
    {
      id: 10,
      title: "Business: Record Growth for Small Enterprises",
      date: "10 November 2024",
      description: "Small and medium enterprises have recorded unprecedented growth, according to recent market data...",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample10.pdf",
    },
    {
      id: 11,
      title: "Environment: Conservation Efforts Highlighted",
      date: "11 November 2024",
      description: "A recent report sheds light on ongoing conservation efforts and their impact on the environment...",
      image: "https://rsebl.org.bt/agm/storage/timeline/79G6RcwLEPev5ma0pAKB8gCOUe5YpkvYyHPTZNhW.png",
      pdfUrl: "/path/to/sample11.pdf",
    },
    {
      id: 12,
      title: "Finance: Tips for Smart Investing",
      date: "12 November 2024",
      description: "Experts share insights and tips on how to make smart investment decisions in a volatile market...",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample12.pdf",
    },
    {
      id: 13,
      title: "Tourism: Top Destinations for 2024",
      date: "13 November 2024",
      description: "Travel enthusiasts rejoice! Here are the top destinations you must visit in 2024...",
      image: "https://rsebl.org.bt/agm/storage/timeline/nndHtH0cBoh6rMuj511dDJkYxdq55baFOzL0bR7o.jpg",
      pdfUrl: "/path/to/sample13.pdf",
    },
    {
      id: 14,
      title: "Agriculture: New Techniques Boost Yields",
      date: "14 November 2024",
      description: "Farmers are embracing new techniques that have significantly boosted crop yields this season...",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample14.pdf",
    },
    {
      id: 15,
      title: "Space Exploration: Latest Discoveries",
      date: "15 November 2024",
      description: "Scientists reveal their latest discoveries in space exploration at an international conference...",
      image: "https://rsebl.org.bt/agm/storage/timeline/79G6RcwLEPev5ma0pAKB8gCOUe5YpkvYyHPTZNhW.png",
      pdfUrl: "/path/to/sample15.pdf",
    },
    {
      id: 16,
      title: "Energy: Advances in Renewable Technology",
      date: "16 November 2024",
      description: "The energy sector is abuzz with innovations in renewable technology, promising a cleaner future...",
      image: "https://rsebl.org.bt/agm/storage/timeline/1zLs33Wxo3qKecmHmCUJvmDdZMmn2DsCnpSGsNhe.jpg",
      pdfUrl: "/path/to/sample16.pdf",
    },
    {
      id: 17,
      title: "Transport: High-Speed Rail Expansion",
      date: "17 November 2024",
      description: "A new high-speed rail project aims to connect cities faster and more efficiently than ever before...",
      image: "https://rsebl.org.bt/agm/storage/timeline/nndHtH0cBoh6rMuj511dDJkYxdq55baFOzL0bR7o.jpg",
      pdfUrl: "/path/to/sample17.pdf",
    },
    {
      id: 18,
      title: "Art: Highlights from a Renowned Exhibition",
      date: "18 November 2024",
      description: "Art enthusiasts were treated to a magnificent display at the city's most renowned art exhibition...",
      image: "https://rsebl.org.bt/agm/storage/timeline/GiaCNztmlRav3ARj3uECMX1v6c4MVk8Qeo33Ilgc.jpg",
      pdfUrl: "/path/to/sample18.pdf",
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
      <div className="flex justify-center items-center mt-6 space-x-4">
        {/* Previous Arrow */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`text-4xl font-bold p-2 rounded-full transition-all duration-200 ${
            currentPage === 1
              ? "text-gray-300 cursor-not-allowed"
              : "text-custom-4 hover:text-blue-800 hover:scale-110"
          }`}
        >
          &#10092; {/* Left Arrow */}
        </button>

        {/* Dynamic Pagination */}
        <div className="flex space-x-2">
          {totalPages > 5 && (
            <>
              <span
                onClick={() => handlePageChange(1)}
                className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium cursor-pointer ${
                  currentPage === 1
                    ? "bg-custom-4 text-white scale-110 shadow-md"
                    : "text-custom-4 hover:bg-gray-400"
                }`}
              >
                1
              </span>
              {currentPage > 3 && <span className="text-gray-500">...</span>}
              {Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
                .filter((page) => page > 1 && page < totalPages)
                .map((page) => (
                  <span
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium cursor-pointer ${
                      currentPage === page
                        ? "bg-custom-4 text-white scale-110 shadow-md"
                        : "text-custom-4 hover:bg-gray-400"
                    }`}
                  >
                    {page}
                  </span>
                ))}
              {currentPage < totalPages - 2 && (
                <span className="text-gray-500">...</span>
              )}
              <span
                onClick={() => handlePageChange(totalPages)}
                className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium cursor-pointer ${
                  currentPage === totalPages
                    ? "bg-custom-4 text-white scale-110 shadow-md"
                    : "text-custom-4 hover:bg-gray-400"
                }`}
              >
                {totalPages}
              </span>
            </>
          )}
          {totalPages <= 5 &&
            Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-custom-4 text-white scale-110 shadow-md"
                    : "text-custom-4 hover:bg-gray-400"
                }`}
              >
                {index + 1}
              </span>
            ))}
        </div>

        {/* Next Arrow */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`text-4xl font-bold p-2 rounded-full transition-all duration-200 ${
            currentPage === totalPages
              ? "text-gray-300 cursor-not-allowed"
              : "text-custom-4 hover:text-blue-800 hover:scale-110"
          }`}
        >
          &#10093; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
