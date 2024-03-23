const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const NAVIGATION = {
  main: "/",
  about: "/about-us",
  news: "/news",
  oneNew: "/one-new?id=",
  project: "/project?id=",
  projects: "/projects",
  support: "/support-us",
  reports: "/about-us#reports",
  contacts: "#contacts",
  facebook: "https://www.facebook.com/ngo.plai",
  tiktok: "https://www.tiktok.com/@plai.pich",
  instagram: "https://www.instagram.com/ngo.plai",
  telegram: "https://t.me/GO_PLAI",
  youtube: "https://www.youtube.com/@plaiUA",
};

export const API_URL = {
  BASE: baseUrl,
  USER: "/api/user",
  NEWS: "/api/news",
  ADD_NEWS: "/api/add-news",
  PROJECTS: "/api/projects",
};

export const QUERY_KEY = {
  PROJECTS: "projects",
  ONE_PROJECT: "one-project",
  NEWS: "news",
  USER: "user",
  ADD_NEWS: "add-news",
};

export const category = {
  enCategory: ["Announcements", "Articles", "Projects", "Events", "Personals"],
  ukCategory: ["Анонси", "Статті", "Проекти", "Події", "Персоналії"],
};

export const BREADCRUMBS_NAV = [
  {
    text: "Головна",
    enText: "Home",
    href: NAVIGATION.main,
  },
  {
    text: "Про нас",
    enText: "About us",
    href: NAVIGATION.about,
  },
  {
    text: "Новини",
    enText: "News",
    href: NAVIGATION.news,
  },
  {
    text: "Проєкти",
    enText: "Projects",
    href: NAVIGATION.projects,
  },
  {
    text: "Сторінка підтримки",
    enText: "Support us",
    href: NAVIGATION.support,
  },
];
