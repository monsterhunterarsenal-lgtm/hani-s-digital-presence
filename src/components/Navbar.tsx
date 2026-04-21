import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "sectionAbout", label: t.nav.about },
    { id: "sectionModel", label: t.nav.model },
    { id: "sectionPlatforms", label: t.nav.platforms },
    { id: "sectionSectors", label: t.nav.sectors },
    { id: "sectionPresence", label: t.nav.presence },
    { id: "sectionContact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#sectionHero" className="leading-tight">
          <div className="font-display text-base md:text-lg" style={{ letterSpacing: "0.08em", fontWeight: 600 }}>
            {lang === "ar" ? "مجموعة حبشي القابضة" : "HEBASHI HOLDING GROUP"}
          </div>
          <div className="text-[10px] uppercase text-muted-foreground mt-0.5" style={{ letterSpacing: "0.24em" }}>
            {lang === "ar" ? "مبتكرة · متنوعة · رائدة" : "Innovative · Diversified · Leading"}
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[13px] text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="hidden md:inline-flex items-center px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] border hairline hover:border-primary hover:text-primary transition-all"
            aria-label="Toggle language"
          >
            {lang === "en" ? "EN | العربية" : "العربية | EN"}
          </button>
          <a
            href="#sectionContact"
            className="hidden md:inline-flex items-center px-5 py-2 text-[11px] uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            style={{ letterSpacing: "0.18em" }}
          >
            {t.nav.cta}
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((p) => !p)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t hairline">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <button onClick={toggle} className="self-start inline-flex items-center px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] border hairline">
              {lang === "en" ? "EN | العربية" : "العربية | EN"}
            </button>
            <a href="#sectionContact" onClick={() => setOpen(false)} className="self-start inline-flex items-center px-5 py-2 text-[11px] uppercase border border-primary text-primary" style={{ letterSpacing: "0.18em" }}>
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
