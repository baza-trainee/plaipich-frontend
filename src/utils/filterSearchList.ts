import { INews, IProject } from "@/commons/types";

export const filterSearchList = ({
  projects,
  news,
  query,
}: {
  projects: IProject[];
  news: INews[];
  query: string;
}): (IProject | INews)[] | false => {
  const projectsList = projects.filter(
    (item) =>
      item.title.toLowerCase().search(query) !== -1 ||
      item.enTitle.toLowerCase().search(query) !== -1 ||
      item.description.toLowerCase().search(query) !== -1 ||
      item.enDescription.toLowerCase().search(query) !== -1,
  );

  const newsList = news.filter(
    (item) =>
      item.title.toLowerCase().search(query) !== -1 ||
      item.enTitle.toLowerCase().search(query) !== -1 ||
      item.description.toLowerCase().search(query) !== -1 ||
      item.enDescription.toLowerCase().search(query) !== -1,
  );
  if (projectsList && newsList) {
    return [...projectsList, ...newsList];
  } else {
    return false;
  }
};
