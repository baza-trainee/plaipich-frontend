"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

import { API_URL } from "@/commons/constants";
import { useOneProject } from "@/hooks/use-one-project";

const OneProject = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const { data, isLoading } = useOneProject(`${API_URL.PROJECTS}/${projectId}`);
  console.log(data);

  return <div>{data && !isLoading && <p>{data.enTitle}</p>}</div>;
};

export default OneProject;
