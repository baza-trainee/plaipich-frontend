import { INews, IProject } from "@/commons/types";

export const filterSearchList = ({
  projects,
  news,
  query,
  lng,
}: {
  projects: IProject[];
  news: INews[];
  query: string;
  lng: "en" | "uk";
}): (IProject | INews)[] | false => {
  const projectsList = projects.filter((item) => {
    if (lng === "en") {
      return (
        item.enTitle.toLowerCase().search(query) !== -1 ||
        item.enDescription.toLowerCase().search(query) !== -1
      );
    }
    return (
      item.title.toLowerCase().search(query) !== -1 ||
      item.description.toLowerCase().search(query) !== -1
    );
  });

  const newsList = news.filter((item) => {
    if (lng === "en") {
      return (
        item.enTitle.toLowerCase().search(query) !== -1 ||
        item.enDescription.toLowerCase().search(query) !== -1
      );
    }
    return (
      item.title.toLowerCase().search(query) !== -1 ||
      item.description.toLowerCase().search(query) !== -1
    );
  });
  if (projectsList && newsList) {
    return [...projectsList, ...newsList];
  } else {
    return false;
  }
};
