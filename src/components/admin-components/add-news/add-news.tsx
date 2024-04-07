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
        <section className={` p-4 bg-gray-200 text-black ${className ?? ''}`}>
            <div className="p-[1em] bg-white mb-[1em] flex justify-between">
                <h1 className="h7 ">Додати новий запис</h1>
                <button
                    className="font-semibold px-[2em] py-[0.5em] bg-dark-blue text-white "
                    type="submit">Опублікувати</button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">

                <div className="grid grid-cols-3 gap-4 mb-[1em] ">
                    <div className="rounded-lg p-[1em] bg-white flex flex-col justify-between">
                        <p className="text-5">Категорія</p>
                        <label className="text-6 ">Обрати категорію{' '}
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
                        <label className="text-6 ">Дата публікації{' '}
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

                    <h3 className="h15">Українська версія запису</h3>
                    <h3 className="h15">Англійська версія запису</h3>

                    <label className="text-6 ">Додати заголовок*{' '}
                        <input placeholder="Введіть заголовок"
                            type="text"
                            {...register("title", { required: true, maxLength: 80 })}
                            className="rounded-sm border-2 p-2 " />
                    </label>
                    <label className="text-6 ">Додати заголовок англійською мовою*{' '}
                        <input placeholder="Введіть заголовок"
                            type="text"
                            {...register("titleEn", { required: true, maxLength: 80 })}
                            className="rounded-sm border-2 p-2 " />
                    </label>

                    <div className="col-span-2">
                        <p className="text-6 ">Додати зображення*</p>
                        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center justify-center text-dark-blue">
                                <span className="-mb-[0.5em] text-[4em] font-bold">+</span>
                                <p>Додати зображення</p>
                            </div>
                            <input type="file" className="hidden" {...register("titleImg", { required: true })} />
                        </label>
                    </div>

                    <label className="text-6 ">Додати лід до публікації*{' '}
                        <textarea
                            rows={3}
                            {...register("lid", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>
                    <label className="text-6 ">Додати лід до публікації англійською мовою*{' '}
                        <textarea
                            rows={3}
                            {...register("lidEn", { required: true })}
                            className="rounded-sm border-2 p-2 " />
                    </label>

                    <p className="px-32 col-span-2 text-black/75 text-sm">
                        <span className="text-red font-extrabold">Червоний текст серед сторінки 1й раз зверне на себе увагу, потім - буде дратувати і поступово виїдати очи тому, хто за постійно додає новини. Для збільшення єфекту пропоную зробити ще й жирним :-/</span> Лід виконує функцію першого абзацу. Лід завжди виділений жирним шрифтом. Також, він виконує функцію анонсу статті (короткий зміст) на головній сторінці</p>

                    <label className="text-6  ">Додати текст до публікації*{' '}
                        <textarea
                            rows={4}
                            {...register("text", { required: true })}
                            className="rounded-sm border-2 p-2" />
                    </label>
                    <label className="text-6  ">Додати текст до публікації англійською мовою*{' '}
                        <textarea
                            rows={4}
                            {...register("textEn", { required: true })}
                            className="rounded-sm border-2 p-2" />
                    </label>

                    <div className="col-span-2">
                        <p className="text-6 ">Додати медіа</p>
                        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center justify-center text-dark-blue">
                                <span className="-mb-[0.5em] text-[4em] font-bold">+</span>
                                <p>Додати зображення</p>
                            </div>
                            <input type="file" className="hidden" {...register("media", { required: false })} />
                        </label>
                    </div>

                </div>

            </form>
        </section>
    )
}
