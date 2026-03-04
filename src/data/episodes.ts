// Episodios de demo con embeds reales de podcasts famosos para testing
// Ordenados por fecha descendente (más reciente primero)

interface DemoEpisode {
  id: string;
  city: string;
  country?: string;
  durationMin?: number;
  title: string;
  description: string;
  imageUrl: string;
  isPremium: boolean;
  lat: number;
  lng: number;
  publishDate: string;
  links: Record<string, string>;
  embeds: Record<string, string>;
}

export const demoEpisodes: DemoEpisode[
  {
    id: '9',
    city: 'LIMA',
    country: 'Peru',
    durationMin: 52,
    title: 'El Oraculo del Pacifico',
    description: 'En los acantilados de Miraflores, un viejo surfista dice poder leer el futuro en las olas. Fuimos a escucharlo.',
    imageUrl: 'https://images.unsplash.com/photo-1531968455001-5c5272a67c71?w=800&q=80',
    isPremium: false,
    lat: -12.0464,
    lng: -77.0428,
    publishDate: '2026-02-20',
    links: {
      spotify: 'https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk',
      youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      applePodcasts: 'https://podcasts.apple.com/podcast/id1234567890',
      ivoox: 'https://www.ivoox.com/podcast-sodaroja_sq_f1234567_1.html',
      soundcloud: 'https://soundcloud.com/sodaroja',
    },
    embeds: {
      youtube: 'https://www.youtube.com/embed/jfKfPfyJRdk',
      spotify: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator&theme=0',
      applePodcasts: 'https://embed.podcasts.apple.com/us/podcast/the-daily/id1200361736?i=1000640000000&theme=dark',
      ivoox: 'https://www.ivoox.com/player_ej_1234567_2_1.html',
      soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291&color=%23c45555&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
    },
    gallery: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&q=80',
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=400&q=80',
      'https://images.unsplash.com/photo-1609438885753-5ed6e1e9b3ae?w=400&q=80',
    ],
  },
  {
    id: '8',
    city: 'BERLIN',
    country: 'Alemania',
    durationMin: 48,
    title: 'Fantasmas del Muro',
    description: 'Treinta anos despues de la caida, hay quienes juran escuchar golpes desde el otro lado. Recorrimos el muro de noche.',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
    isPremium: true,
    lat: 52.5200,
    lng: 13.4050,
    publishDate: '2026-02-05',
    links: {
      spotify: 'https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk',
      youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      ivoox: 'https://www.ivoox.com/podcast-sodaroja_sq_f1234567_1.html',
      soundcloud: 'https://soundcloud.com/sodaroja',
    },
    embeds: {
      spotify: 'https://open.spotify.com/embed/episode/0Sfs7QGMRO2VWMpeFGWCHY?utm_source=generator&theme=0',
      soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291&color=%23c45555&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
    },
    gallery: [
      'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=400&q=80',
      'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=400&q=80',
    ],
  },
  {
    id: '7',
    city: 'MARRAKECH',
    country: 'Marruecos',
    durationMin: 55,
    title: 'El Sonido de la Medina',
    description: 'En el laberinto mas grande del norte de Africa, los sonidos cuentan historias que las palabras no pueden.',
    imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    isPremium: false,
    lat: 31.6295,
    lng: -7.9811,
    publishDate: '2026-01-15',
    links: {
      spotify: 'https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk',
      applePodcasts: 'https://podcasts.apple.com/podcast/id1234567890',
      youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      soundcloud: 'https://soundcloud.com/sodaroja',
    },
    embeds: {
      youtube: 'https://www.youtube.com/embed/jfKfPfyJRdk',
      spotify: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator&theme=0',
    },
    gallery: [
      'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&q=80',
      'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=400&q=80',
      'https://images.unsplash.com/photo-1570294646112-27ce4f174e33?w=400&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80',
    ],
  },] = [
  {
    id: '6',
    city: 'NUEVA YORK',
    country: 'Estados Unidos',
    durationMin: 52,
    title: 'El Fantasma del Metro',
    description: 'Línea 6, estación City Hall. Clausurada en 1945. Pero algunos conductores juran que alguien sigue esperando allí.',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    isPremium: false,
    lat: 40.7128,
    lng: -74.0060,
    publishDate: '2026-02-05',
    links: { youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', spotify: 'https://open.spotify.com/episode/4rOoJ6Egrf8K2IrywzwOMk' },
    embeds: {
      spotify: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator&theme=0',
    },
  },
  {
    id: '5',
    city: 'PRAGA',
    country: 'República Checa',
    durationMin: 48,
    title: 'El Reloj que Predijo la Guerra',
    description: 'En la plaza más antigua de Europa, un reloj astronómico medieval guarda una profecía que nadie quiso escuchar.',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
    isPremium: true,
    lat: 50.0875,
    lng: 14.4214,
    publishDate: '2026-01-25',
    links: {},
    embeds: {},
  },
  {
    id: '4',
    city: 'ESTAMBUL',
    country: 'Turquía',
    durationMin: 55,
    title: 'Los Tesoros Hundidos del Bósforo',
    description: 'Tres imperios. Mil naufragios. Un buzo que encontró algo que no debía encontrar.',
    imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
    isPremium: false,
    lat: 41.0082,
    lng: 28.9784,
    publishDate: '2026-01-10',
    links: { youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', spotify: 'https://open.spotify.com/episode/3Qm86XLflmIXVm1wd7iAGE' },
    embeds: {
      spotify: 'https://open.spotify.com/embed/episode/3Qm86XLflmIXVm1wd7iAGE?utm_source=generator&theme=0',
      soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291&color=%23c45555&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
    },
  },
  {
    id: '3',
    city: 'BUENOS AIRES',
    country: 'Argentina',
    durationMin: 42,
    title: 'La Dama de Blanco',
    description: 'Cada noche de tormenta, una figura cruza el Cementerio de la Recoleta. Los que la siguieron... nunca contaron la historia completa.',
    imageUrl: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80',
    isPremium: false,
    lat: -34.6037,
    lng: -58.3816,
    publishDate: '2025-12-20',
    links: { youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    embeds: {
      spotify: 'https://open.spotify.com/embed/episode/5VKBVQoB2sBkE43qRx3Svb?utm_source=generator&theme=0',
    },
  },
  {
    id: '2',
    city: 'TOKIO',
    country: 'Japón',
    durationMin: 58,
    title: 'El Último Samurái Digital',
    description: 'En los callejones de Akihabara, un hombre programa códigos que nadie puede descifrar. Su identidad: un misterio de 20 años.',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    isPremium: true,
    lat: 35.6762,
    lng: 139.6503,
    publishDate: '2025-12-01',
    links: {},
    embeds: {},
  },
  {
    id: '1',
    city: 'PARÍS',
    country: 'Francia',
    durationMin: 45,
    title: 'Las Catacumbas Olvidadas',
    description: 'Bajo las calles más elegantes del mundo, seis millones de esqueletos guardan secretos que nadie quiere recordar.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    isPremium: false,
    lat: 48.8566,
    lng: 2.3522,
    publishDate: '2025-11-15',
    links: { youtube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', spotify: 'https://open.spotify.com/episode/4rOoJ6Egrf8K2IrywzwOMk' },
    embeds: {
      spotify: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk?utm_source=generator&theme=0',
      soundcloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/291&color=%23c45555&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false',
    },
  },
];
