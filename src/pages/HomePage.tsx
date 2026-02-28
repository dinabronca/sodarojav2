import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { EpisodeCard } from '../components/EpisodeCard';
import { DestinationsMap } from '../components/DestinationsMap';
import { getContent } from '../data/content';
import { demoEpisodes } from '../data/episodes';

const epNum = (n?: number) => n !== undefined ? `EP. ${String(n).padStart(3, '0')}` : '';

export const HomePage: React.FC = () => {
  const content = getContent();
  const storeEps = content.episodios?.items || [];
  const allRaw = storeEps.length > 0 ? storeEps : demoEpisodes;
  const sorted = useMemo(() =>
    [...allRaw].sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || '')),
    [allRaw]
  );
  const featured = sorted.slice(0, 6);

  const episodeNumberMap = React.useMemo(() => {
    const byDate = [...allRaw].sort((a, b) => (a.publishDate || '').localeCompare(b.publishDate || ''));
    const map: Record<string, number> = {};
    byDate.forEach((ep: any, i: number) => { map[ep.id] = i + 1; });
    return map;
  }, [allRaw]);

  return (
    <>
      <Hero />

      {/* ===== HERO EPISODE — full bleed featured ===== */}
      {featured[0] && (
        <section className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[70vh] min-h-[500px] overflow-hidden group"
          >
            {/* Background image with parallax feel */}
            <div className="absolute inset-[-10%] overflow-hidden">
              <img src={featured[0].imageUrl} alt={featured[0].city}
                className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-[1.03]"
                style={{ filter: 'brightness(0.3) saturate(1.3) contrast(1.1)' }} />
            </div>
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-soda-night via-soda-night/30 to-soda-night/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-soda-night/70 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-20">
              <div className="max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-soda-red/90 text-white text-[8px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-[1px] font-medium">Último episodio</span>
                    <span className="text-soda-fog/30 text-[10px] tracking-[0.2em] uppercase">{featured[0].city}</span>
                    <span className="text-soda-fog/15 text-[10px] font-mono tracking-wider">{epNum(episodeNumberMap[featured[0].id])}</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-soda-glow leading-[1.05] mb-5">
                    &ldquo;{featured[0].title}&rdquo;
                  </h2>
                  <p className="text-soda-fog/40 text-sm sm:text-base font-light max-w-lg leading-relaxed mb-8">{featured[0].description}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Embedded card below for playback */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-10 mb-8">
            <div className="max-w-md">
              <EpisodeCard episode={featured[0]} isNewest episodeNumber={episodeNumberMap[featured[0].id]} />
            </div>
          </div>
        </section>
      )}

      {/* ===== MÁS EPISODIOS ===== */}
      <section id="episodios" className="relative py-20 sm:py-28 px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute" style={{ left: '-5%', bottom: '10%', width: '50%', height: '50%', background: 'radial-gradient(ellipse, rgba(196,85,85,0.03) 0%, transparent 60%)', filter: 'blur(50px)' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-soda-red/60" />
              <span className="text-soda-red/80 text-[10px] tracking-[0.3em] uppercase font-light">Más viajes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-soda-glow leading-[1.1]">
              Todos los <em className="text-soda-red/80">destinos</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featured.slice(1).map((episode: any) => (
              <EpisodeCard key={episode.id} episode={episode} episodeNumber={episodeNumberMap[episode.id]} />
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="text-center mt-14 sm:mt-20">
            <Link to="/episodios" className="group inline-flex items-center gap-3 px-10 py-4 border border-soda-mist/15 text-soda-fog/50 rounded-sm hover:border-soda-mist/25 hover:text-soda-lamp transition-all duration-700 tracking-[0.25em] text-[10px] uppercase">
              Ver todos los episodios
              <ArrowRight size={13} className="text-soda-fog/30 group-hover:text-soda-lamp/50 group-hover:translate-x-1 transition-all duration-700" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== MAPA DE DESTINOS ===== */}
      <DestinationsMap />

      {/* ===== ESCUCHÁ EN — plataformas ===== */}
      <section className="relative py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-soda-fog/25 text-[9px] tracking-[0.4em] uppercase mb-10">Escuchá en tu plataforma favorita</p>
            <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
              {[
                { name: 'Spotify', svg: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' },
                { name: 'Apple Podcasts', svg: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.563 18.656c-.1.453-.348.78-.727.937-.222.1-.453.141-.687.141s-.465-.047-.687-.141c-.379-.157-.627-.484-.727-.937l-.6-3.375C7.856 14.348 7.8 13.5 7.8 12.75c0-2.317 1.883-4.2 4.2-4.2s4.2 1.883 4.2 4.2c0 .75-.056 1.598-.209 2.531l-.6 3.375zm.563-9.206a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z' },
                { name: 'YouTube', svg: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { name: 'SoundCloud', svg: 'M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.054-.048-.1-.099-.1zm1.2-.748c-.066 0-.12.055-.127.127L2 13.479l.248 1.833c.007.072.061.127.127.127s.12-.055.127-.127l.28-1.833-.28-1.875c-.007-.072-.061-.127-.127-.127zm1.2-.566c-.078 0-.143.066-.15.15l-.227 2.418.227 2.242c.007.084.072.15.15.15.078 0 .143-.066.15-.15l.256-2.242-.256-2.418c-.007-.084-.072-.15-.15-.15zm1.197-.39c-.09 0-.168.078-.174.174l-.21 2.784.21 2.55c.006.096.084.174.174.174s.168-.078.174-.174l.24-2.55-.24-2.784c-.006-.096-.084-.174-.174-.174zm1.2-.348c-.102 0-.186.084-.192.192l-.192 3.132.192 2.742c.006.108.09.192.192.192s.186-.084.192-.192l.216-2.742-.216-3.132c-.006-.108-.09-.192-.192-.192zm6.025-1.401c-.15 0-.27.12-.27.27v7.218c0 .15.12.27.27.27h3.975c1.656 0 3-1.344 3-3s-1.344-3-3-3c-.48 0-.936.108-1.344.306-.36-1.95-2.07-3.426-4.128-3.426-.666 0-1.308.144-1.878.396-.18.078-.228.156-.228.312v6.144c0 .162.132.294.294.306z' },
              ].map(p => (
                <a key={p.name} href="#" className="group flex flex-col items-center gap-3 opacity-25 hover:opacity-60 transition-opacity duration-700" title={p.name}>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-soda-lamp group-hover:fill-soda-glow transition-colors duration-500">
                    <path d={p.svg} />
                  </svg>
                  <span className="text-soda-fog/30 text-[9px] tracking-[0.15em] uppercase group-hover:text-soda-fog/50 transition-colors duration-500">{p.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="relative py-20 sm:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ left: '10%', top: '20%', width: '40%', height: '60%', background: 'radial-gradient(ellipse, rgba(196,85,85,0.03) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-soda-fog/20 text-[9px] tracking-[0.4em] uppercase text-center mb-14">Lo que dicen los oyentes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'Cada episodio es como viajar sin mover los pies. La producción es increíble.', author: 'Lucía M.', from: 'Buenos Aires' },
              { quote: 'No sabía que un podcast podía hacerme sentir tanto. Las historias son reales, crudas, humanas.', author: 'Tomás R.', from: 'Córdoba' },
              { quote: 'Lo descubrí por casualidad y ahora no puedo parar. Cada ciudad es un mundo nuevo.', author: 'Valentina S.', from: 'Montevideo' },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="relative p-8 border border-soda-mist/8 rounded-sm group hover:border-soda-mist/15 transition-all duration-700"
              >
                {/* Quote mark */}
                <span className="absolute -top-3 left-6 text-soda-red/15 text-6xl font-serif leading-none select-none">&ldquo;</span>
                <p className="text-soda-fog/50 text-[13px] font-light leading-relaxed mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-px bg-soda-red/30" />
                  <span className="text-soda-lamp/50 text-[10px] tracking-wider">{t.author}</span>
                  <span className="text-soda-fog/20 text-[10px]">·</span>
                  <span className="text-soda-fog/25 text-[10px]">{t.from}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
