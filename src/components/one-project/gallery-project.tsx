"use client";
import "react-image-gallery/styles/css/image-gallery.css";
import "../one-news/one-news-gallery.css";

import Image from "next/image";
import React, { useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import { useMediaQuery } from "react-responsive";

import { VideoPlayer } from "@/components/one-project/video-player";
import { Spiral } from "@/components/spiral/spiral";

interface GalleryProps {
  title: string;
  photos: string[];
  videos?: string[];
}
export const Gallery = ({ title, photos, videos }: GalleryProps) => {
  const [openSlider, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const imgArr = photos?.map((path) => ({
    original: path,
    thumbnail: path,
  }));

  const close = () => {
    setOpen(false);
  };

  const open = () => {
    setOpen(true);
  };

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-desktop container text-center">
        <div className="flex justify-center lg:mb-16 mb-8 items-center flex-row">
          <Spiral className="stroke-link-water w-[35px] h-[27px] lg:w-[76px] lg:h-[61px] mr-3 lg:mr-4" />
          <h2 className="h1">{title}</h2>
        </div>
        <div className="w-2/3 mx-auto">
          {videos?.map((video, index) => (
            <VideoPlayer key={index} url={video} />
          ))}
        </div>
        {openSlider ? (
          <div className="relative w-full border-t border-gray-500 px-4 pb-4 pt-10">
            <ImageGallery
              items={imgArr}
              startIndex={slide}
              showIndex={false}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={!isMobile}
              showBullets={isMobile}
              autoPlay={isMobile}
              slideInterval={2000}
              thumbnailPosition={(isDesktop && "right") || "bottom"}
            />
            <button
              onClick={close}
              className="absolute top-1 right-2 text-white border-none p-2"
            >
              <IoClose />
            </button>
          </div>
        ) : (
          <ul className="grid lg:grid-cols-3 grid-cols-2 place-items-center lg:gap-8 gap-4">
            {photos?.map((photo, index) => (
              <li
                className="w-full relative"
                key={index}
                onClick={() => {
                  setSlide(index);
                  open();
                }}
              >
                <div className="absolute transition opacity-0 left-0 cursor-pointer hover:opacity-100 w-full h-full z-10 bg-black/80">
                  <FaExpandArrowsAlt className="text-white text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <Image
                  width={417}
                  height={250}
                  src={photo}
                  alt={photo}
                  className="min-w-full min-h-full object-cover"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
