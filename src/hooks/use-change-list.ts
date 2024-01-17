import { useEffect } from "react";

import { INews } from "@/commons/types";

type TChangeList = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  categoryList: string[];
  reverse: boolean;
  setLimit: Function;
  showCategory: boolean;
  setShowCategory: Function;
  setShowNews: Function;
  newsList: INews[];
  lng: "en" | "uk";
};

export const useChangeList = ({
  isMobile,
  isTablet,
  isDesktop,
  categoryList,
  reverse,
  setLimit,
  showCategory,
  setShowCategory,
  setShowNews,
  newsList,
  lng,
}: TChangeList) =>
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
    if (categoryList.length === 0) {
      setShowNews(()=> reverse? [...newsList].reverse():newsList);
    }
    if (categoryList.length > 0) {
      setShowNews(() => { 
        const array = newsList.filter((item) => categoryList.includes(item.category[lng]));
        return reverse ? array.reverse() : array;
       } );
    }
  }, [isMobile, isTablet, isDesktop, categoryList.length, reverse]);
