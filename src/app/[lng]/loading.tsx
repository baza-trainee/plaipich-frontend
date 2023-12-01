'use client'
import Lottie from "lottie-react";
import React from "react";

import newAnime from "../../../public/animation/new-anime.json";

const Loader = () => {
  return (
    <div className="loader w-full h-[90vh] bg-black flex justify-center items-center">
      <Lottie animationData={newAnime} style={{width:'300px', height:'300px'}} />
    </div>
  );
};

export default Loader;
