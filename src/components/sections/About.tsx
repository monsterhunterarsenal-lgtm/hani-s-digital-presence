import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { ZoomableImage } from "@/components/Lightbox";
import aboutPortrait from "@/assets/about-portrait.jpeg";

export const About = () => {
  const { t, lang } = useLang();

  const definitions = lang === "ar"
    ? [
        { label: "المنصب", value: "رئيس مجلس الإدارة والرئيس التنفيذي" },
        { label: "الرئاسة", value: "اتحاد الأعمال الجورجي العربي الأفريقي" },
        { label: "الحوكمة", value: "مجلس استشاري دولي · مستشارون قانونيون وماليون" },
      ]
    : [
        { label: "Role", value: "Chairman & Chief Executive Officer" },
        { label: "Presidency", value: "Georgian-Arab-African Business Union" },
        { label: "Governance", value: "International Advisory Council · Legal & Financial Counsel" },
      ];

  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container-x">
        <Reveal>
          <div className="eyebrow mb-4">{t.about.eyebrow}</div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start mt-8">
          {/* Portrait column */}
          <Reveal delay={0.1}>
            <div className="relative border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <ZoomableImage src={aboutPortrait} alt="Hani Hebashy, Chairman & CEO of Hebashi Holding Group" />
                {/* inset gold border */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: "12px",
                    border: "1px solid hsl(var(--primary) / 0.35)",
                  }}
                />
              </div>
              <div className="px-6 pt-5 pb-8 text-left rtl:text-right">
                <div className="font-display text-[26px] leading-tight text-foreground">
                  Hani Hebashy
                </div>
                <div
                  className="mt-2 text-[11px] uppercase font-medium"
                  style={{
                    letterSpacing: "0.24em",
                    color: "hsl(var(--primary))",
                  }}
                >
                  {lang === "ar" ? "رئيس مجلس الإدارة والرئيس التنفيذي" : "Chairman & CEO"}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                {t.about.title}
              </h2>
            </Reveal>

            <div className="space-y-6">
              {t.about.paragraphs.slice(0, 2).map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <dl className="border-t hairline">
                {definitions.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-6 py-5 border-b hairline"
                  >
                    <dt
                      className="text-[11px] uppercase font-medium text-muted-foreground"
                      style={{ letterSpacing: "0.2em" }}
                    >
                      {d.label}
                    </dt>
                    <dd className="text-sm md:text-base text-foreground">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
