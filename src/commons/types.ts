export interface IProject {
  _id: string;
  title: string;
  description: string;
  enTitle: string;
  enDescription: string;
  status: "Active" | "Completed" | "Planned";
  poster: string;
  videos: string[];
  photos: string[];
  locationsCount: number;
  partnersCount: number;
  events: string[];
}

export interface INews {
  _id: string;
  title: string;
  description: string;
  enTitle: string;
  enDescription: string;
  date: Date;
  category: "Politics" | "Technology" | "Entertainment" | "Sports";
  mainPhoto: string;
  photos: string[];
}