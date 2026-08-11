import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import { images } from "../lib/images";

const CATEGORIES = ["All", "Campus", "Events", "Sports", "Labs", "Activities"];
const CATEGORY_CYCLE = ["Campus", "Events", "Sports", "Labs", "Activities"];

const GALLERY_ITEMS = images.gallery.map((src, i) => ({
  src,
  category: CATEGORY_CYCLE[i % CATEGORY_CYCLE.length],
  caption: `${CATEGORY_CYCLE[i % CATEGORY_CYCLE.length]} · Green Valley International School`,
}));

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === active)),
    [active]
  );

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const step = (dir) =>
    setLightboxIndex((i) => (i === null ? null : (i + dir + filtered.length) % filtered.length));

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Campus life, in pictures."
        description="Classrooms, competitions, labs and everything in between — a running record of what a year at Green Valley actually looks like."
        image={images.galleryHero}
        imageAlt="Green Valley International School gallery"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  active === cat
                    ? "bg-primary text-white"
                    : "bg-ink-100 dark:bg-white/5 text-ink-500 dark:text-white/60 hover:bg-ink-200 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((item, i) => (
              <button
                key={item.src + i}
                onClick={() => openLightbox(i)}
                className="mb-4 block w-full break-inside-avoid rounded-2xl overflow-hidden group relative"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink/95 flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X size={18} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-4 md:left-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-4 md:right-8 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].caption}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
