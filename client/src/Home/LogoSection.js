import React, { useState } from "react";
import { motion } from "framer-motion";

const LogoSection = () => {
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

  const [isHovered, setIsHovered] = useState(false);

  const scrollAnimation = {
    animate: {
      x: isHovered ? 0 : [0, -100 * logos.length], // Stops animation on hover
    },
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    },
  };

  return (
    <div className="w-full xl:container xl:mx-auto overflow-hidden bg-white py-6">
      <motion.div
        className="flex gap-8"
        style={{ display: "flex", whiteSpace: "nowrap" }}
        animate={scrollAnimation.animate}
        transition={scrollAnimation.transition}
      >
        {/* Render the logos twice for seamless looping */}
        {logos.concat(logos).map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)} // Pause on hover
            onMouseLeave={() => setIsHovered(false)} // Resume on hover out
          >
            <img
              src={logo.url}
              alt={`Company logo ${index + 1}`}
              className="h-20 w-auto object-contain cursor-pointer"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSection;
