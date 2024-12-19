import React from 'react'

export default function Carousel() {
  return (
<div
  id="custom-controls-gallery"
  className="relative xl:container xl:mx-auto hidden md:block"
  data-carousel="slide"
>
  <div className="relative h-96 overflow-hidden">
    <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
    <img
        src="../images/banner.png"
        className="absolute object-fill w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt=""
      />
    </div>
    <div
      className="hidden duration-1000 ease-in-out"
      data-carousel-item="active"
    >
     <img
        src="../images/banner1.png"
        className="absolute object-fill w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt=""
      />
    </div>
    <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
    <img
        src="../images/banner.png"
        className="absolute object-fill w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt=""
      />
    </div>
    <div className="hidden duration-1000 ease-in-out" data-carousel-item="">
    <img
        src="../images/banner1.png"
        className="absolute object-fill w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt=""
      />
    </div>
   
  </div>
 
</div>

  )
}
