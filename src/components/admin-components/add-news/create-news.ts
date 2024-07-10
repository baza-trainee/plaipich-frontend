import { category } from "@/commons/constants";
import { INews } from "@/commons/types";

export type FormData = {
  title: string;
  titleEn: string;
  titleImg: string;
  lid: string;
  lidEn: string;
  text: string;
  textEn: string;
  media: string;
  category: "Анонси" | "Статті" | "Проекти" | "Події" | "Персоналії";
  date: Date;
};

export const createNews = ({
  data,
  poster,
  images,
  publicStatus,
}: {
  data: FormData;
  poster?: string;
  images: string[];
  publicStatus: boolean;
}): INews => {
  const enCategoryIndex = category.ukCategory.findIndex(
    (item) => data.category === item,
  );
  const news = {
    title: data.title,
    description: `${data.lid}\n${data.text}`,
    enTitle: data.titleEn,
    enDescription: `${data.lidEn}\n${data.textEn}`,
    date: data.date,
    category: {
      en: category.enCategory[enCategoryIndex],
      uk: data.category,
    },
    mainPhoto: poster || "",
    photos: images,
    publicStatus: publicStatus,
  };

  return news;
};
