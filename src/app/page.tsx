import { AboutMain, Contacts,JoinUs, NewsList,Slider } from '@/components';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Slider />
      <AboutMain />
      <NewsList />
      <JoinUs />
      <Contacts/>
    </main>
  );
}

export default Home;
