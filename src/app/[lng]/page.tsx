import { AboutMain, Contacts, JoinUs, NewsList, Slider } from "@/components";

const Home = ({
  params,
}: {
  params: {
    lng: "en" | "uk";
  };
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider />
      <AboutMain />
      <NewsList />
      <JoinUs backgroundColor="white" lng={params.lng} />
      <Contacts lng={params.lng} />
    </main>
  );
};

export default Home;
