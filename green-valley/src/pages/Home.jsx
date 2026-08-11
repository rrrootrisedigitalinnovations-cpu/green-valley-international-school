import Hero from "../components/sections/home/Hero";
import WhyGreenValley from "../components/sections/home/WhyGreenValley";
import AcademicPrograms from "../components/sections/home/AcademicPrograms";
import CampusFacilities from "../components/sections/home/CampusFacilities";
import PrincipalMessage from "../components/sections/home/PrincipalMessage";
import StudentLife from "../components/sections/home/StudentLife";
import Achievements from "../components/sections/home/Achievements";
import Testimonials from "../components/sections/home/Testimonials";
import CTASection from "../components/sections/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyGreenValley />
      <AcademicPrograms />
      <CampusFacilities />
      <PrincipalMessage />
      <StudentLife />
      <Achievements />
      <Testimonials />
      <CTASection />
    </>
  );
}
