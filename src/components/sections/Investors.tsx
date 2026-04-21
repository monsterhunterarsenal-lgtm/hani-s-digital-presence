import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { FileText, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

export const Investors = () => {
  const { t, dir } = useLang();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section id="investors" className="py-28 md:py-36 relative bg-gradient-hero overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-radial-gold opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow mb-4">{t.investors.eyebrow}</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.investors.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.investors.intro}</p>
              <blockquote className="font-display italic text-xl md:text-2xl text-foreground/90 border-l-2 border-primary pl-5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-5">
                "{t.investors.quote}"
              </blockquote>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="space-y-4">
                <a
                  href="mailto:ir@hebashiholding.com?subject=Investor%20Deck%20Request"
                  className="group block glass p-6 hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 grid place-items-center bg-gradient-gold text-primary-foreground flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">01</div>
                      <div className="font-display text-xl mb-1 group-hover:text-primary transition-colors">{t.investors.ctaDeck}</div>
                      <div className="text-xs text-muted-foreground">ir@hebashiholding.com</div>
                    </div>
                    <Arrow className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                  </div>
                </a>

                <a
                  href="mailto:ir@hebashiholding.com?subject=Schedule%20a%20Meeting"
                  className="group block glass p-6 hover:border-primary transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 grid place-items-center border border-primary text-primary flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-1">02</div>
                      <div className="font-display text-xl mb-1 group-hover:text-primary transition-colors">{t.investors.ctaMeeting}</div>
                      <div className="text-xs text-muted-foreground">+995 555 659 000</div>
                    </div>
                    <Arrow className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" />
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
