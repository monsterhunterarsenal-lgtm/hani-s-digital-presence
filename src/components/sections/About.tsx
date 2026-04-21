import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.about.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">{t.about.title}</h2>
          </Reveal>

          <div className="space-y-6">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="eyebrow mb-6">{t.about.principlesTitle}</div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {t.about.principles.map((p, i) => (
            <Reveal key={p.title} delay={0.1 + i * 0.08}>
              <div className="bg-background h-full p-8 md:p-10 group hover:bg-surface-2 transition-colors duration-500 relative">
                <div className="absolute top-0 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-700" />
                <div className="font-display text-sm text-primary tracking-[0.3em] uppercase mb-4">0{i + 1}</div>
                <div className="font-display text-xl md:text-2xl mb-3 leading-snug">{p.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
