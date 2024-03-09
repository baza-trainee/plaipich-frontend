'use client'
import { useForm } from "react-hook-form"

export type FormData = {
    title: string
    titleImg: string
    lid: string
    text: string
    media: string
    category: string
    date: string
}

export const AddNews = ({ className }: Readonly<{ className?: string }>) => {

    function onSubmit(data: FormData) {
        console.log(`form`, data);
        // sendEmail(data);
    }

    const {
        register,
        handleSubmit,
    } = useForm<FormData>()

    return (
        <section className={` p-4 bg-gray-200 text-black ${className}`}>
            {/*  text-2xl font-bold */}
            <h1 className="h7 ">Додати новий запис</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex">
                <div className="w-2/3 rounded-lg bg-white mr-[1em]">

                    <label className="p-[1em] ">Додати заголовок *{' '}
                        <input placeholder="Введіть заголовок"
                            {...register("title", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>

                    <label className=" p-[1em] ">Додати зображення *{' '}
                        <input
                            type="file"
                            placeholder="+ Додати зображення, Максимальний розмір файлу 2 МБ."
                            {...register("titleImg", { required: true })}
                            className="rounded-sm border-dashed border-2 p-2" />
                    </label>

                    <label className=" p-[1em] ">Додати лід до публікації *{' '}
                        <textarea
                            rows={3}
                            {...register("lid", { required: true })}

                            className="rounded-sm border-2 p-2 " />
                        <p className="text-red text-sm">Лід виконує функцію першого абзацу. Лід завжди виділений жирним шрифтом. Також, він виконує функцію анонсу статті (короткий зміст) на головній сторінці</p>
                    </label>

                    <label className=" p-[1em] ">Додати текст до публікації*{' '}
                        <textarea
                            rows={4}
                            {...register("text", { required: true })}
                            className="rounded-sm border-2 p-2" />
                    </label>

                    <label className=" p-[1em] ">Додати медіа{' '}
                        <input
                            type="file"
                            placeholder="+ Додати зображення, Максимальний розмір файлу 2 МБ."
                            {...register("media", { required: false })}
                            className="rounded-sm border-dashed border-2 p-2" />
                    </label>

                </div>
                <div className=" w-1/3 ">
                    <div className="rounded-lg bg-white mb-[1em]">
                        {/* font-semibold  */}
                        <p className="text-5 p-[1em]">Категорія</p>

                        <label className=" p-[1em] ">Обрати категорію{' '}
                            <select
                                placeholder="Обирати зі списку"
                                {...register("category", { required: true })}
                                className="rounded-sm border-2 p-2" >
                                <option disabled value="alien">Обирати зі списку</option>
                                <option value="alien">alien</option>
                                <option value="human">human</option>
                                <option value="cat">cat</option>
                                <option value="dog">gog</option>
                                <option value="other">other</option>
                            </select>
                        </label>
                    </div>

                    <div className="rounded-lg bg-white">
                        <p className="text-5 p-[1em]">Запис</p>
                        <button type="submit" className="m-[1em] font-semibold px-[1em] py-[0.5em] border border-black">Переглянути</button>
                        <button type="submit" className="m-[1em] font-semibold px-[1em] py-[0.5em] border border-black">Зберегти</button>
                        <label className="p-[1em]">Дата публікації{' '}
                            <input placeholder="{date}"
                                type="date"
                                defaultValue={new Date().toISOString().substring(0, 10)}
                                {...register("date", { required: false })}
                                className="rounded-sm border-2 p-2" />
                        </label>

                        <button type="submit" className="m-[1em] font-semibold px-[1em] py-[0.5em] bg-water-blue text-white">Опублікувати</button>

                    </div>
                </div>
            </form>
        </section>
    )
}
