import React from "react";

import { Loader } from "@/components";

const LoadingPage = () => {
  return (
    <div className="loader w-full h-[90vh] bg-black flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default LoadingPage;
