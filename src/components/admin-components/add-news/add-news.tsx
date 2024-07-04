"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { APP_CONST } from "@/commons";
import { category } from "@/commons/constants";
import { INews } from "@/commons/types";
import { apiService } from "@/services/api-service";
import { upload } from "@/utils";

import PreviewNews from "./preview-news";

export type FormData = {
  title: string;
  titleEn: string;
  titleImg: string;
  lid: string;
  lidEn: string;
  text: string;
  textEn: string;
  media: string;
  category: "Анонси" | "Статті" | "Проекти" | "Події" | "Персоналії";
  date: Date;
};

const createNews = ({
  data,
  poster,
  images,
}: {
  data: FormData;
  poster?: string;
  images: string[];
}): INews => {
  const enCategoryIndex = category.ukCategory.findIndex(
    (item) => data.category === item,
  );
  const news = {
    title: data.title,
    description: `${data.lid}\n${data.text}`,
    enTitle: data.titleEn,
    enDescription: `${data.lidEn}\n${data.textEn}`,
    date: data.date,
    category: {
      en: category.enCategory[enCategoryIndex],
      uk: data.category,
    },
    mainPhoto: poster || "",
    photos: images,
    publicStatus: false,
  };

  return news;
};

export const AddNews = ({ className }: Readonly<{ className?: string }>) => {
  const router = useRouter();
  const [preview, setPreview] = useState<INews | null>(null);
  const [openPreview, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [poster, setPoster] = useState<string>();

  const addImages = (event: any) => {
    upload(event?.target.files[0]).then((data) =>
      setImages((prev) => [...prev, data]),
    );
  };

  const addPoster = (event: any) => {
    upload(event?.target.files[0]).then((data) => setPoster(data));
  };

  const onSubmit = async (data: FormData) => {
    if (!poster) {
      return;
    }
    const news = createNews({ data, poster, images });
    setPreview(news);
  };

  const saveNews = async () => {
    await apiService.postRequest({
      url: APP_CONST.API_URL.NEWS,
      body: preview,
    });
    router.push("/admin/all-news");
  };

  const { register, handleSubmit } = useForm<FormData>();

  return (
    <section className={` p-4 bg-gray-200 text-black ${className ?? ""}`}>
      <div className="p-[1em] bg-white mb-[1em] flex justify-between">
        <h1 className="h7 ">Додати новий запис</h1>
        <button
          className="font-semibold px-[2em] py-[0.5em] bg-dark-blue text-white "
          type="submit"
        >
          Опублікувати
        </button>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
        className="flex flex-col "
      >
        <div className="grid grid-cols-3 gap-4 mb-[1em] ">
          <div className="rounded-lg p-[1em] bg-white flex flex-col justify-between">
            <p className="text-5">Категорія</p>
            <label className="text-6 ">
              Обрати категорію{" "}
              <select
                placeholder="Обирати зі списку"
                {...register("category", { required: true })}
                className="rounded-sm border-2 p-2"
              >
                {APP_CONST.category.ukCategory.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-lg bg-white p-[1em] flex flex-col justify-between ">
            <label className="text-6 ">Дата публікації </label>
            <input
              placeholder="{date}"
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              {...register("date", { required: false })}
              className="rounded-sm border-2 p-2"
            />
          </div>

          <div className="rounded-lg bg-white p-[1em] flex flex-col justify-between">
            <p className="text-5 ">Запис</p>
            <div className="flex justify-between">
              <button
                type="submit"
                className=" font-semibold px-[1em] py-[0.5em] border border-black"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Переглянути
              </button>
              <button
                type="submit"
                className=" font-semibold px-[1em] py-[0.5em] "
                onClick={saveNews}
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>

        <div className="mb-[1em] rounded-lg bg-white p-[1em] grid grid-cols-2 gap-4">
          <h3 className="h15">Українська версія запису</h3>
          <h3 className="h15">Англійська версія запису</h3>

          <label className="text-6 ">
            Додати заголовок*{" "}
            <input
              placeholder="Введіть заголовок"
              type="text"
              {...register("title", { required: true, maxLength: 80 })}
              className="rounded-sm border-2 p-2 "
            />
          </label>
          <label className="text-6 ">
            Додати заголовок англійською мовою*{" "}
            <input
              placeholder="Введіть заголовок"
              type="text"
              {...register("titleEn", { required: true, maxLength: 80 })}
              className="rounded-sm border-2 p-2 "
            />
          </label>

          <div className="col-span-2">
            <p className="text-6 ">Додати зображення*</p>
            {poster ? (
              <>
                <Image
                  src={poster}
                  alt="poster"
                  width={1000}
                  height={500}
                  className="w-full h-48 border-2 border-dashed rounded-lg object-contain"
                />{" "}
              </>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer">
                <div className="flex flex-col items-center justify-center text-dark-blue">
                  <span className="-mb-[0.5em] text-[4em] font-bold">+</span>
                  <p>Додати зображення</p>
                </div>
                <input type="file" className="hidden" onChange={addPoster} />
              </label>
            )}
          </div>

          <label className="text-6 ">
            Додати лід до публікації*{" "}
            <textarea
              rows={3}
              {...register("lid", { required: true })}
              className="rounded-sm border-2 p-2 "
            />
          </label>
          <label className="text-6 ">
            Додати лід до публікації англійською мовою*{" "}
            <textarea
              rows={3}
              {...register("lidEn", { required: true })}
              className="rounded-sm border-2 p-2 "
            />
          </label>

          <p className="px-32 col-span-2 text-red  text-sm">
            Лід виконує функцію першого абзацу. Лід завжди виділений жирним
            шрифтом. Також, він виконує функцію анонсу статті (короткий зміст)
            на головній сторінці
          </p>

          <label className="text-6  ">
            Додати текст до публікації*{" "}
            <textarea
              rows={4}
              {...register("text", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати текст до публікації англійською мовою*{" "}
            <textarea
              rows={4}
              {...register("textEn", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>

          <div className="col-span-2">
            <p className="text-6 ">Додати зображення*</p>
            {images.length > 1 && (
              <>
                {images.map((image) => {
                  return (
                    <Image
                      src={image}
                      key={image}
                      alt="poster"
                      width={1000}
                      height={500}
                      className="w-full h-48 border-2 border-dashed rounded-lg object-contain"
                    />
                  );
                })}
              </>
            )}
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer">
              <div className="flex flex-col items-center justify-center text-dark-blue">
                <span className="-mb-[0.5em] text-[4em] font-bold">+</span>
                <p>Додати зображення</p>
              </div>
              <input type="file" className="hidden" onChange={addImages} />
            </label>
          </div>
        </div>
      </form>
      {openPreview && (
        <PreviewNews
          data={preview}
          close={() => {
            setOpen(false);
          }}
        />
      )}
    </section>
  );
};
