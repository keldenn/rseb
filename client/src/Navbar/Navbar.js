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
      className=""
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
    <nav class="bg-white dark:bg-gray-900  w-full z-20 top-30 start-0 border-t border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://rsebl.org.bt/#/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" width="153" height="34" viewBox="0 0 153 34"
          fill="none">
            <path d="M58.2311 0.494388C57.8616 0.789982 57.4675 1.43044 57.3197 1.92309C56.9995 3.1301 56.9995 10.9387 57.3443 12.1457C57.8616 14.0178 60.522 14.7075 61.9999 13.3527C63.0345 12.4167 63.3055 10.6678 63.1577 6.03678C63.0345 2.07089 62.7882 0.987045 61.8768 0.395856C60.99 -0.1707 59.0194 -0.121434 58.2311 0.494388ZM61.1132 1.7753C61.4334 2.21869 61.5073 3.17937 61.5073 7.0221C61.5073 12.1211 61.3595 12.8108 60.1525 12.8108C58.6991 12.8108 58.4774 11.8501 58.6006 6.23384C58.6499 3.15474 58.773 1.94773 59.0194 1.65213C59.512 1.03631 60.6698 1.13484 61.1132 1.7753Z"
            fill="#3A2A76" />
            <path d="M89.0223 0.519021C87.7906 1.45507 87.5443 4.28785 88.5296 5.93825C88.7759 6.33237 89.6135 7.16989 90.4017 7.76108C91.19 8.3769 91.929 9.16515 92.0521 9.51001C92.4462 10.5446 92.3477 11.7762 91.8058 12.3182C90.7712 13.3527 89.5396 12.6384 89.244 10.8895C89.1208 10.0027 88.9976 9.85487 88.4804 9.85487C87.6675 9.85487 87.5936 10.1012 87.9631 11.5792C88.4311 13.3281 88.9976 13.8454 90.648 13.9932C91.8551 14.0917 92.0521 14.0178 92.7911 13.3774C93.5055 12.7369 93.6286 12.466 93.7272 11.185C93.875 9.11589 93.4069 8.17984 91.4856 6.67723C90.5988 5.98751 89.8105 5.24853 89.7366 5.02683C89.4657 4.33711 89.5888 2.07089 89.9091 1.6275C90.1308 1.3319 90.4756 1.20874 90.9436 1.28264C91.5841 1.35654 91.7319 1.52897 92.0521 2.51428C92.397 3.57349 92.4709 3.67203 93.0374 3.52423C93.8503 3.32717 93.8257 3.37643 93.6286 2.31722C93.5301 1.7753 93.1606 1.06094 92.7665 0.691451C92.1999 0.124895 91.8797 0.00173082 90.8697 0.00173082C90.0076 0.00173082 89.4657 0.149528 89.0223 0.519021Z"
            fill="#3A2A76" />
            <path d="M103.802 0.494397C103.433 0.789991 103.039 1.43045 102.891 1.9231C102.571 3.10548 102.571 10.9387 102.891 12.1211C103.236 13.3527 104.172 14.0425 105.477 14.0425C106.783 14.0425 107.719 13.3527 108.088 12.0718C108.433 10.9634 108.261 10.3475 107.62 10.3475C107.251 10.3475 107.078 10.6185 106.857 11.4314C106.561 12.5891 106.019 12.9833 105.108 12.6877C104.27 12.4167 104.073 11.0373 104.172 6.38165C104.246 1.55361 104.369 1.15948 105.699 1.28265C106.364 1.35655 106.487 1.47971 106.709 2.34186C106.906 3.17938 107.054 3.30254 107.522 3.25328C107.842 3.20401 108.162 3.00695 108.236 2.83452C108.433 2.2926 107.842 0.789991 107.251 0.371233C106.463 -0.17069 104.566 -0.0967915 103.802 0.494397Z"
            fill="#3A2A76" />
            <path d="M147.648 0.519021C146.417 1.45507 146.17 4.28785 147.156 5.93825C147.402 6.33237 148.239 7.16989 149.028 7.76108C149.816 8.3769 150.555 9.16515 150.678 9.51001C151.072 10.5446 150.974 11.7762 150.432 12.3182C149.397 13.3527 148.166 12.6384 147.87 10.8895C147.747 10.0027 147.624 9.85487 147.106 9.85487C146.293 9.85487 146.22 10.1012 146.589 11.5792C147.057 13.3281 147.624 13.8454 149.274 13.9932C150.481 14.0917 150.678 14.0178 151.417 13.3774C152.131 12.7369 152.255 12.466 152.353 11.185C152.501 9.11589 152.033 8.17984 150.112 6.67723C149.225 5.98751 148.437 5.24853 148.363 5.02683C148.092 4.33711 148.215 2.07089 148.535 1.6275C148.757 1.3319 149.102 1.20874 149.57 1.28264C150.21 1.35654 150.358 1.52897 150.678 2.51428C151.023 3.57349 151.097 3.67203 151.663 3.52423C152.476 3.32717 152.452 3.37643 152.255 2.31722C152.156 1.7753 151.787 1.06094 151.392 0.691451C150.826 0.124895 150.506 0.00173082 149.496 0.00173082C148.634 0.00173082 148.092 0.149528 147.648 0.519021Z"
            fill="#3A2A76" />
            <path d="M15.5671 0.593076C14.7542 0.937936 0.762742 15.1757 0.220819 16.1857C-0.000876293 16.5798 -0.050142 17.1217 0.0483894 17.7129C0.171554 18.4765 1.3293 19.7082 7.90627 26.3098C15.1976 33.6011 15.641 33.9952 16.5031 33.9952C17.3653 33.9952 17.784 33.6257 24.2132 27.2705C32.3913 19.2401 32.9333 18.5997 32.9333 17.0725C32.9333 15.9886 32.884 15.9147 29.8049 12.7863L26.6765 9.6087L25.371 10.8896C24.6566 11.604 24.0901 12.269 24.1147 12.3676C24.164 12.4661 25.1493 13.5253 26.3563 14.7323C27.5387 15.9393 28.4993 17.0478 28.4993 17.171C28.4993 17.3188 25.8144 20.1762 22.5382 23.5263L16.5524 29.6106L10.5174 23.5509C7.19192 20.2008 4.4823 17.3927 4.4823 17.2695C4.4823 16.9986 16.2075 4.92846 16.4539 4.92846C16.577 4.92846 17.0204 5.32258 17.4392 5.79061C17.8826 6.25863 18.3506 6.65276 18.4984 6.65276C18.6462 6.65276 19.3606 6.0862 20.0503 5.39648L21.3558 4.16484L19.9271 2.73613C18.5723 1.35669 17.0697 0.248215 16.5524 0.248215C16.4292 0.272848 15.9858 0.420646 15.5671 0.593076Z"
            fill="#3A2A76" />
            <path d="M49.6836 7.0221V13.7961H50.4226H51.1616V11.1851C51.1616 8.64787 51.1616 8.5986 51.7035 8.6725C52.1715 8.7464 52.3686 9.11589 52.9844 11.2589L53.6987 13.7961H54.5116H55.3245L54.9304 12.4906C53.8712 8.96809 53.6741 8.13058 53.8958 8.13058C54.3885 8.13058 55.1028 6.03678 55.1028 4.55881C55.1028 1.18411 54.3146 0.248062 51.5064 0.248062H49.6836V7.0221ZM53.3046 2.39112C53.7973 3.62276 53.6495 6.18458 53.0337 6.8743C52.7627 7.16989 52.2454 7.39159 51.8513 7.39159H51.1616V4.43565V1.4797H52.0483C52.812 1.4797 52.9598 1.57824 53.3046 2.39112Z"
            fill="#3A2A76" />
            <path d="M65.5963 4.85441C66.7541 8.86956 66.9265 9.75634 66.9265 11.6284V13.7961H67.6655H68.4045V11.456C68.4045 9.21442 68.9464 6.8004 70.7692 0.666821C70.8677 0.346594 70.7446 0.248062 70.1534 0.248062C69.4883 0.248062 69.3898 0.346594 69.1434 1.28264C68.9956 1.87383 68.6262 3.22864 68.3552 4.31248C68.0842 5.39633 67.764 6.43091 67.6901 6.60334C67.5916 6.77577 67.1482 5.39633 66.6802 3.5735L65.818 0.248062H65.0544H64.2908L65.5963 4.85441Z"
            fill="#3A2A76" />
            <path d="M73.0848 0.445125C73.0848 0.642188 70.9418 12.6138 70.7693 13.3527C70.6954 13.6976 70.8432 13.7961 71.4837 13.7961C72.2719 13.7961 72.2966 13.7715 72.469 12.3921C72.7153 10.3475 72.7153 10.3475 74.1933 10.3475C75.6713 10.3475 75.6713 10.3475 75.9176 12.3921C76.09 13.7961 76.09 13.7961 76.9522 13.7961C77.6419 13.7961 77.7651 13.7222 77.6665 13.3527C77.5434 12.934 75.3018 0.642188 75.3018 0.395859C75.3018 0.321961 74.8091 0.248062 74.1933 0.248062C73.5775 0.248062 73.0848 0.346594 73.0848 0.445125ZM74.8091 5.56876C75.0801 7.21916 75.3018 8.6725 75.3018 8.84493C75.3018 8.99273 74.8584 9.11589 74.1687 9.11589C73.0602 9.11589 73.0356 9.09126 73.1587 8.42617C73.2326 8.05668 73.4789 6.50481 73.7253 4.95294C73.9716 3.4257 74.1933 2.26796 74.2426 2.36649C74.2672 2.48965 74.5135 3.91836 74.8091 5.56876Z"
            fill="#3A2A76" />
            <path d="M79.2429 7.0221V13.7961H81.583C83.9232 13.7961 83.9232 13.7961 83.9232 13.1803C83.9232 12.5891 83.8739 12.5645 82.322 12.5645H80.7209V6.40628V0.248062H79.9819H79.2429V7.0221Z"
            fill="#3A2A76" />
            <path d="M95.9934 7.0221V13.7961H98.4567H100.92V13.1803C100.92 12.5891 100.871 12.5645 99.1957 12.5645H97.4714V10.1012V7.63792H99.0725C100.624 7.63792 100.674 7.61329 100.674 7.0221C100.674 6.43091 100.624 6.40628 99.0725 6.40628H97.4714V3.94299V1.4797H99.1957C100.871 1.4797 100.92 1.45507 100.92 0.863884V0.248062H98.4567H95.9934V7.0221Z"
            fill="#3A2A76" />
            <path d="M110.034 4.97757C110.034 10.988 110.256 12.4413 111.266 13.3527C112.547 14.5351 114.838 14.1903 115.65 12.7123C115.995 12.0718 116.094 11.0126 116.143 6.08605L116.217 0.248061H115.478H114.764L114.665 6.01215C114.591 11.2589 114.542 11.8255 114.123 12.2935C113.507 12.9586 112.621 12.9586 112.153 12.2689C111.832 11.8009 111.758 10.7663 111.758 5.98752V0.248061H110.896H110.034V4.97757Z"
            fill="#3A2A76" />
            <path d="M118.409 7.0221V13.7961H119.148H119.887V11.1851C119.887 8.64787 119.887 8.5986 120.429 8.6725C120.897 8.7464 121.094 9.11589 121.71 11.2589L122.425 13.7961H123.237H124.05L123.656 12.4906C122.597 8.96809 122.4 8.13058 122.622 8.13058C123.114 8.13058 123.829 6.03678 123.829 4.55881C123.829 1.18411 123.04 0.248062 120.232 0.248062H118.409V7.0221ZM122.03 2.39112C122.523 3.62276 122.375 6.18458 121.759 6.8743C121.489 7.16989 120.971 7.39159 120.577 7.39159H119.887V4.43565V1.4797H120.774C121.538 1.4797 121.686 1.57824 122.03 2.39112Z"
            fill="#3A2A76" />
            <path d="M126.045 7.0221V13.7961H126.784H127.523V7.0221V0.248062H126.784H126.045V7.0221Z"
            fill="#3A2A76" />
            <path d="M129.001 0.863884C129.001 1.40581 129.1 1.4797 129.987 1.4797H130.972V7.63792V13.7961H131.711H132.45V7.63792V1.4797H133.435C134.322 1.4797 134.421 1.40581 134.421 0.863884V0.248062H131.711H129.001V0.863884Z"
            fill="#3A2A76" />
            <path d="M135.652 7.0221V13.7961H136.391H137.13V7.0221V0.248062H136.391H135.652V7.0221Z"
            fill="#3A2A76" />
            <path d="M139.84 7.0221V13.7961H142.303H144.766V13.1803C144.766 12.5891 144.717 12.5645 143.042 12.5645H141.318V10.1012V7.63792H142.919C144.471 7.63792 144.52 7.61329 144.52 7.0221C144.52 6.43091 144.471 6.40628 142.919 6.40628H141.318V3.94299V1.4797H143.042C144.717 1.4797 144.766 1.45507 144.766 0.863884V0.248062H142.303H139.84V7.0221Z"
            fill="#3A2A76" />
            <path d="M20.3214 8.1552C12.2664 16.3087 12.0447 16.5796 12.7098 18.1808C12.8823 18.5749 14.311 20.176 15.8875 21.7525L18.7695 24.6346L20.075 23.329L21.3806 21.9989L19.2129 19.708C18.0305 18.4517 17.0452 17.3433 17.0452 17.2447C17.0452 16.9245 18.9173 14.9046 23.967 9.83024L28.9921 4.7805L34.0172 9.83024C36.7761 12.6384 39.4857 15.4219 40.0769 16.0624L41.1115 17.2447L36.1849 22.3437C33.4753 25.1765 30.7411 27.96 30.1253 28.5758L28.9921 29.6597L27.8837 28.5758L26.7752 27.492L25.5435 28.699C24.8538 29.3887 24.3365 30.0292 24.3612 30.177C24.4104 30.3248 25.2972 31.2362 26.3564 32.2215C28.9182 34.5863 29.0907 34.5863 31.751 32.0737C36.3081 27.763 44.905 18.8951 45.2006 18.1808C45.8903 16.555 45.7425 16.3579 37.6629 8.1552L30.1006 0.469754H28.9921H27.8837L20.3214 8.1552Z"
            fill="#335CAD" />
            <path d="M49.4373 28.0832V33.7487H51.531C53.4524 33.7487 53.6248 33.6995 53.6248 33.2561C53.6248 32.8127 53.4524 32.7634 52.1469 32.7634H50.6689V30.6696V28.5758H51.9005C52.9598 28.5758 53.1322 28.5019 53.1322 28.0832C53.1322 27.6644 52.9598 27.5905 51.9005 27.5905H50.6689V25.6199V23.6493H52.0237C53.3046 23.6493 53.3785 23.6246 53.3785 23.0335C53.3785 22.4176 53.3539 22.4176 51.4079 22.4176H49.4373V28.0832Z"
            fill="#3A2A76" />
            <path d="M54.6103 22.6393C54.6103 22.7379 55.0537 24.0188 55.5957 25.4721L56.581 28.0832L56.0637 29.3641C55.7927 30.0785 55.2754 31.3594 54.9552 32.2215L54.364 33.7734L55.0291 33.6995C55.571 33.6256 55.7435 33.3793 56.31 31.852C56.6549 30.8914 57.0244 30.0292 57.0983 29.9307C57.1968 29.8568 57.5663 30.6697 57.9604 31.7781C58.6009 33.5763 58.724 33.7488 59.3152 33.7488H59.9803L58.8965 30.916L57.8126 28.0586L58.4038 26.5313C58.724 25.6938 59.2167 24.4129 59.5123 23.6986L60.0296 22.393L59.3891 22.4669C58.8226 22.5408 58.6501 22.7871 58.0836 24.3144C57.7387 25.2751 57.3692 26.1372 57.2953 26.2357C57.1968 26.3096 56.8273 25.4968 56.4332 24.3883C55.842 22.7132 55.6449 22.4176 55.1769 22.4176C54.8567 22.4176 54.6103 22.5162 54.6103 22.6393Z"
            fill="#3A2A76" />
            <path d="M61.7783 23.0581C61.1132 23.9203 60.9408 25.2504 61.064 28.9946C61.1625 32.394 61.4335 33.2807 62.4188 33.7241C63.8475 34.3892 65.3008 33.601 65.6703 31.9752C65.8674 31.1377 65.8427 31.0884 65.2269 30.9899C64.6604 30.916 64.5865 30.9899 64.5618 31.6057C64.4879 33.2807 62.739 33.4039 62.3941 31.7781C62.1971 30.7436 62.2463 25.1765 62.468 24.4129C62.8375 23.0827 64.2662 23.132 64.414 24.4868C64.4879 25.1519 64.6357 25.2258 65.3008 24.9795C65.8427 24.7578 65.7935 23.8464 65.1777 23.0581C64.7589 22.5162 64.4879 22.4177 63.478 22.4177C62.4927 22.4177 62.1971 22.5162 61.7783 23.0581Z"
            fill="#3A2A76" />
            <path d="M67.4192 28.0832V33.7487H68.035H68.6508V31.1623V28.5758H69.8825H71.1141V31.1623V33.7487H71.7299H72.3458V28.0832V22.4176H71.7299H71.1141V25.0041V27.5905H69.8825H68.6508V25.0041V22.4176H68.035H67.4192V28.0832Z"
            fill="#3A2A76" />
            <path d="M74.7105 27.6398C74.2178 30.5218 73.7252 33.0837 73.6759 33.3054C73.5774 33.6502 73.7005 33.7487 74.1685 33.7487C74.809 33.7487 74.9075 33.5763 75.1785 31.8274L75.3509 30.7682L76.484 30.8421L77.6418 30.916L77.8635 32.32C78.0605 33.6502 78.1098 33.7487 78.7256 33.7487H79.3907L78.4547 28.6251C77.223 21.8018 77.3955 22.4176 76.4594 22.4176H75.6465L74.7105 27.6398ZM77.026 27.3442L77.4447 29.8075H76.4594C75.5726 29.8075 75.4987 29.7582 75.6219 29.2409C75.6958 28.9453 75.8928 27.7876 76.0653 26.6791C76.2377 25.546 76.4348 24.6839 76.484 24.7578C76.5579 24.8317 76.8043 25.9894 77.026 27.3442Z"
            fill="#3A2A76" />
            <path d="M80.7207 28.0586V33.7488H81.3365H81.9523L81.977 29.7336L82.0016 25.7431L83.2825 29.6843C84.4895 33.4039 84.5881 33.6256 85.2285 33.6995L85.8936 33.7734V28.1078V22.4176H85.2778H84.662L84.6373 26.4082L84.6127 30.4233L83.3318 26.4821C82.1248 22.7379 82.0262 22.5408 81.3858 22.4669L80.7207 22.393V28.0586Z"
            fill="#3A2A76" />
            <path d="M88.5049 22.8857C88.2832 23.132 87.9876 23.6986 87.8644 24.1666C87.5442 25.2751 87.5442 31.1623 87.8644 32.3201C88.3325 33.9705 90.0814 34.5616 91.0174 33.3793C91.4855 32.7881 91.5101 32.7881 91.6333 33.2561C91.7072 33.5271 91.9289 33.7488 92.1506 33.7488C92.4954 33.7488 92.5447 33.33 92.5447 30.7928V27.8369H91.313C90.2538 27.8369 90.0814 27.9108 90.0814 28.3295C90.0814 28.699 90.2538 28.8222 90.7218 28.8222C91.3623 28.8222 91.3623 28.8222 91.2638 30.5711C91.1899 31.9259 91.0667 32.3939 90.6972 32.6649C90.1307 33.0837 90.0321 33.0837 89.4409 32.6649C89.0222 32.3447 88.9729 31.9259 88.899 28.8961C88.8005 25.2751 88.9975 23.9695 89.6626 23.5508C90.2538 23.1813 90.9189 23.6493 91.0174 24.4868C91.0913 25.1519 91.2391 25.2258 91.9042 24.9795C92.4461 24.7578 92.3969 23.8463 91.7811 23.0581C91.3623 22.5162 91.0667 22.4176 90.106 22.4176C89.2685 22.4176 88.8005 22.5408 88.5049 22.8857Z"
            fill="#3A2A76" />
            <path d="M94.5154 28.0832V33.7487H96.6092C98.5305 33.7487 98.703 33.6995 98.703 33.2561C98.703 32.8127 98.5305 32.7634 97.225 32.7634H95.747V30.6696V28.5758H96.9787C98.0379 28.5758 98.2103 28.5019 98.2103 28.0832C98.2103 27.6644 98.0379 27.5905 96.9787 27.5905H95.747V25.6199V23.6493H97.1018C98.3827 23.6493 98.4566 23.6246 98.4566 23.0335C98.4566 22.4176 98.432 22.4176 96.486 22.4176H94.5154V28.0832Z"
            fill="#3A2A76" />
            <path d="M103.014 23.0088C102.25 23.7725 102.078 25.1026 102.201 29.1424C102.299 32.591 102.497 33.2561 103.556 33.7241C104.59 34.1921 105.576 34.0444 106.339 33.3054C106.93 32.6895 107.054 32.3447 107.201 30.6696C107.596 26.5806 107.029 22.9842 105.97 22.5654C105.009 22.2206 103.605 22.4176 103.014 23.0088ZM105.6 23.871C105.748 24.1419 105.847 26.0387 105.847 28.2803C105.847 31.8274 105.797 32.2462 105.379 32.6156C104.664 33.2561 103.95 32.9112 103.605 31.8028C103.211 30.4972 103.408 24.339 103.851 23.8217C104.295 23.2552 105.28 23.3044 105.6 23.871Z"
            fill="#3A2A76" />
            <path d="M109.049 28.0832V33.7487H109.665H110.28V31.1623V28.5758H111.512C112.571 28.5758 112.744 28.5019 112.744 28.0832C112.744 27.6644 112.571 27.5905 111.512 27.5905H110.28V25.6199V23.6493H111.635C112.916 23.6493 112.99 23.6246 112.99 23.0335C112.99 22.4176 112.965 22.4176 111.019 22.4176H109.049V28.0832Z"
            fill="#3A2A76" />
            <path d="M116.685 28.0586V33.7487H118.064C120.183 33.7487 120.971 33.1576 121.242 31.384C121.415 30.1277 120.922 28.5512 120.232 28.2064L119.715 27.96L120.257 27.5413C121.291 26.753 121.242 24.0434 120.183 23.0827C119.912 22.8364 119.074 22.5901 118.212 22.5162L116.685 22.3437V28.0586ZM119.641 24.1173C120.01 24.8317 119.937 26.4082 119.493 27.0486C119.296 27.3442 118.853 27.5905 118.508 27.5905C117.941 27.5905 117.917 27.5413 117.917 25.6199V23.6493H118.656C119.124 23.6493 119.469 23.8217 119.641 24.1173ZM119.247 28.4773C120.084 28.7975 120.306 31.5564 119.592 32.4432C119.444 32.6156 119.025 32.7634 118.631 32.7634H117.917V30.5465C117.917 28.5266 117.966 28.3295 118.385 28.3295C118.656 28.3295 119.025 28.4034 119.247 28.4773Z"
            fill="#3A2A76" />
            <path d="M122.597 28.0832V33.7487H123.213H123.829V31.1623V28.5758H125.06H126.292V31.1623V33.7487H126.908H127.523V28.0832V22.4176H126.908H126.292V25.0041V27.5905H125.06H123.829V25.0041V22.4176H123.213H122.597V28.0832Z"
            fill="#3A2A76" />
            <path d="M129.79 27.6152L129.864 32.8127L130.553 33.4039C131.686 34.3892 133.559 34.069 134.199 32.7881C134.445 32.3447 134.568 30.6943 134.618 27.2703L134.716 22.4176H134.076H133.435V26.8269C133.435 29.3395 133.312 31.5318 133.164 31.9752C132.82 33.0098 132.007 33.2561 131.415 32.5171C131.021 32.0244 130.972 31.4333 130.972 27.1964V22.4176H130.332H129.716L129.79 27.6152Z"
            fill="#3A2A76" />
            <path d="M135.652 23.0335C135.652 23.5507 135.776 23.6493 136.391 23.6493H137.13V28.699V33.7487H137.746H138.362V28.699V23.6493H139.224C139.988 23.6493 140.086 23.5754 140.086 23.0335C140.086 22.4176 140.062 22.4176 137.869 22.4176C135.677 22.4176 135.652 22.4176 135.652 23.0335Z"
            fill="#3A2A76" />
            <path d="M141.219 27.6398C140.727 30.5218 140.234 33.0837 140.185 33.3054C140.086 33.6502 140.209 33.7487 140.677 33.7487C141.318 33.7487 141.416 33.5763 141.687 31.8274L141.86 30.7682L142.993 30.8421L144.151 30.916L144.372 32.32C144.569 33.6502 144.619 33.7487 145.234 33.7487H145.9L144.963 28.6251C143.732 21.8018 143.904 22.4176 142.968 22.4176H142.155L141.219 27.6398ZM143.535 27.3442L143.954 29.8075H142.968C142.081 29.8075 142.008 29.7582 142.131 29.2409C142.205 28.9453 142.402 27.7876 142.574 26.6791C142.746 25.546 142.944 24.6839 142.993 24.7578C143.067 24.8317 143.313 25.9894 143.535 27.3442Z"
            fill="#3A2A76" />
            <path d="M147.23 28.0586V33.7488H147.846H148.461L148.486 29.7336L148.511 25.7431L149.792 29.6843C150.999 33.4039 151.097 33.6256 151.738 33.6995L152.403 33.7734V28.1078V22.4176H151.787H151.171L151.146 26.4082L151.122 30.4233L149.841 26.4821C148.634 22.7379 148.535 22.5408 147.895 22.4669L147.23 22.393V28.0586Z"
            fill="#3A2A76" />
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
        <div class="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
        id="navbar-search">
          <ul class="flex flex-col p-4 xl:p-0 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-white bg-custom-1 rounded xl:bg-transparent xl:text-custom-1 xl:p-0 xl:dark:text-custom-2"
              aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 xl:dark:hover:text-custom-2 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Stocks
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                News
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Announcements
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Corporate Events
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
                Brokers
              </a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-black opacity-45 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-custom-1 xl:p-0 dark:text-white xl:dark:hover:text-custom-2 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700">
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
