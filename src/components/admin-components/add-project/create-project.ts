import { IProject } from "@/commons/types";

export type FormData = {
  title: string;
  enTitle: string;
  descStart: string;
  descEnStart: string;
  descText: string;
  descEnText: string;
  status: boolean;
  detailStart: string;
  detailEnStart: string;
  detailText: string;
  detailEnText: string;
};

export const createProject = ({
  data,
  poster,
  detailImages,
  images, // missionImage,
  // projectProgramImage,
} // supportLogo,
// photos,
// partners,
: {
  data: FormData;
  poster: string;
  detailImages: string[];
  images: string[];
}): IProject => {
  const project = {
    title: data.title,
    description: `${data.descStart}** ${data.descText}`,
    status: data.status,
    publicStatus: false,
    enTitle: data.enTitle,
    enDescription: `${data.descEnStart}** ${data.descEnText}`,
    poster: poster,
    detailDesc: {
      start: data.detailStart,
      enStart: data.detailEnStart,
      text: [data.detailText],
      enText: [data.detailEnText],
      image: detailImages,
    },
    // mission?: {
    //   image: string;
    //   title: string;
    //   enTitle: string;
    //   list: string[];
    //   enList: string[];
    // };
    // projectProgram?: {
    //   title: string;
    //   enTitle: string;
    //   list: string[];
    //   enList: string[];
    //   image: string;
    // };
    // support?: {
    //   text: string;
    //   enText: string;
    //   logo: string;
    // };
    // videos?: string[];
    photos: images,
    // location?: {
    //   title: string;
    //   enTitle: string;
    //   text: string;
    //   enText: string;
    //   link: string;
    // };
    // partners?: [{ name: string; logo: string }];
  };

  return project;
};
