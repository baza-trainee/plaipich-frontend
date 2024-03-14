import Link from "next/link";
import React from "react";

import { APP_CONST, APP_TYPES } from "@/commons";
import { apiService } from "@/services/api-service";

const AllNews = async () => {
  const {
    data: { news }, // eslint-disable-next-line no-undef
  }: { data: { news: APP_TYPES.INews[] } } = await apiService.getRequest(
    APP_CONST.API_URL.NEWS
  );

  return (
    <section>
      <div>
        <h2>Новини</h2>
        <Link href={"admin/add-new"}>Додати новину</Link>
      </div>
      <div>
        <select name="category" id=""></select>
        <select name="state" id=""></select>
        <select name="date" id=""></select>
        <input type="text" placeholder="Пошук" />
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col text-base border border-gray-500">
          <li className="w-full flex border-b border-gray-500 bg-light-blue">
            <p className="w-2/6 p-2 border-r border-gray-500">Заголовок</p>
            <p className="w-1/6 p-2 border-r border-gray-500">Стан</p>
            <p className="w-1/6 p-2 border-r border-gray-500">Категорія</p>
            <p className="w-1/6 p-2 border-r border-gray-500">Дата</p>
            <p className="w-1/6 p-2">Вид./Ред.</p>
          </li>
          {news.map((item) => (
            <li
              key={item._id}
              className="w-full flex border-b border-gray-500 bg-white hover:text-dark-blue hover:bg-gray-200"
            >
              <p className="w-2/6 p-2 border-r border-gray-500">{item.title}</p>
              <p className="w-1/6 p-2 border-r border-gray-500">Стан</p>
              <p className="w-1/6 p-2 border-r border-gray-500">
                {item.category.uk}
              </p>
              <p className="w-1/6 p-2 border-r border-gray-500">
                {item.date.toLocaleString().slice(0, 10)}
              </p>
              <p className="w-1/6 p-2">Вид./Ред.</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllNews;
