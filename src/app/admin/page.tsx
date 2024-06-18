"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { APP_CONST } from "@/commons";
import { apiService } from "@/services/api-service";
import { localStorageServices } from "@/services/local-storage";

const admin = process.env.NEXT_PUBLIC_EMAIL_ADMIN;

const Admin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [forgotPassword, setOpenForgotPassword] = useState(false);

  const changeEmail = (event: any) => {
    const element = event.target as HTMLInputElement;
    setEmail(element.value.trim());
    setError(false);
  };

  const changePassword = (event: any) => {
    const element = event.target as HTMLInputElement;
    setPassword(element.value.trim());
    setError(false);
  };

  const checkUser = () => {
    if (email !== admin) {
      setError(true);
    } else {
      apiService
        .postRequest({
          url: APP_CONST.API_URL.USER,
          body: { email, password },
        })
        .then((user) => {
          localStorageServices.setTokenToLocal(user.token);
          apiService.setToken(user.token);
          router.push("/admin/all-news");
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  const sentPassword = () => {
    if (email !== admin) {
      setError(true);
    } else {
      apiService
        .postRequest({
          url: APP_CONST.API_URL.FORGOT_PASSWORD,
          body: { email },
        })
        .then(() => {
          setOpenForgotPassword(false);
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  return (
    <div className="w-[450px] mx-auto flex flex-col justify-center">
      {forgotPassword ? (
        <>
          <h2 className="w-full font-bold text-3xl mb-2 text-center">
            Відновлення паролю
          </h2>
          <p className="w-full mb-8 text-center text-small-md text-gray-700">
            Введіть вашу e-mail адресу.
          </p>
          <form>
            <label htmlFor="email" className="mb-2">
              E-mail
              <input
                type="text"
                id="email"
                value={email}
                onChange={changeEmail}
              />
            </label>
            <p
              className={`mb-4 text-small-md text-red ${
                error ? "opacity-100" : "opacity-0"
              }`}
            >
              Перевірте дані! Такого користувача не знайдено!
            </p>
            <button
              type={"button"}
              onClick={sentPassword}
              disabled={!email}
              className={
                "w-full py-2 text-white bg-dark-blue border-dark-blue hover:bg-light-blue hover:text-black hover:border-black active:text-white active:bg-dark-blue active:border-dark-blue"
              }
            >
              Відновити пароль
            </button>
          </form>
          <p className="mt-8 text-small-md text-gray-700 text-center w-full">
            Ви памятаєте свій пароль?{" "}
            <span
              className="cursor-pointer text-dark-blue"
              onClick={() => {
                setOpenForgotPassword(false);
                setError(false);
              }}
            >
              Увійти
            </span>{" "}
          </p>
        </>
      ) : (
        <>
          <h2 className="w-full font-bold text-3xl mb-2 text-center">Вхід</h2>
          <p className="w-full mb-8 text-center text-small-md text-gray-700">
            З поверненням! Будь ласка, введіть свої дані.
          </p>
          <form>
            <label htmlFor="email" className="mb-2">
              E-mail
              <input
                type="text"
                id="email"
                value={email}
                onChange={changeEmail}
              />
            </label>
            <label htmlFor="password" className="mb-4">
              Пароль
              <input
                type="password"
                id="password"
                value={password}
                onChange={changePassword}
              />
            </label>
            <p
              className={`mb-4 text-small-md text-red ${
                error ? "opacity-100" : "opacity-0"
              }`}
            >
              Перевірте дані! Такого користувача не знайдено!
            </p>
            <button
              type={"button"}
              onClick={checkUser}
              disabled={!email || !password}
              className={
                "w-full py-2 text-white bg-dark-blue border-dark-blue hover:bg-light-blue hover:text-black hover:border-black active:text-white active:bg-dark-blue active:border-dark-blue"
              }
            >
              Увійти
            </button>
          </form>
          <p
            className="mt-8 text-small-md text-gray-700 cursor-pointer hover:text-dark-blue"
            onClick={() => {
              setOpenForgotPassword(true);
              setError(false);
            }}
          >
            Забули пароль ?
          </p>
        </>
      )}
    </div>
  );
};

export default Admin;
