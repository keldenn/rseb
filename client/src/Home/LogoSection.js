import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="xl:container xl:mx-auto p-5">

      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: isHovered ? -1 : '-10%' }}
          onHoverStart={() => setIsHovered(true)} // Stop animation when hover starts
          onHoverEnd={() => setIsHovered(false)}   // Resume animation when hover ends
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map(({ url, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.6 }}
                  className="h-44 w-20 flex-none" // Adjusted size
                >
                  <img
                    src={url}
                    alt={`Logo ${idx + 1}`}
                    className="h-full w-full object-contain" // Ensure the logos fit within the container
                  />
                </motion.a>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSection;
