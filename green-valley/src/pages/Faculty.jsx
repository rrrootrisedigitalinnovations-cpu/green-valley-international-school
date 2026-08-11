import { useMemo, useState } from "react";
import { Search, GraduationCap, Clock3 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import { images } from "../lib/images";
import { FACULTY } from "../lib/constants";

const DEPARTMENTS = ["All", ...new Set(FACULTY.map((f) => f.department))];

export default function Faculty() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");

  const filtered = useMemo(() => {
    return FACULTY.filter((f) => {
      const matchesDept = department === "All" || f.department === department;
      const matchesQuery =
        !query ||
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        f.role.toLowerCase().includes(query.toLowerCase());
      return matchesDept && matchesQuery;
    });
  }, [query, department]);

  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="120+ educators. One shared standard."
        description="Every teacher on this campus is either Cambridge-trained, subject-specialised, or both — and most are here for the long term."
        image={images.facultyHero}
        imageAlt="A Green Valley International School teacher with students"
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Faculty Search" title="Find a teacher by name, role or department." />

          <div className="mt-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search faculty..."
                className="w-full rounded-full border border-ink-200 dark:border-white/15 bg-surface-card dark:bg-surface-darkcard pl-11 pr-4 py-3 text-sm text-ink dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDepartment(d)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-300 ${
                    department === d
                      ? "bg-primary text-white"
                      : "bg-ink-100 dark:bg-white/5 text-ink-500 dark:text-white/60 hover:bg-ink-200 dark:hover:bg-white/10"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-sm text-ink-500 dark:text-white/50">
              No faculty match "{query}" in {department}. Try a different search.
            </p>
          ) : (
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((f, i) => (
                <Reveal key={f.name} delay={(i % 4) * 0.06}>
                  <div className="group">
                    <div className="relative rounded-[22px] overflow-hidden aspect-[4/5]">
                      <img
                        src={images.faculty[f.photoIndex % images.faculty.length]}
                        alt={f.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display font-semibold text-ink dark:text-white">{f.name}</h3>
                      <p className="text-sm text-accent-600 dark:text-accent-400">{f.role}</p>
                      <p className="text-xs text-ink-500 dark:text-white/50 mt-2 flex items-center gap-1.5">
                        <GraduationCap size={13} /> {f.qualification}
                      </p>
                      <p className="text-xs text-ink-500 dark:text-white/50 mt-1 flex items-center gap-1.5">
                        <Clock3 size={13} /> {f.experience} experience
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
