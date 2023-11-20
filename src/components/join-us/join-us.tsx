import "./join-us.css"

import Link from "next/link"
import React from "react"

export const JoinUs = () => {
  return (
    <section className="w-full mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[3.75rem] lg:py-20 py-[3.75rem]">
      <div className="mb-8">
        <h2 className="h1 pb-[1.375rem] uppercase md:normal-case">
          Бажаєте із нами працювати?
        </h2>
        <p className="text-md md:text-xl leading-4">
          Ми відкриті до ваших ідей, колаб, ініціатив, аби спільно створювати
          нові сенси та взаємодіі у місті та за його межами.
        </p>
      </div>
      <ul className="flex items-center gap-6 flex-col lg:flex-row justify-center lg:justify-start">
        <li className="listItemStyles">
          <Link href="/" className="linkBaseStyles ">
            Я - партнер
          </Link>
        </li>
        <li className="listItemStyles">
          <Link href="/" className="linkBaseStyles">
            Я - учасник
          </Link>
        </li>
        <li className="listItemStyles">
          <Link href="/" className="linkBaseStyles">
            Я - митець
          </Link>
        </li>
      </ul>
    </section>
  )
}
