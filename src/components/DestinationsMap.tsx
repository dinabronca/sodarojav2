import React from 'react';
import { motion } from 'framer-motion';
import { getContent } from '../data/content';
import { demoEpisodes } from '../data/episodes';

// City coords on a 1000x500 world map (simplified mercator)
const cityCoords: Record<string, { x: number; y: number }> = {
  'NUEVA YORK': { x: 280, y: 175 },
  'BUENOS AIRES': { x: 320, y: 370 },
  'PARÍS': { x: 480, y: 155 },
  'TOKIO': { x: 830, y: 180 },
  'ESTAMBUL': { x: 555, y: 175 },
  'PRAGA': { x: 510, y: 150 },
  'LONDRES': { x: 470, y: 140 },
  'BERLÍN': { x: 505, y: 140 },
  'ROMA': { x: 505, y: 175 },
  'MADRID': { x: 455, y: 175 },
  'BARCELONA': { x: 470, y: 172 },
  'MOSCÚ': { x: 575, y: 120 },
  'BANGKOK': { x: 745, y: 240 },
  'SINGAPUR': { x: 760, y: 285 },
  'SÍDNEY': { x: 870, y: 370 },
  'CIUDAD DE MÉXICO': { x: 190, y: 220 },
  'LIMA': { x: 240, y: 300 },
  'BOGOTÁ': { x: 250, y: 260 },
  'SANTIAGO': { x: 270, y: 360 },
  'MARRAKECH': { x: 450, y: 195 },
  'CAIRO': { x: 550, y: 200 },
  'MUMBAI': { x: 665, y: 225 },
  'SEÚL': { x: 810, y: 170 },
};

export const DestinationsMap: React.FC = () => {
  const content = getContent();
  const episodes = content.episodios?.items?.length ? content.episodios.items : demoEpisodes;
  const cities = [...new Set(episodes.map((e: any) => e.city))].map(city => ({
    name: city,
    coords: cityCoords[city as string] || null,
  })).filter(c => c.coords !== null);

  return (
    <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div key={`mp-${i}`} className="absolute rounded-full animate-float"
            style={{ left: `${10 + (i * 12) % 80}%`, top: `${15 + (i * 11) % 70}%`, width: 2, height: 2, background: 'rgba(196,85,85,0.4)', animationDuration: `${8 + i * 2}s`, animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-5 justify-center">
            <div className="w-10 h-px bg-soda-red" />
            <span className="text-soda-red text-[10px] tracking-[0.3em] uppercase font-light">Mapa de viajes</span>
            <div className="w-10 h-px bg-soda-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-soda-glow leading-[1.1] text-center mb-14">
            Donde <em className="text-soda-red">estuvimos</em>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full mx-auto border border-soda-mist/8 rounded-sm p-4 sm:p-8"
          style={{ maxWidth: '800px', background: 'linear-gradient(135deg, rgba(10,14,26,0.5) 0%, rgba(15,20,35,0.5) 100%)' }}
        >
          <svg viewBox="0 0 1000 500" className="w-full h-auto">
            {/* Subtle grid */}
            {[100,200,300,400,500,600,700,800,900].map(x => (
              <line key={`gx-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(212,197,176,0.03)" strokeWidth="0.5" />
            ))}
            {[100,200,300,400].map(y => (
              <line key={`gy-${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(212,197,176,0.03)" strokeWidth="0.5" />
            ))}

            {/* Equator line */}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="rgba(212,197,176,0.05)" strokeWidth="0.5" strokeDasharray="8 4" />

            {/* Connection lines — curved dashed */}
            {cities.length > 1 && cities.slice(0, -1).map((c, i) => {
              const next = cities[i + 1];
              if (!c.coords || !next.coords) return null;
              const mx = (c.coords.x + next.coords.x) / 2;
              const my = Math.min(c.coords.y, next.coords.y) - 40;
              return (
                <motion.path key={`ln-${i}`}
                  d={`M ${c.coords.x} ${c.coords.y} Q ${mx} ${my} ${next.coords.x} ${next.coords.y}`}
                  fill="none" stroke="rgba(196,85,85,0.12)" strokeWidth="1" strokeDasharray="6 4"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.3, duration: 1.2 }}
                />
              );
            })}

            {/* City markers */}
            {cities.map((city, i) => (
              <g key={city.name as string}>
                {/* Outer ring pulse */}
                <motion.circle cx={city.coords!.x} cy={city.coords!.y} r="12" fill="none" stroke="rgba(196,85,85,0.15)" strokeWidth="0.5"
                  animate={{ r: [6, 14, 6], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                />
                {/* Glow */}
                <circle cx={city.coords!.x} cy={city.coords!.y} r="8" fill="rgba(196,85,85,0.08)" />
                {/* Dot */}
                <motion.circle cx={city.coords!.x} cy={city.coords!.y} r="4" fill="rgba(196,85,85,0.7)"
                  initial={{ opacity: 0, r: 0 }} whileInView={{ opacity: 1, r: 4 }} viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                  style={{ filter: 'drop-shadow(0 0 6px rgba(196,85,85,0.5))' }}
                />
                {/* Label */}
                <motion.text x={city.coords!.x} y={city.coords!.y - 14} textAnchor="middle"
                  fill="rgba(212,197,176,0.55)" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.12em"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >{city.name}</motion.text>
              </g>
            ))}
          </svg>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-soda-red/60" />
              <span className="text-soda-lamp/35 text-[9px] tracking-wider">{cities.length} ciudades visitadas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
