export interface IProject {
  _id: string;
  title: string;
  description: string;
  status: "Active" | "Completed" | "Planned";
  poster: string;
  videos: string[];
  photos: string[];
  locationsCount: number;
  partnersCount: number;
  events: string[];
}
