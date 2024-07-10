"use client";
import React, { ChangeEvent, useState } from "react";

import { APP_TYPES } from "@/commons";

import ProjectCard from "./project-card";

const getFilteredListBySearch = ({
  list,
  search,
}: {
  list: APP_TYPES.IProject[];
  search: string;
}) =>
  search
    ? list.filter(
        (item) => item.title.toLowerCase().search(search.toLowerCase()) !== -1,
      )
    : list;

const getFilteredList = ({
  list,
  publicStatus,
  status,
  increasing,
}: {
  list: APP_TYPES.IProject[];
  publicStatus: string;
  status: string;
  increasing: boolean;
}): APP_TYPES.IProject[] => {
  const newList =
    status !== "" || publicStatus !== ""
      ? list.filter((item) => {
          if (status === "") {
            return `${item.publicStatus}` === publicStatus;
          }
          if (publicStatus === "") {
            return `${item.status}` === status;
          }
          return (
            `${item.publicStatus}` === publicStatus &&
            `${item.status}` === status
          );
        })
      : list;
  return increasing ? [...newList].reverse() : newList;
};

const AdminProjects = ({ list }: { list: APP_TYPES.IProject[] }) => {
  const [publicStatus, setPublicStatus] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [increasing, setIncreasing] = useState(true);
  const [search, setSearch] = useState("");

  const changePublicStatus = (event: ChangeEvent) => {
    const currentPublicStatus = event.target as HTMLSelectElement;
    setPublicStatus(currentPublicStatus.value);
  };

  const changeStatus = (event: ChangeEvent) => {
    const currentStatus = event.target as HTMLSelectElement;
    setStatus(currentStatus.value);
  };

  const changeIncreasing = (event: ChangeEvent) => {
    const currentStatus = event.target as HTMLSelectElement;
    if (currentStatus.value === "new") {
      !increasing && setIncreasing(true);
    } else {
      increasing && setIncreasing(false);
    }
  };

  const changeSearch = (event: ChangeEvent) => {
    const currentSearch = event.target as HTMLInputElement;
    setSearch(currentSearch.value);
  };

  return (
    <>
      <div className="w-full flex gap-5">
        <select className="w-1/5" name="category" onChange={changeStatus}>
          <option value="">Статус</option>
          <option value="true">Профінансований</option>
          <option value="false">Потребує фінансування</option>
        </select>
        <select className="w-1/5" name="state" onChange={changePublicStatus}>
          <option value="">Стан</option>
          <option value="true">Опубліковані</option>
          <option value="false">Чернетки</option>
        </select>
        <select className="w-1/5" name="date" onChange={changeIncreasing}>
          <option value="">Дата</option>
          <option value="new">Спочатку новіші</option>
          <option value="old">Спочатку старіші</option>
        </select>
        <input
          className="flex-1"
          type="text"
          placeholder="Пошук"
          onChange={changeSearch}
          value={search}
        />
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col text-base border border-gray-500 list">
          <li className="w-full flex border-b border-gray-500 bg-light-blue">
            <p className="w-2/5 p-2 border-r border-gray-500">Заголовок</p>
            <p className="w-1/5 p-2 border-r border-gray-500">Стан</p>
            <p className="w-1/5 p-2 border-r border-gray-500">Статус</p>
            <p className="w-1/5 p-2">Вид./Ред.</p>
          </li>
          {getFilteredList({
            list: getFilteredListBySearch({ list, search }),
            publicStatus,
            status,
            increasing,
          }).map((item) => (
            <li
              key={item._id}
              className="w-full flex border-b border-gray-500 bg-white"
            >
              <ProjectCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminProjects;
