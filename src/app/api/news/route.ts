import News from "@/models/news";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const allNews = await News.find();

    return new Response(JSON.stringify(allNews), { status: 200 });
  } catch (error) {
    return new Response("Fail!", { status: 500 });
  }
};
