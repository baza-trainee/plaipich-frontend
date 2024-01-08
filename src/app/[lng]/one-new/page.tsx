"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import OneNews from "@/components/one-news/oneNews";
import { useNewsList } from "@/hooks";

const OneNew = () => {
  const { data, isLoading } = useNewsList(API_URL.NEWS);
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");

  const oneNew = data?.news.find((item) => item._id === newId);

    return <div className="bg-white text-black">{!isLoading && <div>
        
        <OneNews oneNew={oneNew} /></div>
    }
    </div>;
};

export default OneNew;