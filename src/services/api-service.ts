import { API_URL } from "@/commons/constants";

export class APIService {
  baseURL: string;

  token: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = "";
  }

  setToken = (token: string) => {
    this.token = token;
  };

  checkToken = () => {
    if (this.token !== "") {
      return {
        Authorization: `Bearer ${this.token}`,
      };
    }
  };

  catchError = (status: number) => {
    if (status === 401) {
      this.setToken("");
    }
  };

  getRequest = (url: string) =>
    fetch(this.baseURL + url, {
      method: "GET",
      headers: {
        ...this.checkToken(),
      },
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response),
      )
      .then((data) => data)
      .catch((error) => {
        this.catchError(error.status);
        // throw new Error(error.statusText);
      });

  postRequest = <Type>({ url, body }: { url: string; body?: Type }) =>
    fetch(this.baseURL + url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...this.checkToken(),
      },
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response),
      )
      .then((data) => data)
      .catch((error) => {
        this.catchError(error.status);
        // throw new Error(error.statusText);
      });

  patchRequest = <Type>({ url, body }: { url: string; body: Type }) =>
    fetch(this.baseURL + url, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...this.checkToken(),
      },
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response),
      )
      .then((data) => data)
      .catch((error) => {
        this.catchError(error.status);
        // throw new Error(error.statusText);
      });

  deleteRequest = (url: string) =>
    fetch(this.baseURL + url, {
      method: "DELETE",
      headers: {
        ...this.checkToken(),
      },
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response),
      )
      .then((data) => data)
      .catch((error) => {
        this.catchError(error.status);
        // throw new Error(error.statusText);
      });
}

export const apiService = new APIService(API_URL.BASE);
