import { AboutMain, Carousel, Contacts,JoinUs, NewsList } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel />
      <AboutMain />
      <NewsList />
      <JoinUs />
      <Contacts/>
    </main>
  );
}
