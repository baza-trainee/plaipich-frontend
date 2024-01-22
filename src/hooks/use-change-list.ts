import { useEffect } from "react";

import { INews } from "@/commons/types";

type TChangeList = {
  categoryList: string[];
  reverse: boolean;
  setShowNews: Function;
  newsList: INews[];
  lng: "en" | "uk";
};

type TMediaRule = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  setLimit: Function;
  showCategory: boolean;
  setShowCategory: Function;
};

export const useMediaRule = ({
  isMobile,
  isTablet,
  isDesktop,
  setLimit,
  showCategory,
  setShowCategory,
}: TMediaRule) =>
  useEffect(() => {
    if (isMobile) {
      setLimit(3);
      showCategory && setShowCategory(false);
    }
    if (isTablet) {
      setLimit(4);
      setShowCategory(true);
    }
    if (isDesktop) {
      setLimit(6);
      setShowCategory(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isTablet, isDesktop]);

export const useChangeList = ({
  categoryList,
  reverse,
  setShowNews,
  newsList,
  lng,
}: TChangeList) =>
  useEffect(() => {
    if (categoryList.length === 0) {
      setShowNews(() => (reverse ? [...newsList].reverse() : newsList));
    }
    if (categoryList.length > 0) {
      setShowNews(() => {
        const array = newsList.filter((item) =>
          categoryList.includes(item.category[lng]),
        );
        return reverse ? array.reverse() : array;
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList.length, reverse]);
