export interface IProject {
  _id: string;
  title: string;
  description: string;
  status: boolean;
  enTitle: string;
  enDescription: string;
  poster: string;
  detailDesc?: {
    start: string;
    enStart: string;
    text: string[];
    enText: string[];
    image: string[];
  };
  mission?: {
    image: string;
    title: string;
    enTitle: string;
    list: string[];
    enList: string[];
  };
  projectProgram?: {
    title: string;
    enTitle: string;
    list: string[];
    enList: string[];
    image: string;
  };
  support?: {
    text: string;
    enText: string;
    logo: string;
  };
  videos?: string[];
  photos?: string[];
  location?: {
    title: string;
    enTitle: string;
    text: string;
    enText: string;
    link: string;
  };
  partners?: [{ name: string; logo: string }];
}

export interface INews {
  _id?: string;
  title: string;
  description: string;
  enTitle: string;
  enDescription: string;
  date: Date;
  category: {
    en: "Announcements" | "Articles" | "Projects" | "Events" | "Personals";
    uk: "Анонси" | "Статті" | "Проекти" | "Події" | "Персоналії";
  };
  mainPhoto: string;
  photos: string[];
}
