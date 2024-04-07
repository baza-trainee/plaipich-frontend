const secret = process.env.NEXT_PUBLIC_GYAZO_ACCESS_TOKEN;

export const upload = (file: any) => {
  const formData = new FormData();

  formData.append("imagedata", file, {
    filename: file.originalname,
  });
  if (secret) {
    formData.append("access_token", secret);
  }

  return fetch("https://upload.gyazo.com/api/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response),
    )
    .then((data) => {
      return data.url;
    })
    .catch((error) => {
      throw new Error(error.statusText);
    });
};
