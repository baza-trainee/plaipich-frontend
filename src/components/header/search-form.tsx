import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
} from "react";
import { TbSearch } from "react-icons/tb";

import { NAVIGATION } from "@/commons/constants";
import { INews, IProject } from "@/commons/types";

import { Link } from "../link/link";

interface ISearchForm {
  close?: MouseEventHandler;
  lng: "en" | "uk";
  className: string;
  query: string;
  findResult: FormEventHandler;
  changeInput: ChangeEventHandler;
  searchList: (INews | IProject)[];
}

export const SearchForm = ({
  close = () => {},
  findResult,
  changeInput,
  query,
  lng,
  className,
  searchList,
}: ISearchForm) => {
  return (
    <div className={className} onMouseLeave={close}>
      <form onSubmit={findResult}>
        <button
          type="submit"
          className="text-white absolute left-0 top-1 px-[10px] py-2 border-none"
        >
          <TbSearch size="24px" color="black" />
        </button>

        <input
          type="text"
          className="block w-full  ps-12 pe-2 text-md py-2 border rounded-lg text-gray-500 focus:outline-dark-blue"
          placeholder={lng === "uk" ? "Пошук" : "Search"}
          value={query}
          name="query"
          onChange={changeInput}
          autoFocus
          required
          autoComplete="on"
        />
      </form>
      {query && searchList.length > 0 && (
        <div className="absolute text-left flex flex-col max-w-[400px] gap-1 top-12 right-0 bg-white text-black text-5">
          {searchList.map((item: any) => {
            if (item.status) {
              return (
                <Link
                  key={item._id}
                  href={`/${lng}/${NAVIGATION.project}${item._id}`}
                  className="text-sm p-2 font-bold hover:bg-light-blue hover:cursor-pointer transition"
                >
                  {item.title}
                </Link>
              );
            } else {
              return (
                <Link
                  key={item._id}
                  href={`/${lng}/${NAVIGATION.oneNew}${item._id}`}
                  className="text-sm p-2 font-bold hover:bg-light-blue hover:cursor-pointer transition"
                >
                  {item.title}
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};