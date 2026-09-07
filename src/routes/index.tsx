import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/kie/Header";
import { HeroSlider } from "@/components/kie/HeroSlider";
import { Bestsellers } from "@/components/kie/Bestsellers";
import {
  About,
  AllCategories,
  BrandMarquee,
  Collections,
  Divider,
  Footer,
  Lookbook,
  Newsletter,
  OnPerson,
} from "@/components/kie/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "kie — ювелирный дом ручной работы, Астана" },
      {
        name: "description",
        content:
          "Украшения ручной работы малыми партиями: кольца, серьги, колье, браслеты. Ателье kie в Астане.",
      },
      { property: "og:title", content: "kie — ювелирный дом ручной работы" },
      {
        property: "og:description",
        content: "Единичные экземпляры. Единственные в своём роде.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSlider />
        <Divider />
        <BrandMarquee />
        <Divider />
        <Bestsellers />
        <Divider />
        <Collections />
        <Divider />
        <Lookbook />
        <Divider />
        <About />
        <Divider />
        <OnPerson />
        <Divider />
        <AllCategories />
        <Divider />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
