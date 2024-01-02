"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import { useNewsList } from "@/hooks";

const OneNew = () => {
  const { data, isLoading } = useNewsList(API_URL.NEWS);
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");

  const oneNew = data?.news.find((item) => item._id === newId);

  return <div>{!isLoading && <p>{oneNew?.title}</p>}</div>;
};

export default OneNew;
