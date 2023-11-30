import { AboutMain, Contacts, JoinUs, NewsList, Slider } from "@/components";

import { useTranslation } from "../i18n";

const Home = async ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  const { t } = await useTranslation(params.lng);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider
        lng={params.lng}
        btnOneProject={t("btn-learn-more")}
        btnAllProjects={t("btn-all-projects")}
      />
      <AboutMain lng={params.lng} />
      <NewsList
        title={t("title-news")}
        btnText={t("btn-more-news")}
        lng={params.lng}
      />
      <JoinUs backgroundColor="bg-white" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default Home;
