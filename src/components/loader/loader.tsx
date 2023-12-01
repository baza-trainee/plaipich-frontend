'use client'
import Lottie from "lottie-react";
import React from "react";

import newAnime from "../../../public/animation/new-anime.json";

export const Loader = () => {
  return (
      <Lottie animationData={newAnime} style={{width:'300px', height:'300px'}} />
  );
};
