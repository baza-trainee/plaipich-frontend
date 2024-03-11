'use client'
import { useForm } from "react-hook-form"

export type FormData = {
    title: string
    titleEn: string
    titleImg: string
    lid: string
    lidEn: string
    text: string
    textEn: string
    media: string
    category: string
    date: string
}

export const AddNews = ({ className }: Readonly<{ className?: string }>) => {

    function onSubmit(data: FormData) {
        console.log(data);
        // sendEmail(data);
    }

    const {
        register,
        handleSubmit,
    } = useForm<FormData>()

    return (
        <section className={` p-4 bg-gray-200 text-black ${className??''}`}>

            <h1 className="h7 ">Додати новий запис</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">

                <div className="grid grid-cols-3 gap-4 mb-[1em] ">
                    <div className="rounded-lg p-[1em] bg-white flex flex-col justify-between">
                        <p className="text-5">Категорія</p>
                        <label className=" ">Обрати категорію{' '}
                            <select
                                placeholder="Обирати зі списку"
                                {...register("category", { required: true })}
                                className="rounded-sm border-2 p-2" >
                                <option disabled value="alien">Обирати зі списку</option>
                                <option value="alien">alien</option>
                                <option value="human">human</option>
                                <option value="cat">cat</option>
                                <option value="dog">dog</option>
                                <option value="other">other</option>
                            </select>
                        </label>
                    </div>

                    <div className="rounded-lg bg-white p-[1em] flex flex-col justify-between ">
                        <label className="">Дата публікації{' '}
                        </label>
                        <input placeholder="{date}"
                            type="date"
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            {...register("date", { required: false })}
                            className="rounded-sm border-2 p-2" />
                    </div>

                    <div className="rounded-lg bg-white p-[1em] flex flex-col justify-between">
                        <p className="text-5 ">Запис</p>
                        <div className="flex justify-between">
                            <button type="submit" className=" font-semibold px-[1em] py-[0.5em] border border-black">Переглянути</button>
                            <button type="submit" className=" font-semibold px-[1em] py-[0.5em] ">Зберегти</button>
                        </div>
                    </div>
                </div>

                <div className="mb-[1em] rounded-lg bg-white p-[1em] grid grid-cols-2 gap-4">

                    <h3>Укр версія</h3>
                    <h3>Англ версія</h3>

                    <label className="">Додати заголовок*{' '}
                        <input placeholder="Введіть заголовок"
                            {...register("title", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>
                    <label className="">Додати заголовок англійською мовою*{' '}
                        <input placeholder="Введіть заголовок"
                            {...register("titleEn", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>

                    <label className="col-span-2 ">Додати зображення*{' '}
                        <input
                            type="file"
                            placeholder="+ Додати зображення, Максимальний розмір файлу 2 МБ."
                            {...register("titleImg", { required: true })}
                            className="rounded-sm border-dashed border-2 p-2" />
                    </label>

                    <label className="">Додати лід до публікації*{' '}
                        <textarea
                            rows={3}
                            {...register("lid", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>
                    <label className="">Додати лід до публікації англійською мовою*{' '}
                        <textarea
                            rows={3}
                            {...register("lidEn", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>

                    <p className="col-span-2 text-red text-sm">Лід виконує функцію першого абзацу. Лід завжди виділений жирним шрифтом. Також, він виконує функцію анонсу статті (короткий зміст) на головній сторінці</p>

                    <label className=" ">Додати текст до публікації*{' '}
                        <textarea
                            rows={4}
                            {...register("text", { required: true })}
                            className="rounded-sm border-2 p-2" />
                    </label>
                    <label className=" ">Додати текст до публікації англійською мовою*{' '}
                        <textarea
                            rows={4}
                            {...register("textEn", { required: true })}
                            className="rounded-sm border-2 p-2" />
                    </label>

                    <label className="col-span-2 ">Додати медіа{' '}
                        <input
                            type="file"
                            placeholder="+ Додати зображення, Максимальний розмір файлу 2 МБ."
                            {...register("media", { required: false })}
                            className="rounded-sm border-dashed border-2 p-2" />
                    </label>

                </div>

                <button
                    className="font-semibold px-[2em] py-[0.5em] bg-dark-blue text-white mx-auto"
                    type="submit">Опублікувати</button>

            </form>
        </section>
    )
}
