import "./contacts.css";

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import { useTranslation } from "@/app/i18n";

import plaipichEvent from "../../../public/images/contacts/plaipich-event.png";

export const Contacts = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "contacts");

  return (
    <section
      className="w-full md:py-[3.313] bg-black md:border-b border-white"
      id="contacts"
    >
      <div className="flex mx-auto md:flex-row max-w-[1440px] flex-col items-center justify-between lg:py-[3.313rem] lg:px-[3.875rem] md:p-8">
        <div className="flex flex-col gap-6 text-white py-[5.125rem] px-4 md:px-0 md:py-0 md:pr-14">
          <h2 className="h3 uppercase lg:normal-case lg:font-bold  lg:md:text-4xl lg:leading-4">
            {t("title")}
          </h2>
          <a
            className="text-md md:text-xl leading-2"
            href="mailto:plai.ngo.info@gmail.com"
          >
            plai.ngo.info@gmail.com
          </a>
          <ul className="flex gap-[1.375rem] lg:gap-12 items-center">
            <li>
              <a
                href="https://www.tiktok.com/@plai.pich"
                target="_blank"
                className="circle bg-link-water hover:scale-150 transition"
              >
                <FaTiktok size="20px" color="black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ngo.plai"
                target="_blank"
                className="circle bg-pale-cerulean hover:scale-150 transition"
              >
                <FaInstagram size="20px" color="black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ngo.plai"
                target="_blank"
                className="circle bg-water-blue hover:scale-150 transition"
              >
                <FaFacebookF size="20px" color="black" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/GO_PLAI"
                target="_blank"
                className="circle bg-horizon hover:scale-150 transition"
              >
                <FaTelegramPlane size="20px" color="black" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@plaiUA"
                target="_blank"
                className="circle bg-background hover:scale-150 transition"
              >
                <FaYoutube size="20px" color="black" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Image src={plaipichEvent} alt="plaipich-event" />
        </div>
      </div>
    </section>
  );
};
