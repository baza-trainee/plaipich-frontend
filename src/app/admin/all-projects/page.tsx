import Link from "next/link";
import React from "react";

import { APP_CONST, APP_TYPES } from "@/commons";
import AdminProjects from "@/components/admin-components/all-projects/all-projects";
import { apiService } from "@/services/api-service";

const AllProjects = async () => {
  try {
    const {
      data: { projects }, // eslint-disable-next-line no-undef
    }: { data: { projects: APP_TYPES.IProject[] } } =
      await apiService.getRequest(`${APP_CONST.API_URL.PROJECTS}?all=true`);

    return (
      <section className="flex flex-col min-h-screen py-8 gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl">Проєкти</h2>
          <Link
            className="transition-all px-6 py-4 rounded-large border text-white bg-dark-blue border-dark-blue hover:bg-light-blue hover:text-black hover:border-black active:text-white active:bg-dark-blue active:border-dark-blue"
            href={"/admin/add-project"}
          >
            Додати проєкт
          </Link>
        </div>
        <AdminProjects list={projects} />
      </section>
    );
  } catch (error) {
    return <p>Немаємо даних для відображення</p>;
  }
};

export default AllProjects;
