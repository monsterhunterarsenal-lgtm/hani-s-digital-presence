import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { BusinessModel } from "@/components/sections/BusinessModel";
import { Portfolio } from "@/components/sections/Portfolio";
import { Partnerships } from "@/components/sections/Partnerships";
import { ESG } from "@/components/sections/ESG";
import { Growth } from "@/components/sections/Growth";
import { Philosophy } from "@/components/sections/Philosophy";
import { Media } from "@/components/sections/Media";
// import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Page = () => {
  const { lang, t } = useLang();

  useEffect(() => {
    document.title =
      lang === "ar"
        ? "مجموعة حبشي القابضة — باني منصات مؤسسية"
        : "Hebashi Holding Group — Institutional Platform Builder";

    const desc =
      lang === "ar"
        ? "مجموعة حبشي القابضة (HHG) منصة قابضة دولية متنوعة تبني وتشغّل وتوسّع منظومات أعمال متكاملة في القطاعات عالية النمو."
        : "Hebashi Holding Group (HHG) is a diversified international holding platform that builds, scales, and operates integrated business ecosystems across high-growth sectors.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [lang, t]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <BusinessModel />
      <Portfolio />
      <Partnerships />
      <ESG />
      <Growth />
      <Philosophy />
      <Media />
      {/* <Testimonials /> hidden until real testimonials are added */}
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
