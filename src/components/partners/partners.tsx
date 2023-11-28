import Image from "next/image";
import React from "react";

import { useTranslation } from "@/app/i18n";
import { partnersData } from "@/components/partners/partners-data";

import { InfiniteLooper } from "./infinite-looper/infinite-looper";

export const Partners = async ({ lng }: { lng: "en" | "uk" }) => {
  const { t } = await useTranslation(lng, "partners");
  return (
    <section className="py-16 w-full text-black bg-white" id="partners">
      <div className="container max-w-desktop">
        <h2 className="h1 text-center mb-14 normal-case">{t("partners-title")}</h2>
        <InfiniteLooper direction="right" speed={10}>
          {partnersData.map((partner) => (
            <div key={partner.id} className="grid place-items-center w-36 md:w-full">
              <Image
                src={partner.src}
                alt={partner.alt}
                className="object-contain max-w-full"
                width={300}
                height={140}
                sizes="(max-width: 768px) 80vw, 288px"
              />
            </div>
          ))}
        </InfiniteLooper>
      </div>
    </section>
  );
};
