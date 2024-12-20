import React from "react";
import { motion } from "framer-motion";

const LogoSection = () => {
  const logos = [
    "https://rsebl.org.bt/online/assets/img/companies/BBPL.png",
    "https://rsebl.org.bt/online/assets/img/companies/BCCL.png",
    "https://rsebl.org.bt/online/assets/img/companies/BFAL.png",
    "https://rsebl.org.bt/online/assets/img/companies/BIL.png",
    "https://rsebl.org.bt/online/assets/img/companies/BNB.png",
    "https://rsebl.org.bt/online/assets/img/companies/BPCL.png",
    "https://rsebl.org.bt/online/assets/img/companies/BTCL.png",
    "https://rsebl.org.bt/online/assets/img/companies/KCL.png",
    "https://rsebl.org.bt/online/assets/img/companies/RICB.png",
    "https://rsebl.org.bt/online/assets/img/companies/TBL.png",
  ];

  const scrollAnimation = {
    animate: {
      x: [0, -100 * logos.length], // Moves the logos across the screen
    },
    transition: {
      repeat: Infinity, // Infinite loop
      repeatType: "loop",
      duration: 10, // Animation duration
      ease: "linear", // Smooth scrolling
    },
  };

  return (
    <div className="w-full md:container md:mx-auto overflow-hidden bg-white py-6">
      <motion.div
        className="flex gap-8"
        style={{ display: "flex", whiteSpace: "nowrap" }}
        animate={scrollAnimation.animate}
        transition={scrollAnimation.transition}
      >
        {/* Render the logos twice for seamless looping */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="h-20 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSection;
