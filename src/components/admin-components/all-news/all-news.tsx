"use client";
import React, { ChangeEvent, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

import { APP_CONST, APP_TYPES } from "@/commons";

const getFilteredListBySearch = ({
  list,
  search,
}: {
  list: APP_TYPES.INews[];
  search: string;
}) =>
  search
    ? list.filter(
        (item) =>
          item.enTitle.toLowerCase().search(search.toLowerCase()) !== -1 ||
          item.title.toLowerCase().search(search.toLowerCase()) !== -1
      )
    : list;

const getFilteredList = ({
  list,
  category,
  status,
  increasing,
}: {
  list: APP_TYPES.INews[];
  category: string | undefined;
  status: string;
  increasing: boolean;
}): APP_TYPES.INews[] => {
  const newList =
    status !== "" || category
      ? list.filter((item) =>
          category
            ? (status === "" || `${item.publicStatus}` === status) &&
              item.category.uk === category
            : `${item.publicStatus}` === status
        )
      : list;
  return increasing ? newList : [...newList].reverse();
};

const AdminNews = ({ list }: { list: APP_TYPES.INews[] }) => {
  const [category, setCategory] = useState<string>();
  const [status, setStatus] = useState<string>("");
  const [increasing, setIncreasing] = useState(true);
  const [search, setSearch] = useState("");

  const changeCategory = (event: ChangeEvent) => {
    const currentCategory = event.target as HTMLSelectElement;
    setCategory(currentCategory.value);
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
      <div className="flex gap-8">
        <select className="w-[150px]" name="category" onChange={changeCategory}>
          <option value="">Категорії</option>
          {APP_CONST.category.ukCategory.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select className="w-[150px]" name="state" onChange={changeStatus}>
          <option value="">Стан</option>
          <option value="true">Опубліковані</option>
          <option value="false">Чернетки</option>
        </select>
        <select className="w-[150px]" name="date" onChange={changeIncreasing}>
          <option value="">Дата</option>
          <option value="new">Спочатку новіші</option>
          <option value="old">Спочатку старіші</option>
        </select>
        <form>
          <input
            className="flex-1"
            type="text"
            placeholder="Пошук"
            onChange={changeSearch}
            value={search}
          />
        </form>
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col text-base border border-gray-500 list">
          <li className="w-full flex border-b border-gray-500 bg-light-blue">
            <p className="w-2/6 p-2 border-r border-gray-500">Заголовок</p>
            <p className="w-1/6 p-2 border-r border-gray-500">Стан</p>
            <p className="w-1/6 p-2 border-r border-gray-500">Категорія</p>
            <p className="w-1/6 p-2 border-r border-gray-500">Дата</p>
            <p className="w-1/6 p-2">Вид./Ред.</p>
          </li>
          {getFilteredList({
            list: getFilteredListBySearch({ list, search }),
            category,
            status,
            increasing,
          }).map((item) => (
            <li
              key={item._id}
              className="w-full flex border-b border-gray-500 bg-white hover:text-dark-blue hover:bg-gray-200"
            >
              <p className="w-2/6 p-2 border-r border-gray-500">{item.title}</p>
              <p className="w-1/6 p-2 border-r border-gray-500">
                {item.publicStatus ? "Опубліковано" : "Чернетка"}
              </p>
              <p className="w-1/6 p-2 border-r border-gray-500">
                {item.category.uk}
              </p>
              <p className="w-1/6 p-2 border-r border-gray-500">
                {item.date.toLocaleString().slice(0, 10)}
              </p>
              <div className="w-1/6 p-2 flex justify-center items-center gap-2">
                <button className="border-none px-2">
                  <HiOutlineTrash size="1.2em" />
                </button>
                <button className="border-none px-2">
                  <HiOutlinePencil size="1.2em" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminNews;
