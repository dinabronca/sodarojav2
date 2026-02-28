import React from 'react';
import { motion } from 'framer-motion';
import { getContent } from '../data/content';
import { demoEpisodes } from '../data/episodes';

// City coordinates mapped to a simplified mercator-ish projection (0-100 range)
const cityCoords: Record<string, { x: number; y: number }> = {
  'NUEVA YORK': { x: 28, y: 34 },
  'BUENOS AIRES': { x: 32, y: 72 },
  'PARÍS': { x: 48, y: 31 },
  'TOKIO': { x: 83, y: 35 },
  'ESTAMBUL': { x: 56, y: 34 },
  'PRAGA': { x: 51, y: 30 },
  'LONDRES': { x: 47, y: 28 },
  'BERLÍN': { x: 50, y: 28 },
  'ROMA': { x: 50, y: 34 },
  'MADRID': { x: 45, y: 35 },
  'BARCELONA': { x: 47, y: 34 },
  'ÁMSTERDAM': { x: 48, y: 28 },
  'MOSCÚ': { x: 58, y: 24 },
  'ESTOCOLMO': { x: 52, y: 22 },
  'BANGKOK': { x: 75, y: 46 },
  'SINGAPUR': { x: 76, y: 55 },
  'SÍDNEY': { x: 87, y: 72 },
  'CIUDAD DE MÉXICO': { x: 19, y: 42 },
  'LIMA': { x: 24, y: 58 },
  'BOGOTÁ': { x: 25, y: 50 },
  'SANTIAGO': { x: 27, y: 70 },
  'MARRAKECH': { x: 44, y: 38 },
  'CAIRO': { x: 55, y: 38 },
  'MUMBAI': { x: 67, y: 42 },
  'SEÚL': { x: 81, y: 33 },
};

export const DestinationsMap: React.FC = () => {
  const content = getContent();
  const episodes = content.episodios?.items?.length ? content.episodios.items : demoEpisodes;
  
  // Get unique cities with coords
  const cities = [...new Set(episodes.map((e: any) => e.city))].map(city => ({
    name: city,
    coords: cityCoords[city as string] || null,
  })).filter(c => c.coords !== null);

  return (
    <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="w-10 h-px bg-soda-red/60" />
            <span className="text-soda-red/80 text-[10px] tracking-[0.3em] uppercase font-light">Mapa de viajes</span>
            <div className="w-10 h-px bg-soda-red/60" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-soda-glow leading-[1.1] text-center mb-14">
            Donde estuvimos
          </h2>
        </motion.div>

        {/* Map container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[2/1] max-h-[400px] mx-auto"
        >
          {/* Grid lines — longitude/latitude feel */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            {/* Horizontal grid lines */}
            {[10, 20, 30, 40].map(y => (
              <line key={`h-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(212,197,176,0.03)" strokeWidth="0.15" />
            ))}
            {/* Vertical grid lines */}
            {[20, 40, 60, 80].map(x => (
              <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="50" stroke="rgba(212,197,176,0.03)" strokeWidth="0.15" />
            ))}
            {/* Simplified continent outlines — very abstract */}
            <ellipse cx="30" cy="35" rx="15" ry="20" fill="none" stroke="rgba(212,197,176,0.04)" strokeWidth="0.3" />
            <ellipse cx="50" cy="30" rx="12" ry="18" fill="none" stroke="rgba(212,197,176,0.04)" strokeWidth="0.3" />
            <ellipse cx="72" cy="35" rx="14" ry="16" fill="none" stroke="rgba(212,197,176,0.04)" strokeWidth="0.3" />
            <ellipse cx="86" cy="62" rx="8" ry="8" fill="none" stroke="rgba(212,197,176,0.04)" strokeWidth="0.3" />
          </svg>

          {/* Connection lines between cities */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
            {cities.length > 1 && cities.slice(0, -1).map((c, i) => {
              const next = cities[i + 1];
              if (!c.coords || !next.coords) return null;
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={c.coords!.x} y1={c.coords!.y}
                  x2={next.coords!.x} y2={next.coords!.y}
                  stroke="rgba(196,85,85,0.08)"
                  strokeWidth="0.2"
                  strokeDasharray="1 1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.3, duration: 1 }}
                />
              );
            })}
          </svg>

          {/* City dots */}
          {cities.map((city, i) => (
            <motion.div
              key={city.name as string}
              className="absolute group cursor-default"
              style={{ left: `${city.coords!.x}%`, top: `${city.coords!.y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, type: 'spring' }}
            >
              {/* Pulse ring */}
              <div className="absolute inset-0 w-3 h-3 -m-[2px]">
                <div className="absolute inset-0 rounded-full bg-soda-red/20 animate-ping" style={{ animationDuration: `${3 + i * 0.5}s` }} />
              </div>
              {/* Dot */}
              <div className="w-2 h-2 rounded-full bg-soda-red/60 group-hover:bg-soda-red transition-colors duration-300 relative z-10" 
                style={{ boxShadow: '0 0 6px rgba(196,85,85,0.4)' }} />
              {/* Label */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                <span className="text-soda-glow text-[8px] sm:text-[9px] tracking-[0.15em] uppercase bg-soda-night/80 px-2 py-0.5 rounded-sm border border-soda-mist/10">
                  {city.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
