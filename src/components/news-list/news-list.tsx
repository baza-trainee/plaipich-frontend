import { API_URL } from "@/commons/constants";
import { INews } from "@/commons/types";
import { apiService } from "@/services/api-service";

import NewsCard from "../news-card/news-card";

const NewsList = async ({
  lng,
  dateClassName,
}: {
  lng: "en" | "uk";
  dateClassName: string;
}) => {
  const {
    data: { news },
  }: { data: { news: INews[] } } = await apiService.getRequest(API_URL.NEWS);

  return (
    <>
      {news && (
        <div
          className="grid grid-cols-1 
                    lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 mt-10 lg:my-[76px]
                    md:grid-cols-2 md:my-16 md:gap-x-4"
        >
          {news.map((item) => (
            <NewsCard
              key={item._id}
              newsItem={item}
              lng={lng}
              className="lg:m-0 mb-10"
              dateClassName={dateClassName}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NewsList;