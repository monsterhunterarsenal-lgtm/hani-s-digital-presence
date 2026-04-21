import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Leadership = () => {
  const { t } = useLang();
  return (
    <section id="leadership" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-4xl">
          <Reveal>
            <div className="eyebrow mb-4">{t.leadership.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-12">{t.leadership.title}</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border hairline p-8 md:p-12 bg-card">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
                <div className="border-r hairline pr-8 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-8 md:rtl:border-l md:rtl:pl-8">
                  <div className="font-display text-2xl md:text-3xl mb-2">{t.leadership.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-primary leading-relaxed mb-3">{t.leadership.role}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{t.leadership.union}</div>
                </div>
                <div className="space-y-5">
                  <p className="text-base md:text-lg text-foreground/85 leading-relaxed">{t.leadership.bio}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed border-t hairline pt-5">{t.leadership.council}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
