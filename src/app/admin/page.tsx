"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { APP_CONST } from "@/commons";
import { apiService } from "@/services/api-service";
import { localStorageServices } from "@/services/local-storage";

const Admin = () => {
  const router = useRouter();
  const [isUser, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
    if (email !== "goPlai2024@gmail.com") {
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
          setUser(true);
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  useEffect(() => {
    if (isUser) {
      router.push("/admin/all-news");
    }
  }, [isUser]);

  return (
    <div className="w-[450px] min-h-screen mx-auto flex flex-col justify-center">
      <h2 className="w-full font-bold text-3xl mb-2 text-center">Вхід</h2>
      <p className="w-full mb-8 text-center text-small-md text-gray-700">
        З поверненням! Будь ласка, введіть свої дані.
      </p>
      <form action="">
        <label htmlFor="email" className="mb-2">
          E-mail
          <input type="text" id="email" value={email} onChange={changeEmail} />
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
      <p className="mt-8 text-small-md text-gray-700">Забули пароль ? </p>
    </div>
  );
};

export default Admin;
