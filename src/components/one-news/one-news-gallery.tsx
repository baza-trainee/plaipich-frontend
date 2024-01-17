import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./one-news-gallery.css";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Gallery = ({ images }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const updateMediaQuery = () => {
      setIsMobile(window.matchMedia("(max-width:640px)").matches);
    };
    updateMediaQuery();
    window.addEventListener("resize", updateMediaQuery);
    return () => {
      window.removeEventListener("resize", updateMediaQuery);
    };
  }, []);

  //     const getThumb = (images) => {
  //         images.map(item => {
  //     return <Image src={item.thumbnail}/>
  // })}

  return (
    <div className="text-black">
      <Carousel
        showThumbs={!isMobile}
        thumbPosition={isMobile ? "none" : "right"}
        showIndicators={isMobile}
        showStatus={false}
        centerMode={isMobile}
        autoPlay
        infiniteLoop
        interval={7000}
      >
        {images.map((item) => (
          <div className="slide-box" key={item._id}>
            <div className="image-box">
              <Image
                src={item.original}
                alt={item.descr}
                width={1000}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Gallery;
