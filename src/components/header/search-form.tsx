import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
} from "react";
import { TbSearch } from "react-icons/tb";

interface ISearchForm {
  close?: MouseEventHandler;
  lng: "en" | "uk";
  className: string;
  query: string;
  findResult: FormEventHandler;
  changeInput: ChangeEventHandler;
}

export const SearchForm = ({
  close = () => {},
  findResult,
  changeInput,
  query,
  lng,
  className,
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
      {/* <ul className=" absolute left-0 top-12 w-full bg-white text-black">
              {query && openAutocomplete ? (
                <li
                  className="p-2 text-sm font-bold hover:bg-light-blue hover:transition-all hover:cursor-pointer"
                  onClick={itemClickHandler}
                >
                  {query}
                </li>
              ) : null}
            </ul> */}
    </div>
  );
};
