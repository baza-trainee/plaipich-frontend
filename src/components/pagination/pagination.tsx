"use client";
import React, { MouseEvent } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const CircularPagination = ({
  pages,
  page,
  setPage,
}: {
  pages: number;
  page: number;
  setPage: Function;
}) => {
  const next = () => {
    if (page === pages) return;
    setPage(page + 1);
  };

  const prev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handlePageClick = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    const currentPage = Number(element.id);
    setPage(currentPage);
  };

  const PageButton = (numberForBtn: number, isActive: boolean) => {
    return (
      <button
        key={numberForBtn}
        id={`${numberForBtn}`}
        className={`w-[35px] h-[35px] md:w-[52px] md:h-[52px] flex justify-center items-center rounded-full border border-horizon ${
          isActive ? "bg-horizon text-white" : "bg-transparent"
        }`}
        onClick={handlePageClick}
      >
        {numberForBtn}
      </button>
    );
  };

  const getPages = (pages: number, page: number) => {
    const btnPages = [];
    if (pages > 5) {
      if (![1, 2, pages, pages - 1].includes(page)) {
        btnPages.push(
          PageButton(1, false),
          <p key={"a1"}>...</p>,
          PageButton(page, true),
          <p key={"a2"}>...</p>,
          PageButton(pages, false),
        );
      } else {
        [1, 2].includes(page)
          ? btnPages.push(
              PageButton(1, page === 1),
              PageButton(2, page === 2),
              <p key={"a1"}>...</p>,
              PageButton(pages, pages === page),
            )
          : btnPages.push(
              PageButton(1, page === 1),
              <p key={"a1"}>...</p>,
              PageButton(pages - 1, page === pages - 1),
              PageButton(pages, page === pages),
            );
      }
    } else {
      for (let index = 1; index < pages + 1; index++) {
        btnPages.push(PageButton(index, index === page));
      }
    }
    return btnPages;
  };

  return (
    <div className="flex w-full justify-center items-center gap-[20px] text-base md:text-md font-medium">
      <button
        className="border-none disabled:opacity-50"
        onClick={prev}
        disabled={page === 1}
      >
        <GrFormPrevious size="2em" />
      </button>
      <div className="flex justify-between items-center gap-4">
        {getPages(pages, page)}
      </div>
      <button
        className="border-none disabled:opacity-50"
        onClick={next}
        disabled={page === pages}
      >
        <GrFormNext size="2em" />
      </button>
    </div>
  );
};
