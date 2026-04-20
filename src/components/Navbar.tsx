import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

export const Navbar = () => {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about },
    { id: "expertise", label: t.nav.expertise },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "media", label: t.nav.media },
    { id: "testimonials", label: t.nav.testimonials },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-9 h-9 grid place-items-center bg-gradient-gold text-primary-foreground font-display text-lg font-bold">
            H
          </span>
          <div className="leading-tight">
            <div className={`text-sm font-medium tracking-wider ${lang === "ar" ? "" : "uppercase"}`}>
              {lang === "ar" ? "هاني حبشي" : "Hani Hebashy"}
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {lang === "ar" ? "مجموعة حبشي القابضة" : "Hebashy Holding Group"}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.2em] border hairline hover:border-primary hover:text-primary transition-all"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {t.langToggle}
          </button>
          <a href="#contact" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 text-xs">
            {t.contact.title.replace(".", "")}
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
        <div className="lg:hidden glass border-t hairline">
          <div className="container-x py-6 flex flex-col gap-5">
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
            <button onClick={toggle} className="self-start inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.2em] border hairline">
              <Globe className="w-3.5 h-3.5" /> {t.langToggle}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
