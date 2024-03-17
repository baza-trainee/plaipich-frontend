import { connectToDB } from "@/../database/connect-to-db";
import News from "@/../database/models/news-model";

export const GET = async () => {
  try {
    await connectToDB();
    const news = await News.find().sort("-date");
    return new Response(
      JSON.stringify({
        status: "success",
        results: news.length,
        data: { news },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Fail!", { status: 500 });
  }
};
