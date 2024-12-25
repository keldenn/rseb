import React, { useState } from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: "BBPL", url: "https://rsebl.org.bt/online/assets/img/companies/BBPL.png", link: "https://example.com/bbpl" },
  { name: "BCCL", url: "https://rsebl.org.bt/online/assets/img/companies/BCCL.png", link: "https://example.com/bccl" },
  { name: "BFAL", url: "https://rsebl.org.bt/online/assets/img/companies/BFAL.png", link: "https://example.com/bfal" },
  { name: "BIL", url: "https://rsebl.org.bt/online/assets/img/companies/BIL.png", link: "https://example.com/bil" },
  { name: "BNB", url: "https://rsebl.org.bt/online/assets/img/companies/BNB.png", link: "https://example.com/bnb" },
  { name: "BPCL", url: "https://rsebl.org.bt/online/assets/img/companies/BPCL.png", link: "https://example.com/bpcl" },
  { name: "BTCL", url: "https://rsebl.org.bt/online/assets/img/companies/BTCL.png", link: "https://example.com/btcl" },
  { name: "KCL", url: "https://rsebl.org.bt/online/assets/img/companies/KCL.png", link: "https://example.com/kcl" },
  { name: "RICB", url: "https://rsebl.org.bt/online/assets/img/companies/RICB.png", link: "https://example.com/ricb" },
  { name: "TBL", url: "https://rsebl.org.bt/online/assets/img/companies/TBL.png", link: "https://example.com/tbl" },
];

const LogoSection = () => {
  const [hoveredCompany, setHoveredCompany] = useState("");
  const [isPaused, setIsPaused] = useState(false); // State to control animation pause

  return (
    <div className="xl:container xl:mx-auto p-5">
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
          }}
          // whileHover={{
          //   scale: 1.1,
          //   transition: { duration: 0.2 }
          // }}
          animate={{ translateX: isPaused ? "1%" : "-10%" }} // Stop animation when paused
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map(({ name, url, link }, idx) => (
                <motion.div
                
                  key={idx}
                  className="relative h-44 w-20 flex-none"
                  onMouseEnter={() => {
                    setHoveredCompany(name); // Set hovered company name
                    setIsPaused(true); // Pause animation
                  }}
                  onMouseLeave={() => {
                    setHoveredCompany(""); // Clear company name
                    setIsPaused(false); // Resume animation
                  }}
                >
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.6,
                      transformOrigin: "center", // Anchor scaling to the center
                    }}
                    className="h-full w-full"
                  >
                    <img
                      src={url}
                      alt={`Logo of ${name}`}
                      className="h-full w-full object-contain"
                    />
                  </motion.a>
                  {/* Tooltip */}
                  {hoveredCompany === name && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                    >
                      {name}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSection;
