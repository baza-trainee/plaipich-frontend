"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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

export const AddNews = ({ news }: { news?: INews }) => {
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

  const onSubmit = (data: FormData) => {
    if (!poster) {
      toast("Додайте основне фото!", { type: "error" });
      return;
    }
    const news = createNews({ data, poster, images });

    if (preview) {
      apiService
        .patchRequest({
          url: `${APP_CONST.API_URL.NEWS}/${preview._id}`,
          body: news,
        })
        .then(() => {
          toast("Збережено!", { type: "success" });
        })
        .catch(() => {
          toast("Не вдалося зберегти! Перевірте дані!", { type: "error" });
        });
    } else {
      apiService
        .postRequest({
          url: APP_CONST.API_URL.NEWS,
          body: news,
        })
        .then((data) => {
          toast("Збережено!", { type: "success" });
          news._id = data._id;
        })
        .catch(() => {
          toast("Не вдалося зберегти! Перевірте дані!", { type: "error" });
        });
    }
    setPreview(news);
  };

  const publicNews = () => {
    if (preview) {
      apiService
        .patchRequest({
          url: `${APP_CONST.API_URL.NEWS}/${preview._id}`,
          body: { ...news, publicStatus: true },
        })
        .then(() => {
          toast("Опубліковано!", { type: "success" });
        })
        .catch(() => {
          toast("Не вдалося опублікувати! Спробуйте пізніше!", {
            type: "error",
          });
        });
    }
  };

  const previewNews = () => {
    setOpen(true);
  };

  const { register, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    if (news) {
      setPoster(news.mainPhoto);
      setImages(news.photos);
      setPreview(news);
    }
  }, []);

  return (
    <section className="p-4 bg-gray-200 text-black">
      <div className="p-[1em] bg-white mb-[1em] flex justify-between">
        <h1 className="h7 ">
          {news ? "Редагувати запис" : "Додати новий запис"}
        </h1>
        <button
          className="font-semibold px-[2em] py-[0.5em] bg-dark-blue text-white disabled:opacity-10 disabled:bg-dark-blue"
          type="submit"
          disabled={!preview}
          onClick={publicNews}
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
                defaultValue={news?.category.uk}
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
              defaultValue={
                news
                  ? new Date(news?.date as Date).toISOString().substring(0, 10)
                  : new Date().toISOString().substring(0, 10)
              }
              {...register("date", { required: false })}
              className="rounded-sm border-2 p-2"
            />
          </div>
          <div className="rounded-lg bg-white p-[1em] flex flex-col justify-between">
            <p className="text-5 ">Запис</p>
            <div className="flex justify-between">
              <button
                type="button"
                className=" font-semibold px-[1em] py-[0.5em] disabled:opacity-10 disabled:bg-dark-blue"
                disabled={!preview}
                onClick={previewNews}
              >
                Переглянути
              </button>
              <button
                type="submit"
                className="font-semibold px-[1em] py-[0.5em] border border-black disabled:opacity-10 disabled:bg-dark-blue"
                disabled={!poster}
              >
                {preview ? "Змінити" : "Зберегти"}
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
              defaultValue={news?.title}
              {...register("title", { required: true, maxLength: 80 })}
              className="rounded-sm border-2 p-2 "
            />
          </label>
          <label className="text-6 ">
            Додати заголовок англійською мовою*{" "}
            <input
              placeholder="Введіть заголовок"
              type="text"
              defaultValue={news?.enTitle}
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
              defaultValue={news?.description.split(/(\n)/)[0]}
              {...register("lid", { required: true })}
              className="rounded-sm border-2 p-2 "
            />
          </label>
          <label className="text-6 ">
            Додати лід до публікації англійською мовою*{" "}
            <textarea
              rows={3}
              defaultValue={news?.enDescription.split(/(\n)/)[0]}
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
              defaultValue={news?.description.split(/(\n)/)[0].slice(1)}
              {...register("text", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати текст до публікації англійською мовою*{" "}
            <textarea
              rows={4}
              defaultValue={news?.enDescription.split(/(\n)/)[0].slice(1)}
              {...register("textEn", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>

          <div className="col-span-2">
            <p className="text-6 ">Додати зображення*</p>
            {images.length > 0 && (
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
