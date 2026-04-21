import { useLang } from "@/i18n/LanguageContext";
import { Linkedin, Mail, MessageCircle, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const { t, lang } = useLang();
  return (
    <footer className="border-t hairline py-14 bg-background">
      <div className="container-x grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 grid place-items-center bg-gradient-gold text-primary-foreground font-display text-lg font-bold">
              HHG
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-medium" style={{ letterSpacing: "0.04em" }}>
                {lang === "ar" ? "مجموعة حبشي القابضة" : "HEBASHI HOLDING GROUP"}
              </div>
              <div className="text-[10px] uppercase text-muted-foreground" style={{ letterSpacing: "0.28em" }}>
                {lang === "ar" ? "تأسست ٢٠٠٨ · تبليسي" : "EST. 2008 · TBILISI"}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-display italic">{t.footer.tagline}</p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{t.footer.contactCol}</div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
              <span>{t.footer.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0 text-primary/70" />
              <a href={`tel:${t.footer.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{t.footer.phone}</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 flex-shrink-0 text-primary/70" />
              <a href="mailto:info@hebashigroup.com" className="hover:text-primary transition-colors">info@hebashigroup.com</a>
            </div>
          </div>
        </div>

        <div className="md:text-right rtl:md:text-left">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">{t.footer.resources}</div>
          <div className="flex md:justify-end rtl:md:justify-start gap-3">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:info@hebashigroup.com" aria-label="Email" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://wa.me/995577187750" aria-label="Direct line" className="w-10 h-10 grid place-items-center border hairline hover:border-primary hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t hairline flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-muted-foreground">
        <div>© 2026 {lang === "ar" ? "مجموعة حبشي القابضة" : "Hebashi Holding Group"}. {t.footer.rights}</div>
        <div className="font-display italic" style={{ letterSpacing: "0.15em" }}>{lang === "ar" ? "مؤسسي · جاهز للمستثمرين · متوافق مع ESG" : "Institutional · Investor-Ready · ESG-Aligned"}</div>
      </div>
    </footer>
  );
};
