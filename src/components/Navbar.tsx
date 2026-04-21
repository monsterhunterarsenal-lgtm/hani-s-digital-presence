import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import hhgLogo from "@/assets/hhg-monogram.png";

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
    { id: "platforms", label: t.nav.platforms },
    { id: "sectors", label: t.nav.sectors },
    { id: "presence", label: t.nav.presence },
    { id: "esg", label: t.nav.esg },
    { id: "investors", label: t.nav.investors },
    { id: "contact", label: t.nav.contact },
  ];

  const irLabel = t.nav.investors;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={hhgLogo}
            alt="HHG — Hebashi Holding Group"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div className="leading-tight">
            <div
              className="font-display text-sm font-medium text-foreground"
              style={{ letterSpacing: "0.04em" }}
            >
              {lang === "ar" ? "مجموعة حبشي القابضة" : "HEBASHI HOLDING GROUP"}
            </div>
            <div
              className="text-[10px] uppercase text-muted-foreground"
              style={{ letterSpacing: "0.28em" }}
            >
              {lang === "ar" ? "تأسست ٢٠٠٨" : "EST. 2008"}
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-7">
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
          <a
            href="#investors"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            style={{ letterSpacing: "0.18em" }}
          >
            {irLabel} →
          </a>
          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setOpen((p) => !p)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden glass border-t hairline">
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
