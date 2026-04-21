import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Platforms } from "@/components/sections/Platforms";
import { Sectors } from "@/components/sections/Sectors";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { AILayer } from "@/components/sections/AILayer";
import { CompetitiveAdvantage } from "@/components/sections/CompetitiveAdvantage";
import { Partnerships } from "@/components/sections/Partnerships";
import { ESG } from "@/components/sections/ESG";
import { Growth } from "@/components/sections/Growth";
import { Investors } from "@/components/sections/Investors";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Page = () => {
  const { lang } = useLang();

  useEffect(() => {
    document.title =
      lang === "ar"
        ? "مجموعة حبشي القابضة (HHG) — باني منصات مؤسسية"
        : "Hebashi Holding Group (HHG) — Institutional Platform Builder";

    const desc =
      lang === "ar"
        ? "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة تبني وتشغّل وتوسّع منظومات أعمال متكاملة في 7 دول و8 قطاعات."
        : "Hebashi Holding Group (HHG) — diversified international holding platform building, scaling, and operating integrated business ecosystems across 6 countries and 8 sectors.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [lang]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <BusinessModel />
      <Platforms />
      <Sectors />
      <GlobalPresence />
      <AILayer />
      <CompetitiveAdvantage />
      <Partnerships />
      <ESG />
      <Growth />
      <Investors />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
};

const Index = () => (
  <LanguageProvider>
    <Page />
  </LanguageProvider>
);

export default Index;
