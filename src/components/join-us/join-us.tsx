import "./join-us.css"

import Link from "next/link"
import React from "react"

export const JoinUs = () => {
  return (
    <div className="w-full mx-auto max-w-[1440px] px-4 md:py-20 py-[3.75rem]">
      <div className="mb-8 ">
        <h2 className="h1 md:text-4xl pb-[1.375rem] text-3xl">
          Бажаєте із нами працювати?
        </h2>
        <p className="md:text-xl leading-4 text-lg">
          Ми відкриті до ваших ідей, колаб, ініціатив, аби спільно створювати
          нові сенси та взаємодіі у місті та за його межами.
        </p>
      </div>
      <ul className="flex items-center gap-6 flex-col md:flex-row justify-center md:justify-start">
        <li className="w-full box-border shrink-0 md:shrink md:w-auto  text-center">
          <Link href="/" className="linkBaseStyles ">
            Я - партнер
          </Link>
        </li>
        <li className="w-full box-border shrink-0 md:shrink md:w-auto  text-center">
          <Link href="/" className="linkBaseStyles">
            Я - учасник
          </Link>
        </li>
        <li className="w-full box-border shrink-0 md:shrink md:w-auto  text-center">
          <Link href="/" className="linkBaseStyles">
            Я - митець
          </Link>
        </li>
      </ul>
    </div>
  )
}
