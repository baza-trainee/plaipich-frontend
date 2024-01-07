import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, MouseEvent } from "react";
import { TbSearch } from "react-icons/tb";

import { NAVIGATION } from "@/commons/constants";
import { INews, IProject } from "@/commons/types";

import { Link } from "../link/link";

interface ISearchForm {
  close?: Function;
  lng: "en" | "uk";
  className: string;
  query: string;
  changeInput: Function;
  searchList: Array<INews | IProject>;
}

export const SearchForm = ({
  close = () => {},
  changeInput,
  query,
  lng,
  className,
  searchList,
}: ISearchForm) => {
  const router = useRouter();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onChange = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    changeInput(input.value.trim());
  };

  const onClickLink = (event: MouseEvent) => {
    event.preventDefault();
    const link = event.target as HTMLLinkElement;
    changeInput("");
    close();
    router.push(link.href);
  };

  const onClickClose = () => {
    close();
  };

  return (
    <div className={className} onMouseLeave={onClickClose}>
      <form onSubmit={onSubmit}>
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
          onChange={onChange}
          autoFocus
          required
          autoComplete="on"
        />
      </form>
      {query && searchList.length > 0 && (
        <div className="absolute text-left flex flex-col max-w-[400px] gap-1 top-12 right-0 bg-white text-black text-5">
          {searchList.map((item) => {
            if ("status" in item) {
              return (
                <Link
                  key={item._id}
                  href={`/${lng}/${NAVIGATION.project}${item._id}`}
                  className="text-sm p-2 font-bold hover:bg-light-blue hover:cursor-pointer transition"
                  onClick={onClickLink}
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
                  onClick={onClickLink}
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
