import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { images } from "../../../lib/images";
import { FACILITIES } from "../../../lib/constants";

const FEATURED = [FACILITIES[0], FACILITIES[4], FACILITIES[1], FACILITIES[3], FACILITIES[8], FACILITIES[9]];

export default function CampusFacilities() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Campus Facilities"
            title="Purpose-built spaces for every subject and every stage."
          />
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent-300 hover:gap-3 transition-all shrink-0"
          >
            Explore all facilities <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {FEATURED.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.06}
              className={i === 0 ? "sm:col-span-2 lg:col-span-3" : i === 4 ? "sm:col-span-2 lg:col-span-3" : "lg:col-span-2"}
            >
              <Link
                to="/facilities"
                className={`group relative block h-full overflow-hidden rounded-[24px] ${i === 0 || i === 4 ? "min-h-[280px]" : "min-h-[220px]"}`}
              >
                <img
                  src={images.facilities[f.image]}
                  alt={f.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent group-hover:from-primary-950/90 transition-colors duration-500" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="text-xs text-white/70 mt-1 max-w-[85%]">{f.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
