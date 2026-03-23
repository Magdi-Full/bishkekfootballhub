import Hero from "@/widgets/hero/Hero";
import scss from "./home.module.scss";
import Cards from "@/widgets/cards/Cards";
import FAQ from "@/widgets/faq/FAQ";

export default function Home() {
  return (
    <div className={scss.container}>
      <div className={scss.mainContainer}>
        <Hero />
        <Cards />
        <FAQ />
      </div>
    </div>
  );
}
