import Footer from "@/components/Footer/footer";
import Header from "@/components/header/header";
import Section1 from "@/components/section1/section1";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Header />
      <Section1 />
      <Footer />
    </main>
  );
}
