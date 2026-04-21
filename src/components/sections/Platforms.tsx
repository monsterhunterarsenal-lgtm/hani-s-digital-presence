import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Platforms = () => {
  const { t } = useLang();
  return (
    <section id="sectionPlatforms" className="py-28 md:py-36 relative bg-background">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.platforms.eyebrow}</div>
            <h2 className="font-display h2-display mb-6">{t.platforms.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.platforms.intro}</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--hairline))]">
          {t.platforms.cards.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.06}>
              <article className="bg-background h-full p-8 group transition-colors duration-500 hover:bg-[hsl(var(--primary)/0.04)] border border-transparent hover:border-[hsl(var(--primary)/0.3)]">
                <div className="text-primary mb-4 text-base">◇</div>
                <h3 className="font-display h3-display mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#sectionContact" className="text-xs uppercase text-primary hover:underline underline-offset-4" style={{ letterSpacing: "0.22em" }}>
            {t.platforms.learnMore} →
          </a>
        </div>
      </div>
    </section>
  );
};
