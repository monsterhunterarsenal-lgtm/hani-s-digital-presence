import { useLang } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/Reveal";

// HHG-presence ISO codes
const ACTIVE = new Set(["GE", "AE", "EG", "TR", "OM", "MY"]);
const HUB = "GE";

export const GlobalPresence = () => {
  const { t } = useLang();

  const colorFor = (code: string) => {
    if (code === HUB) return "hsl(var(--primary))";
    if (ACTIVE.has(code)) return "hsl(var(--primary) / 0.55)";
    return "hsl(var(--foreground) / 0.12)";
  };

  return (
    <section id="presence" className="py-28 md:py-36 relative">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <Reveal>
            <div className="eyebrow mb-4">{t.presence.eyebrow}</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{t.presence.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.presence.intro}</p>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.1}>
          <div className="relative border hairline bg-card p-4 md:p-8 mb-10">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto"
              role="img"
              aria-label="HHG global presence map"
            >
              {/* Simplified continent silhouettes — abstract gold/dim representation */}
              <defs>
                <linearGradient id="oceanFade" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--surface-2))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--surface-1))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect width="1000" height="500" fill="url(#oceanFade)" />

              {/* Abstract continents — grey base */}
              <g fill="hsl(var(--foreground) / 0.08)" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="0.5">
                {/* North America */}
                <path d="M 80 110 Q 130 80 200 100 L 270 130 L 290 200 L 240 250 L 170 240 L 120 200 Q 80 170 80 110 Z" />
                {/* South America */}
                <path d="M 250 280 L 310 270 L 330 350 L 300 430 L 260 450 L 240 380 Z" />
                {/* Europe */}
                <path d="M 480 90 L 560 100 L 580 150 L 540 180 L 490 170 L 470 130 Z" />
                {/* Africa */}
                <path d="M 490 200 L 580 200 L 610 280 L 580 380 L 530 410 L 490 360 L 470 280 Z" />
                {/* Asia */}
                <path d="M 590 90 L 800 100 L 870 160 L 880 230 L 820 270 L 720 250 L 640 220 L 600 160 Z" />
                {/* SE Asia / Oceania */}
                <path d="M 800 300 L 870 290 L 890 340 L 850 360 L 810 350 Z" />
                <path d="M 830 400 L 900 395 L 920 430 L 870 450 L 830 430 Z" />
              </g>

              {/* Active country markers — gold dots with halo */}
              {[
                { code: "GE", x: 605, y: 155, label: "Georgia" },
                { code: "AE", x: 645, y: 215, label: "UAE" },
                { code: "EG", x: 555, y: 215, label: "Egypt" },
                { code: "TR", x: 580, y: 165, label: "Turkey" },
                { code: "OM", x: 660, y: 230, label: "Oman" },
                { code: "MY", x: 815, y: 285, label: "Malaysia" },
              ].map((c) => (
                <g key={c.code}>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.code === HUB ? 14 : 10}
                    fill={colorFor(c.code)}
                    opacity={0.18}
                  >
                    <animate attributeName="r" values={`${c.code === HUB ? 14 : 10};${c.code === HUB ? 22 : 18};${c.code === HUB ? 14 : 10}`} dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.18;0;0.18" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.code === HUB ? 6 : 4.5}
                    fill={colorFor(c.code)}
                    stroke="hsl(var(--background))"
                    strokeWidth="1"
                  />
                  <text
                    x={c.x + (c.code === HUB ? 12 : 9)}
                    y={c.y + 4}
                    fill="hsl(var(--foreground))"
                    fontSize="11"
                    fontFamily="var(--font-body)"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t hairline">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/85">{t.presence.hubLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--primary) / 0.55)" }} />
                <span className="text-[11px] uppercase tracking-[0.2em] text-foreground/85">{t.presence.legendActive}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--foreground) / 0.18)" }} />
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{t.presence.legendOther}</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Country chips */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {t.presence.countries.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.05}>
              <div className={`bg-background p-5 text-center h-full grid place-items-center ${c.hub ? "border-t-2" : ""}`} style={c.hub ? { borderTopColor: "hsl(var(--primary))" } : undefined}>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-foreground/85 mb-1">{c.name}</div>
                  {c.hub && (
                    <div className="text-[9px] uppercase tracking-[0.3em] text-primary">{t.presence.hubLabel}</div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
