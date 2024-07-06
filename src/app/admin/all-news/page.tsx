import Link from "next/link";
import React from "react";

import { APP_CONST, APP_TYPES } from "@/commons";
import AdminNews from "@/components/admin-components/all-news/all-news";
import { apiService } from "@/services/api-service";

const AllNews = async () => {
  try {
    const {
      data: { news }, // eslint-disable-next-line no-undef
    }: { data: { news: APP_TYPES.INews[] } } = await apiService.getRequest(
      `${APP_CONST.API_URL.NEWS}?all=true`,
    );

    return (
      <section className="flex flex-col min-h-screen py-8 gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl">Новини</h2>
          <Link
            className="transition-all px-6 py-4 rounded-large border text-white bg-dark-blue border-dark-blue hover:bg-light-blue hover:text-black hover:border-black active:text-white active:bg-dark-blue active:border-dark-blue"
            href={"/admin/add-new"}
          >
            Додати новину
          </Link>
        </div>
        <AdminNews list={news} />
      </section>
    );
  } catch (error) {
    return <p>Немаємо даних для відображення</p>;
  }
};

export default AllNews;
