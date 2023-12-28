import React from "react";

import { NotFound } from "@/components";

const NotFoundPage = ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return <NotFound lng={params.lng} />;
};

export default NotFoundPage;
