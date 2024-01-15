"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import OneNews from "@/components/one-news/oneNews";
import { useOneNew } from "@/hooks";

const OneNew = () => {
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");
  const { data, isLoading } = useOneNew(`${API_URL.NEWS}/${newId}`);
  
  return (
    <div className="bg-white text-black">
      {!isLoading && (
        <div>
          <OneNews oneNew={data} />
        </div>
      )}
    </div>
  );
};

export default OneNew;
