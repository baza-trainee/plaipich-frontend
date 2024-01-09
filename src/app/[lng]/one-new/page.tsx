"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import { useOneNew } from "@/hooks";

const OneNew = () => {
  const searchParams = useSearchParams();
  const newId = searchParams.get("id");
  const { data, isLoading } = useOneNew(`${API_URL.NEWS}/${newId}`);

  return <div>{!isLoading && <p>{data?.title}</p>}</div>;
};

export default OneNew;
