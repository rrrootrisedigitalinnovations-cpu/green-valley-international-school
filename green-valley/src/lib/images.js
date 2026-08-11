// Placeholder photography.
// Served via Picsum (picsum.photos) — a free, royalty-free image CDN backed by
// real Unsplash photographers, safe to use with no licensing cost. Each seed
// keeps its image stable across reloads. Swap these for the school's own
// commissioned photography before launch — see README "Replacing photography".

const photo = (seed, w = 1600, h = 1200) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  heroCampus: photo("gvis-hero-campus", 2000, 1400),
  heroCampusAlt: photo("gvis-hero-alt", 1600, 2000),
  principal: photo("gvis-principal", 900, 1100),
  aboutStory: photo("gvis-about-story", 1400, 1700),
  aboutCampusWide: photo("gvis-about-wide", 2000, 1100),
  admissionsHero: photo("gvis-admissions", 1800, 1200),
  academicsHero: photo("gvis-academics", 1800, 1200),
  facultyHero: photo("gvis-faculty-hero", 1800, 1000),
  campusLifeHero: photo("gvis-campus-life", 1800, 1200),
  facilitiesHero: photo("gvis-facilities-hero", 1800, 1200),
  galleryHero: photo("gvis-gallery-hero", 1800, 1000),
  newsHero: photo("gvis-news-hero", 1800, 1000),
  careersHero: photo("gvis-careers-hero", 1800, 1200),
  contactHero: photo("gvis-contact-hero", 1800, 1000),

  programs: {
    kindergarten: photo("gvis-kg", 900, 1100),
    primary: photo("gvis-primary", 900, 1100),
    middle: photo("gvis-middle", 900, 1100),
    high: photo("gvis-high", 900, 1100),
  },

  facilities: {
    smartClassrooms: photo("gvis-fac-smartclass", 1200, 900),
    scienceLabs: photo("gvis-fac-scilab", 1200, 900),
    computerLabs: photo("gvis-fac-complab", 1200, 900),
    library: photo("gvis-fac-library", 1200, 900),
    sportsArena: photo("gvis-fac-sports", 1200, 900),
    musicStudio: photo("gvis-fac-music", 1200, 900),
    danceStudio: photo("gvis-fac-dance", 1200, 900),
    auditorium: photo("gvis-fac-auditorium", 1200, 900),
    roboticsLab: photo("gvis-fac-robotics", 1200, 900),
    swimmingPool: photo("gvis-fac-pool", 1200, 900),
  },

  studentLife: {
    sports: photo("gvis-life-sports", 1000, 1200),
    arts: photo("gvis-life-arts", 1000, 1200),
    music: photo("gvis-life-music", 1000, 1200),
    stem: photo("gvis-life-stem", 1000, 1200),
    coding: photo("gvis-life-coding", 1000, 1200),
    robotics: photo("gvis-life-robotics", 1000, 1200),
    cultural: photo("gvis-life-cultural", 1000, 1200),
    trips: photo("gvis-life-trips", 1000, 1200),
  },

  faculty: Array.from({ length: 8 }, (_, i) => photo(`gvis-faculty-${i + 1}`, 700, 850)),

  gallery: Array.from({ length: 16 }, (_, i) => photo(`gvis-gallery-${i + 1}`, 900, 900 + ((i % 3) * 220))),

  testimonials: Array.from({ length: 6 }, (_, i) => photo(`gvis-testimonial-${i + 1}`, 300, 300)),

  news: Array.from({ length: 6 }, (_, i) => photo(`gvis-news-${i + 1}`, 900, 650)),

  careers: {
    culture1: photo("gvis-careers-culture-1", 900, 1100),
    culture2: photo("gvis-careers-culture-2", 900, 700),
    culture3: photo("gvis-careers-culture-3", 900, 700),
  },
};
