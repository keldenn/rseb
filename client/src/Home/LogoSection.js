import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LogoSection = () => {
  const logos = [
    "/path/to/logo1.png",
    "/path/to/logo2.png",
    "/path/to/logo3.png",
    "/path/to/logo4.png",
    "/path/to/logo5.png",
    "/path/to/logo6.png",
    "/path/to/logo7.png",
    "/path/to/logo8.png",
    "/path/to/logo9.png",
    "/path/to/logo10.png",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;

    const animationLoop = () => {
      const firstHalf = containerRef.current.children[0];
      containerRef.current.appendChild(firstHalf.cloneNode(true));
      containerRef.current.removeChild(firstHalf);
      containerRef.current.style.transition = "none";
      containerRef.current.style.transform = "translateX(0)";

      requestAnimationFrame(() => {
        containerRef.current.style.transition = "transform 20s linear";
        containerRef.current.style.transform = `translateX(-${containerWidth}px)`;
      });
    };

    const handleAnimationEnd = () => {
      animationLoop();
    };

    const startAnimation = () => {
      containerRef.current.style.transition = "transform 20s linear";
      containerRef.current.style.transform = `translateX(-${containerWidth}px)`;
      containerRef.current.addEventListener("transitionend", handleAnimationEnd);
    };

    startAnimation();

    return () => {
      containerRef.current.removeEventListener("transitionend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-6">
      <div
        ref={containerRef}
        className="flex"
        style={{ display: "flex", gap: "2rem", whiteSpace: "nowrap" }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="h-20 w-auto object-contain"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`clone-${index}`}
            src={logo}
            alt={`Company logo clone ${index + 1}`}
            className="h-20 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSection;



<div className="w-full overflow-hidden bg-gray-100 py-6">
<motion.div
  ref={containerRef}
  className="flex"
  animate={controls}
  style={{ display: "flex", gap: "2rem" }}
>
  {[...logos, ...logos].map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt={`Company logo ${index + 1}`}
      className="h-20 w-auto object-contain"
    />
  ))}
</motion.div>
</div>