"use client";
import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

import { INews } from "@/commons/types";

import DeleteModal from "./delete-new";

const NewsCard = ({ item }: { item: INews }) => {
  const [openModal, setOpen] = useState(false);

  return (
    <>
      <p className="w-2/6 p-2 border-r border-gray-500">{item.title}</p>
      <p className="w-1/6 p-2 border-r border-gray-500">
        {item.publicStatus ? "Опубліковано" : "Чернетка"}
      </p>
      <p className="w-1/6 p-2 border-r border-gray-500">{item.category.uk}</p>
      <p className="w-1/6 p-2 border-r border-gray-500">
        {item.date.toLocaleString().slice(0, 10)}
      </p>
      <div className="w-1/6 p-2 flex justify-center items-center gap-2">
        <button
          className="border-none px-2 hover:text-red hover:scale-125"
          onClick={() => {
            setOpen(true);
          }}
        >
          <HiOutlineTrash size="1.2em" />
        </button>
        <button
          className="border-none px-2 hover:text-green hover:scale-125"
          onClick={() => {}}
        >
          <HiOutlinePencil size="1.2em" />
        </button>
      </div>
      {openModal && (
        <DeleteModal
          id={item._id || ""}
          title={item.title}
          type="news"
          close={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export default NewsCard;
