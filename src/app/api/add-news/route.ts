// import multer from "multer";

// import { connectToDB } from "@/../database/connect-to-db";
// import News from "@/../database/models/news-model";
// import { uploadImage } from "@/../database/utils/upload-images";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Міделвар для завантаження зображень
// const uploadMiddleware = upload.single('mainPhoto');

// const token = process.env.GYAZO_ACCESS_TOKEN;

// export const POST = async (req: Request, res:Response) => {
//   try {
//     uploadMiddleware(req, res, async function (err) {
//       if (err instanceof multer.MulterError) {
//         return res.status(500).json({ message: 'Multer error' });
//       } else if (err) {
//         return res.status(500).json({ message: 'Unknown error' });
//       }

//       // Отримуємо файл з запиту
//         const file = req.file;
        
//         console.log(req.body);
//         console.log(req.file);

//       // Обробляємо файл, наприклад, відправляємо на сервер
//     //   await uploadImage(file, token); // Приклад функції для відправлення зображення на сервер

//       return;
//     });
      
//     // const data = await req.json();
//     //   console.dir(req);
//     //   console.dir(data);
//     // uploadImage(data.mainPhoto, token);
//     // const news = await News.create(data);
//     return new Response(JSON.stringify(data.title), { status: 201 });
//   } catch (error) {
//     return new Response("Fail!", { status: 500 });
//   }
// };
