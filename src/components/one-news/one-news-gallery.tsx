import "react-image-gallery/styles/css/image-gallery.css";
import "./one-news-gallery.css";

import React from "react";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import ImageGallery from "react-image-gallery";
import { useMediaQuery } from "react-responsive";

const Gallery = ({ images }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 1440 });
    
   const imgArr = images.map((path) => ({
  original: path,
  thumbnail: path,
   }));    
    
    return (
        <ImageGallery items={imgArr}
            showIndex={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showThumbnails={!isMobile}
            showBullets={isMobile}
            autoPlay={isMobile}
            slideInterval={2000}
            renderLeftNav={(onClick) => (<button onClick={onClick} className="leftArrowBtn"><TbArrowLeft size="24px" color="#0A4B70" /></button>)}
            renderRightNav={(onClick) =>(<button onClick={onClick} className="rightArrowBtn"><TbArrowRight size="24px" color="#0A4B70"/></button>)}
            thumbnailPosition={(isDesktop && "right") || (isTablet && "bottom")||(isMobile && "bottom")}     
        />
        
    )
}
export default Gallery;
