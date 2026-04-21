import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  const { t } = useLang();
  return (
    <section id="sectionAbout" className="py-28 md:py-36 relative bg-background">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="eyebrow mb-4">{t.about.eyebrow}</div>
              <h2 className="font-display h2-display mb-8">{t.about.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-foreground/85 leading-[1.7] mb-5">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="aspect-square border hairline-strong p-8 relative overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="goldStroke" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <g fill="none" stroke="url(#goldStroke)" strokeWidth="0.5">
                  <circle cx="100" cy="100" r="80" />
                  <circle cx="100" cy="100" r="60" />
                  <circle cx="100" cy="100" r="40" />
                  <circle cx="100" cy="100" r="20" />
                  <polygon points="100,20 173,140 27,140" />
                  <polygon points="100,180 27,60 173,60" />
                  <rect x="40" y="40" width="120" height="120" />
                </g>
                <circle cx="100" cy="100" r="3" fill="hsl(var(--primary))" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                HHG · Integrated Ecosystem
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
