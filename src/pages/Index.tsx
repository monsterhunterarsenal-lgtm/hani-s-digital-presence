import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Model } from "@/components/sections/Model";
import { Platforms } from "@/components/sections/Platforms";
import { Sectors } from "@/components/sections/Sectors";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { AILayer } from "@/components/sections/AILayer";
import { ESG } from "@/components/sections/ESG";
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
        : "Hebashi Holding Group — Institutional Platform Builder";

    const desc =
      lang === "ar"
        ? "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة تبني وتشغّل وتوسّع منظومات أعمال متكاملة في القطاعات عالية النمو."
        : "Hebashi Holding Group (HHG) is a diversified international holding platform building, operating, and scaling integrated business ecosystems across high-growth sectors.";
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
      <Model />
      <Platforms />
      <Sectors />
      <GlobalPresence />
      <AILayer />
      <ESG />
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
