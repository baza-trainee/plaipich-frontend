import "./contacts.css"

import Image from "next/image"
import React from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa"

import plaipichEvent from "../../../public/images/contacts/plaipich-event.png"

export const Contacts = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 md:py-[3.313] ">
      <div className="bg-black flex md:flex-row flex-col items-center justify-between md:py-14 md:px-16 ">
        <div className="flex flex-col gap-6 text-white py-10 px-4 md:px-0 md:pr-7">
          <h2 className="h1">Контакти</h2>
          <a className="text-sm md:text-md" href="mailto:plaipich@gmail.com">
            plaipich@gmail.com
          </a>
          <ul className="flex gap-6 md:gap-12 items-center">
            <li>
              <a href="/" className="circle bg-orange">
                <FaTiktok size="20px" color="black" />
              </a>
            </li>
            <li>
              <a href="/" className="circle bg-water">
                <FaInstagram size="20px" color="black" />
              </a>
            </li>
            <li>
              <a href="/" className="circle bg-pink-pearl">
                <FaFacebookF size="20px" color="black" />
              </a>
            </li>
            <li>
              <a href="/" className="circle bg-light-blue">
                <FaTelegramPlane size="20px" color="black" />
              </a>
            </li>
            <li>
              <a href="/" className="circle bg-menthol">
                <FaYoutube size="20px" color="black" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Image src={plaipichEvent} alt="plaipich-event" />
        </div>
      </div>
    </div>
  )
}
