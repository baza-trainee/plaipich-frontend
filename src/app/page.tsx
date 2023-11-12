import { Footer } from "@/components";
import News from "@/components/news/News";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <News />

      <Footer />
    </main>
  );
}
