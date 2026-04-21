import { useEffect, useMemo, useState } from "react";
import { geoEqualEarth, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HUB_ID = "268"; // Georgia
// 6 brief markets + KSA on map per user request
const ACTIVE_IDS = new Set(["268", "784", "818", "792", "512", "458", "682"]);

type Marker = {
  code: string;
  name: string;
  coords: [number, number];
  hub?: boolean;
  showOnMap?: boolean;
};

const MARKERS: Marker[] = [
  { code: "GE", name: "Georgia", coords: [43.3569, 42.3154], hub: true, showOnMap: true },
  { code: "AE", name: "UAE", coords: [54.3773, 24.4539], showOnMap: true },
  { code: "EG", name: "Egypt", coords: [31.2357, 30.0444], showOnMap: true },
  { code: "TR", name: "Turkey", coords: [35.2433, 38.9637], showOnMap: true },
  { code: "OM", name: "Oman", coords: [58.5577, 23.5859], showOnMap: true },
  { code: "MY", name: "Malaysia", coords: [101.9758, 4.2105], showOnMap: true },
  { code: "SA", name: "Saudi Arabia", coords: [45.0792, 23.8859], showOnMap: true },
];

interface WorldMapProps {
  compact?: boolean;
  label?: string;
  showLabels?: boolean;
}

export const WorldMap = ({ compact = false, label, showLabels = true }: WorldMapProps) => {
  const WIDTH = 980;
  const HEIGHT = compact ? 420 : 500;
  const [countries, setCountries] = useState<Feature<Geometry, { id: string }>[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(GEO_URL)
      .then((r) => r.json())
      .then((topo: any) => {
        if (cancelled) return;
        const fc = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry, { id: string }>;
        setCountries(fc.features);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const { pathFn, projection } = useMemo(() => {
    const proj = geoEqualEarth()
      .scale(compact ? 165 : 195)
      .translate([WIDTH / 2, HEIGHT / 2]);
    return { pathFn: geoPath(proj), projection: proj };
  }, [compact]);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        role="img"
        aria-label="HHG global presence map"
      >
        <g>
          {countries.map((geo, i) => {
            const id = String((geo as { id?: string | number }).id ?? "");
            const isHub = id === HUB_ID;
            const isActive = ACTIVE_IDS.has(id);
            const fill = isHub
              ? "hsl(var(--primary) / 0.7)"
              : isActive
              ? "hsl(var(--primary) / 0.35)"
              : "hsl(var(--foreground) / 0.06)";
            const stroke = isActive
              ? "hsl(var(--primary) / 0.6)"
              : "hsl(var(--foreground) / 0.10)";
            const d = pathFn(geo) ?? "";
            return <path key={i} d={d} fill={fill} stroke={stroke} strokeWidth={0.4} />;
          })}
        </g>

        {MARKERS.filter((m) => m.showOnMap).map((m) => {
          const p = projection(m.coords);
          if (!p) return null;
          const [x, y] = p;
          const r = m.hub ? 5 : 3.5;
          const haloR = m.hub ? 12 : 8;
          return (
            <g key={m.code} transform={`translate(${x},${y})`}>
              <circle r={haloR} fill="hsl(var(--primary))" opacity={0.25}>
                <animate attributeName="r" values={`${haloR};${haloR + 8};${haloR}`} dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0;0.25" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle r={r} fill="hsl(var(--primary))" />
              {showLabels && !compact && (
                <text
                  x={m.hub ? 9 : 7}
                  y={3}
                  fill="hsl(var(--primary))"
                  fontSize={9}
                  style={{ letterSpacing: "0.12em", textTransform: "uppercase", paintOrder: "stroke", stroke: "hsl(var(--background))", strokeWidth: 2.5 }}
                >
                  {m.name}
                </text>
              )}
            </g>
          );
        })}

        {compact && label && (
          <g>
            {(() => {
              const p = projection([43.3569, 42.3154]);
              if (!p) return null;
              const [x, y] = p;
              return (
                <g>
                  <line x1={x} y1={y} x2={x + 70} y2={y - 40} stroke="hsl(var(--primary) / 0.6)" strokeWidth={0.6} />
                  <text x={x + 75} y={y - 38} fill="hsl(var(--primary))" fontSize={9} style={{ letterSpacing: "0.18em", textTransform: "uppercase" }}>
                    {label}
                  </text>
                </g>
              );
            })()}
          </g>
        )}
      </svg>
    </div>
  );
};
