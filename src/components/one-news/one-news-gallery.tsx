import "react-image-gallery/styles/css/image-gallery.css";
import "./one-news-gallery.css";

import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
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
            renderLeftNav={(onClick) => (<button onClick={onClick} className="leftArrowBtn"><BsArrowLeftCircle size="33px" color="#fff" /></button>)}
            renderRightNav={(onClick) =>(<button onClick={onClick} className="rightArrowBtn"><BsArrowRightCircle size="33px" color="#fff"/></button>)}
            thumbnailPosition={(isDesktop && "right") || (isTablet && "bottom")||(isMobile && "bottom")}     
        />
        
    )
}
export default Gallery;
