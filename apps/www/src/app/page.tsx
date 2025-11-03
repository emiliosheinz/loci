import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { OpenSource } from "./_components/open-source";
import { Problems } from "./_components/problems";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      Normal app change that we would do on a daily basis
      <Header />
      <Hero />
      <Problems />
      <Features />
      <OpenSource />
      <Footer />
    </div>
  );
}
