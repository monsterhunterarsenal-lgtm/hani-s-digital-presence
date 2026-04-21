import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Platforms = () => {
  const { t } = useLang();
  return (
    <section id="platforms" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.platforms.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.platforms.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.platforms.intro}</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {t.platforms.cards.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <article className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative flex flex-col">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="font-display text-3xl md:text-4xl mb-2 leading-tight">{c.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary mb-5">{c.tag}</div>
                <div className="gold-divider mb-5 max-w-[40px]" />
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
