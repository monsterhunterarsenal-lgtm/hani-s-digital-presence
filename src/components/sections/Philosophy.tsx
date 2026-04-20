import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Philosophy = () => {
  const { t } = useLang();
  return (
    <section className="py-28 md:py-40 relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <Reveal>
            <div className="eyebrow mb-4">{t.philosophy.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">{t.philosophy.title}</h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto mb-24">
          {t.philosophy.pillars.map((line, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-background p-10 md:p-12 text-center h-full">
                <div className="font-display text-5xl text-gold mb-6">0{i + 1}</div>
                <p className="font-display text-xl md:text-2xl leading-snug">{line}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <figure className="max-w-3xl mx-auto text-center">
            <div className="font-display text-6xl text-primary leading-none mb-6">"</div>
            <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed text-foreground/90">
              {t.philosophy.quote}
            </blockquote>
            <figcaption className="mt-8 text-xs uppercase tracking-[0.3em] text-primary">
              — {t.philosophy.quoteAuthor}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};
