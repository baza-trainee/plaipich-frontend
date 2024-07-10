"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

import { IProject } from "@/commons/types";

import DeleteModal from "../all-news/delete-new";

const ProjectCard = ({ item }: { item: IProject }) => {
  const [openModal, setOpen] = useState(false);

  return (
    <>
      <p className="w-2/5 p-2 border-r border-gray-500">{item.title}</p>
      <p className="w-1/5 p-2 border-r border-gray-500">
        {item.publicStatus ? "Опубліковано" : "Чернетка"}
      </p>
      <p className="w-1/5 p-2 border-r border-gray-500">
        {item.status ? "Профінансований" : "Потребує фінансування"}
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
        <Link
          className="border-none px-2 hover:text-green hover:scale-125"
          href={`/admin/update-project/${item._id}`}
        >
          <HiOutlinePencil size="1.2em" />
        </Link>
      </div>
      {openModal && (
        <DeleteModal
          id={item._id || ""}
          title={item.title}
          type="projects"
          close={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ProjectCard;
