import { LanguageProvider, useLang } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Portfolio } from "@/components/sections/Portfolio";
import { Philosophy } from "@/components/sections/Philosophy";
import { Media } from "@/components/sections/Media";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Page = () => {
  const { lang, t } = useLang();

  useEffect(() => {
    document.title =
      lang === "ar"
        ? "هاني حبشي — رئيس مجلس الإدارة، مجموعة حبشي القابضة"
        : "Hani Hebashy — Chairman & CEO, Hebashi Holding Group";

    const desc =
      lang === "ar"
        ? "هاني حبشي: قائد عابر للحدود وباني منصات. مجموعة حبشي القابضة عبر سبع دول."
        : "Hani Hebashy: cross-border business leader and platform builder. Hebashi Holding Group across seven countries.";
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
      <Portfolio />
      <Philosophy />
      <Media />
      <Testimonials />
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
