import { API_URL } from "@/commons/constants";
import { INews } from "@/commons/types";
import {
  AboutMain,
  Contacts,
  JoinUs,
  NewsListMain,
  Slider,
} from "@/components";
import NewsList from "@/components/news-list/news-list";
import { apiService } from "@/services/api-service";

import { useTranslation } from "../i18n";

const Home = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  const {
    data: { projects },
  } = await apiService.getRequest(API_URL.PROJECTS);
  const { data: { news },
  }: { data: { news: INews[] } } = await apiService.getRequest(API_URL.NEWS);
  const { t } = await useTranslation(params.lng);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider
        btnOneProject={t("btn-learn-more")}
        btnAllProjects={t("btn-all-projects")}
        projectsList={projects}
        lng={params.lng}
      />
      <AboutMain lng={params.lng} />
      <NewsListMain title={t("title-news")} btnText={t("btn-more-news")}>
        <NewsList
          lng={params.lng}
          isMainPage={true}
          newsList={news.slice(0, 6)}
        />
      </NewsListMain>
      <JoinUs backgroundColor="bg-white" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default Home;
