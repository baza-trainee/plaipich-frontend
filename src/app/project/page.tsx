"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const OneProject = () => {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
    return <div>OneProject - { projectId }</div>;
};

export default OneProject;
