import React from "react";

export const NewsList = ({
  title,
  btnText,
}: {
  title: string;
  btnText: string;
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <button>{btnText}</button>
    </div>
  );
};
