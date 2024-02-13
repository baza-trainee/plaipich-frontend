import { useTranslation } from "@/app/i18n";
import { API_URL } from "@/commons/constants";
import { apiService } from "@/services/api-service";

import { BurgerMenu } from "./burgerMenu";
import { HeaderClient } from "./header-client";
import { NavHeader } from "./header-nav";
import { Logo } from "./logo";

export const Header = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "header");

  const {
    data: { news },
  } = await apiService.getRequest(API_URL.NEWS);

  const {
    data: { projects },
  } = await apiService.getRequest(API_URL.PROJECTS);

  const navigation = t("nav", {
    returnObjects: true,
  }) as { [key: string]: string };

  return (
    <header className="h-[105px] relative z-10 bg-black top-0 w-[100%] flex text-white border-solid border-b border-white">
      <div className="w-full max-w-[1440px] mx-auto px-10 py-5 flex lg:gap-10 justify-between items-center md:flex-row-reverse">
        <HeaderClient lng={lng} projectsList={projects} newsList={news}>
          <NavHeader lng={lng} deviceLg={true} nav={navigation} />
        </HeaderClient>
        <Logo lng={lng} />
        <BurgerMenu
          lng={lng}
          nav={navigation}
          projectsList={projects}
          newsList={news}
        />
      </div>
    </header>
  );
};
