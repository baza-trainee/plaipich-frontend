import React from "react";

import OneNews from "@/components/one-news/oneNews";

const OneNew = async({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {

  return (
    <main className="bg-white text-black">     
          <OneNews lng={params.lng} />      
   </main>
  );
};

export default OneNew;
