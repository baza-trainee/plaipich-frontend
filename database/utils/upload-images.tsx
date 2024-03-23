// export const uploadImage = (file: any, token: staring) => {
//     console.log(file.originalname);
    
//     const formData = new FormData();

//     const blob = new Blob([file.buffer], { type: file.mimetype });

//     formData.append("mainPhoto", blob, {
//         filename: file.originalname,
//     });
//     formData.append("access_token", token);

//     return fetch("https://upload.gyazo.com/api/upload", {
//         method: "POST",
//         body: formData,
//     })
//         .then((response) =>
//             response.ok ? response.json() : Promise.reject(response)
//         )
//         .then((data) => data.url)
//         .catch((error) => {
//             //   this.catchError(error.status);
//             throw new Error(error.statusText);
//         });
// };
