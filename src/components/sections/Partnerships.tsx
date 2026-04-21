import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Partnerships = () => {
  const { t } = useLang();
  return (
    <section id="partnerships" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.partnerships.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              {t.partnerships.title}
              <span className="italic text-gold">{t.partnerships.titleAccent}</span>
              {t.partnerships.titleTail}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.partnerships.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {t.partnerships.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="border hairline p-8 md:p-10 h-full hover:border-primary transition-colors duration-500 group relative">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">0{i + 1}</div>
                <div className="font-display text-2xl mb-4 leading-snug">{c.title}</div>
                <div className="gold-divider mb-5 max-w-[40px]" />
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center font-display italic text-base md:text-lg text-muted-foreground">
            {t.partnerships.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
