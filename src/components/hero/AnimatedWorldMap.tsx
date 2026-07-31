import { ComposableMap, Geographies, Geography, Line, Marker } from 'react-simple-maps';

interface AnimatedWorldMapProps {
  className?: string;
}

// Real-world topojson (public CDN, fetched client-side by react-simple-maps)
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Route hubs as [longitude, latitude] — matches the US / Middle East / SE Asia route in the reference
const HUBS: { name: string; coordinates: [number, number] }[] = [
  { name: 'North America', coordinates: [-95, 38] },
  { name: 'Middle East', coordinates: [55, 24] },
  { name: 'Southeast Asia', coordinates: [107, 2] },
];

// Builds a gently-bowed flight-path arc between two points in lon/lat space
const arcPoints = (
  from: [number, number],
  to: [number, number],
  bow = 18,
  steps = 24
): [number, number][] => {
  const points: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const lon = from[0] + (to[0] - from[0]) * t;
    const lat = from[1] + (to[1] - from[1]) * t + Math.sin(Math.PI * t) * bow;
    points.push([lon, lat]);
  }
  return points;
};

export const AnimatedWorldMap = ({ className = '' }: AnimatedWorldMapProps) => {
  return (
    <div className={`relative overflow-hidden bg-transparent ${className}`}>
                      <style>{`
        .route-dash {
          stroke-dasharray: 6 7;
          animation: routeDashMove 1.1s linear infinite;
        }
        @keyframes routeDashMove {
          to { stroke-dashoffset: -26; }
        }
        .hub-ping {
          animation: hubPing 2s ease-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes hubPing {
          0% { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 180, center: [20, 10] }}
        width={800}
        height={450}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="fill-brand-500/25 stroke-slate-300 dark:fill-blue-400/25 dark:stroke-white/10"
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {[
          [HUBS[0].coordinates, HUBS[1].coordinates],
          [HUBS[1].coordinates, HUBS[2].coordinates],
        ].map(([from, to], i) => (
          <Line
            key={i}
            coordinates={arcPoints(from as [number, number], to as [number, number])}
            className="route-dash stroke-slate-700 dark:stroke-white"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
          />
        ))}

        {HUBS.map((hub) => (
          <Marker key={hub.name} coordinates={hub.coordinates}>
            <circle r={10} className="hub-ping fill-brand-500/40 dark:fill-white/30" />
            <circle r={4.5} className="fill-slate-800 dark:fill-white" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};