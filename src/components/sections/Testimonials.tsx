import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const { t } = useLang();
  return (
    <section id="testimonials" className="py-28 md:py-36">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="eyebrow mb-4">{t.testimonials.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.testimonials.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.testimonials.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.placeholder.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="glass p-8 md:p-10 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary mb-6" strokeWidth={1.2} />
                <blockquote className="font-display italic text-lg leading-relaxed text-foreground/90 flex-1">
                  {item.quote}
                </blockquote>
                <footer className="mt-8 pt-6 border-t hairline">
                  <div className="text-sm font-medium text-foreground">{item.author}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.role}</div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
