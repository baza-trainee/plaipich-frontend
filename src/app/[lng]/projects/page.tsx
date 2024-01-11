import React from "react";

import { API_URL } from "@/commons/constants";
import { IProject } from "@/commons/types";
import { apiService } from "@/services/api-service";

const Projects = async () => {
  const {
    data: { projects },
  }: { data: { projects: IProject[] } } = await apiService.getRequest(
    API_URL.PROJECTS
  );

  return (
    <main>
      {projects.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </main>
  );
};

export default Projects;
