"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { APP_CONST } from "@/commons";
import { IProject } from "@/commons/types";
import { upload } from "@/utils";

import { changePublicStatus, saveOrUpdateData } from "../utils";
import { createProject, FormData } from "./create-project";
import PreviewProject from "./preview-project";

const AddProject = ({ project }: { project?: IProject }) => {
  const [preview, setPreview] = useState<IProject | null>(null);
  const [openPreview, setOpen] = useState(false);
  const [detailImages, setDetailImages] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [poster, setPoster] = useState<string>();

  // const addImages = (event: any) => {
  //   upload(event?.target.files[0]).then((data) =>
  //     setImages((prev) => [...prev, data]),
  //   );
  // };

  const addDetailImages = (event: any) => {
    upload(event?.target.files[0]).then((data) =>
      setDetailImages((prev) => [...prev, data]),
    );
  };

  const addPoster = (event: any) => {
    upload(event?.target.files[0]).then((data) => setPoster(data));
  };

  const onSubmit = (data: FormData) => {
    if (poster) {
      const project = createProject({ data, poster, detailImages, images });

      saveOrUpdateData<IProject>({
        data: project,
        setPreview,
        id: preview?._id,
        url: APP_CONST.API_URL.PROJECTS,
      });
    }
  };

  const changeProjectPublicStatus = () => {
    if (preview) {
      changePublicStatus<IProject>({
        preview,
        url: `${APP_CONST.API_URL.PROJECTS}/${preview._id}`,
        setPreview,
        publicStatus: !preview?.publicStatus,
      });
    }
  };

  const previewProject = () => {
    setOpen(true);
  };

  const { register, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    if (project) {
      setPoster(project.poster);
      project.photos && setImages(project.photos);
      setPreview(project);
    }
  }, []);

  return (
    <section className="p-4 bg-gray-200 text-black">
      <div className="p-[1em] bg-white mb-[1em] flex justify-between">
        <h1 className="h7 ">
          {project ? "Редагувати запис" : "Додати новий проєкт"}
        </h1>
        <button
          className="font-semibold px-[2em] py-[0.5em] bg-dark-blue text-white disabled:opacity-10 disabled:bg-dark-blue"
          type="submit"
          disabled={!preview}
          onClick={changeProjectPublicStatus}
        >
          {preview?.publicStatus ? "Зняти з публікації" : "Опублікувати"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
        className="flex flex-col "
      >
        <div className="w-full flex justify-between gap-4 mb-[1em] ">
          <div className="rounded-lg p-[1em] bg-white flex flex-col justify-between">
            <p className="text-5">Статус фінансування проєкту</p>
            <label className="text-6 ">
              Обрати статус
              <select
                placeholder="Обирати зі списку"
                defaultValue={preview ? `${preview.status}` : "false"}
                {...register("status", { required: true })}
                className="rounded-sm border-2 p-2"
              >
                <option value={"false"}>Потребує підтримки</option>
                <option value={"true"}>Профінансовано</option>
              </select>
            </label>
          </div>
          <div className="rounded-lg bg-white p-[1em] flex flex-col justify-between">
            <p className="text-5 ">Запис</p>
            <div className="flex justify-between gap-4">
              <button
                type="button"
                className=" font-semibold px-[1em] py-[0.5em] disabled:opacity-10 disabled:bg-dark-blue"
                disabled={!preview}
                onClick={previewProject}
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
            Додати назву проєкту*
            <input
              placeholder="Введіть заголовок"
              type="text"
              defaultValue={project?.title}
              {...register("title", { required: true, maxLength: 80 })}
              className="rounded-sm border-2 p-2 "
            />
          </label>
          <label className="text-6 ">
            Додати назву проєкту*
            <input
              placeholder="Введіть заголовок"
              type="text"
              defaultValue={project?.enTitle}
              {...register("enTitle", { required: true, maxLength: 80 })}
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
                  <p>Додати зображення*</p>
                </div>
                <input type="file" className="hidden" onChange={addPoster} />
              </label>
            )}
          </div>
          <h3 className="col-span-2 text-lg">
            Короткий опис проєкту (або мета)
          </h3>
          <label className="text-6  ">
            Додати боковий текст до опису*
            <input
              defaultValue={project?.description.split("**")[0]}
              {...register("descStart", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати боковий текст до опису*
            <input
              defaultValue={project?.enDescription.split("**")[0]}
              {...register("descEnStart", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <p className="px-32 col-span-2 text-red  text-sm">
            Короткий текс, в основному назва проекту, що відображається збоку
            другої секції.
          </p>

          <label className="text-6  ">
            Додати текст до опису*{" "}
            <textarea
              rows={4}
              defaultValue={project?.description.split("**")[1]}
              {...register("descText", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати текст до опису*{" "}
            <textarea
              rows={4}
              defaultValue={project?.enDescription.split("**")[1]}
              {...register("descEnText", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <h3 className="col-span-2 text-lg">Детальний опис проєкту</h3>
          <label className="text-6  ">
            Додати заголовок до опису*
            <input
              defaultValue={project?.detailDesc?.start}
              {...register("detailStart", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати заголовок до опису*
            <input
              defaultValue={project?.detailDesc?.enStart}
              {...register("detailEnStart", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати текст до опису*{" "}
            <textarea
              rows={4}
              defaultValue={project?.detailDesc?.text[0]}
              {...register("detailText", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          <label className="text-6  ">
            Додати текст до опису*{" "}
            <textarea
              rows={4}
              defaultValue={project?.detailDesc?.enText[0]}
              {...register("detailEnText", { required: true })}
              className="rounded-sm border-2 p-2"
            />
          </label>
          {detailImages.length > 0 ? (
            <>
              <Image
                src={detailImages[0]}
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
                <p>Додати зображення*</p>
              </div>
              <input
                type="file"
                className="hidden"
                onChange={addDetailImages}
              />
            </label>
          )}

          {/* <div className="col-span-2">
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
          </div> */}
        </div>
      </form>
      {openPreview && (
        <PreviewProject
        // data={preview}
        // close={() => {
        //   setOpen(false);
        // }}
        />
      )}
    </section>
  );
};

export default AddProject;
