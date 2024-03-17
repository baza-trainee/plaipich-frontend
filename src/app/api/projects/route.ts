import { connectToDB } from "@/../database/connect-to-db";
import Projects from "@/../database/models/projects-model";

export const GET = async () => {
  try {
    await connectToDB();
    const projects = await Projects.find();

    return new Response(
      JSON.stringify({
        status: "success",
        results: projects.length,
        data: { projects },
      }),
      { status: 200 },
    );
  } catch (error) {
    return new Response("Fail!", { status: 500 });
  }
};
