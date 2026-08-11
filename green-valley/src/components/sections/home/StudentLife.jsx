import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import Reveal from "../../ui/Reveal";
import { images } from "../../../lib/images";
import { STUDENT_LIFE } from "../../../lib/constants";

export default function StudentLife() {
  return (
    <section className="py-24 md:py-32">
      <Container className="mb-12">
        <SectionHeading
          eyebrow="Beyond the Classroom"
          title="Student life, in eight parts."
          description="A full student is built outside the timetable too — on courts, in studios, and on stages, as much as in exam halls."
        />
      </Container>

      <div className="pl-6 md:pl-10 lg:pl-16">
        <div className="flex gap-5 overflow-x-auto pb-6 pr-6 md:pr-10 lg:pr-16 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {STUDENT_LIFE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04} className="shrink-0 snap-start">
              <div className="group relative w-[240px] sm:w-[280px] h-[360px] rounded-[24px] overflow-hidden">
                <img
                  src={images.studentLife[item.image]}
                  alt={`${item.title} at Green Valley International School`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-white/70 mt-1.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
