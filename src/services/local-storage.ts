class LocalStorageService {
  token: string = "";

  USER_TOKEN: string = "user-token";

  constructor(storageKey: string) {
    this.USER_TOKEN = storageKey;
  }

  getTokenFromLocal(): string {
    const chekedLocal: string | null = localStorage.getItem(this.USER_TOKEN);
    if (chekedLocal) {
      const token = chekedLocal;
      this.token = token;
    }
    return this.token;
  }

  setTokenToLocal(token: string): void {
    this.token = token;
    localStorage.setItem(this.USER_TOKEN, this.token);
  }

  clearLocal() {
    this.token = "";
    localStorage.setItem(this.USER_TOKEN, this.token);
  }
}

export const localStorageServices = new LocalStorageService("TOKEN");
