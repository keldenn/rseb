import React, { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "tailwindcss/tailwind.css";

const logos = [
  { url: "https://rsebl.org.bt/online/assets/img/companies/BBPL.png", link: "https://example.com/bbpl" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/BCCL.png", link: "https://example.com/bccl" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/BFAL.png", link: "https://example.com/bfal" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/BIL.png", link: "https://example.com/bil" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/BNB.png", link: "https://example.com/bnb" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/BPCL.png", link: "https://example.com/bpcl" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/BTCL.png", link: "https://example.com/btcl" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/KCL.png", link: "https://example.com/kcl" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/RICB.png", link: "https://example.com/ricb" },
  { url: "https://rsebl.org.bt/online/assets/img/companies/TBL.png", link: "https://example.com/tbl" },
];

const LogoSection = () => {
  const controls = useAnimation();
  const animationRef = useRef({ xOffset: 0 });

  const handleMouseEnter = () => {
    // Stop the animation and store the current position
    controls.stop();
  };

  const handleMouseLeave = () => {
    // Continue the animation from the last known position
    controls.start({ 
      x: [animationRef.current.xOffset, -1000], 
      transition: { repeat: Infinity, duration: 10, ease: "linear" } 
    });
  };

  return (
    <div className="overflow-hidden relative xl:container xl:mx-auto h-fit p-5">
      <motion.div
        className="flex w-max"
        animate={controls}
        initial={{ x: 0 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onAnimationUpdate={({ x }) => {
          // Update the current position of the animation on each frame
          animationRef.current.xOffset = x;
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center mx-4 relative group"
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={logo.url}
              alt={`Logo ${index + 1}`}
              className="h-16 w-16 object-contain"
            />
            <a
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 text-white font-medium transition-opacity group-hover:opacity-100"
            >
              Visit
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSection;
