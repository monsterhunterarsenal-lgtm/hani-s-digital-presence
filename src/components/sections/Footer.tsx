import { useLang } from "@/i18n/LanguageContext";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  const { t, lang } = useLang();
  const links = [
    { id: "sectionAbout", label: t.nav.about },
    { id: "sectionModel", label: t.nav.model },
    { id: "sectionPlatforms", label: t.nav.platforms },
    { id: "sectionSectors", label: t.nav.sectors },
    { id: "sectionPresence", label: t.nav.presence },
    { id: "sectionContact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t hairline pt-14 pb-8 bg-background">
      <div className="container-x grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="font-display text-lg mb-2" style={{ letterSpacing: "0.08em", fontWeight: 600 }}>
            {lang === "ar" ? "مجموعة حبشي القابضة" : "HEBASHI HOLDING GROUP"}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mt-3">{t.footer.tagline}</p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-primary mb-4">{t.footer.quickLinks}</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-primary transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

        <div className="md:text-right rtl:md:text-left">
          <div className="text-[10px] uppercase tracking-[0.22em] text-primary mb-4">{t.footer.location}</div>
          <div className="flex md:justify-end rtl:md:justify-start gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t hairline flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
        <div>© 2026 {lang === "ar" ? "مجموعة حبشي القابضة" : "Hebashi Holding Group"}. {t.footer.rights}</div>
      </div>
    </footer>
  );
};
