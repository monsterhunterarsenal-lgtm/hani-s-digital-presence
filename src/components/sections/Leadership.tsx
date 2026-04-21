import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Leadership = () => {
  const { t } = useLang();
  return (
    <section id="sectionLeadership" className="py-28 md:py-36 relative" style={{ background: "hsl(var(--card))" }}>
      <div className="container-x">
        <div className="text-center max-w-xl mx-auto mb-12">
          <Reveal>
            <div className="eyebrow mb-4">{t.leadership.eyebrow}</div>
            <h2 className="font-display h2-display">{t.leadership.title}</h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="max-w-[640px] mx-auto border hairline-strong p-12 text-center">
            <div className="font-display mb-3" style={{ fontSize: "28px", fontWeight: 600 }}>
              {t.leadership.name}
            </div>
            <div className="text-[13px] uppercase text-primary mb-6" style={{ letterSpacing: "0.22em" }}>
              {t.leadership.role}
            </div>
            <div className="w-10 h-px bg-primary mx-auto mb-6" />
            <p className="text-base text-muted-foreground italic leading-relaxed">{t.leadership.bio}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
