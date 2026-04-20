import { useLang } from "@/i18n/LanguageContext";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  const { t, lang } = useLang();
  return (
    <footer className="border-t hairline py-14 bg-background">
      <div className="container-x grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 grid place-items-center bg-gradient-gold text-primary-foreground font-display text-lg font-bold">H</span>
            <div className="leading-tight">
              <div className="text-sm font-medium">{lang === "ar" ? "هاني حبشي" : "Hani Hebashy"}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {lang === "ar" ? "مجموعة حبشي القابضة" : "Hebashi Holding Group"}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-display italic">{t.footer.tagline}</p>
        </div>

        <div className="md:text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{t.nav.contact}</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div>contact@hanihebashy.com</div>
            <div>Tbilisi · Cairo · Dubai</div>
          </div>
        </div>

        <div className="md:text-right rtl:md:text-left">
          <div className="flex md:justify-end rtl:md:justify-start gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:contact@hanihebashy.com" aria-label="Email" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://wa.me/0000000000" aria-label="WhatsApp" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t hairline flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} {lang === "ar" ? "هاني حبشي" : "Hani Hebashy"}. {t.footer.rights}</div>
        <div className="font-display italic">Building platforms that shape what comes next.</div>
      </div>
    </footer>
  );
};
