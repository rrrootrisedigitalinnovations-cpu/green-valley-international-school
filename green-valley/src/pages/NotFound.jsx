import { Home, Compass } from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import ContourLines from "../components/ui/ContourLines";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <ContourLines variant="field" tone="accent" opacity={0.35} lines={5} className="absolute inset-x-0 bottom-0 w-full h-80" />
      <Container className="relative text-center max-w-xl mx-auto">
        <span className="eyebrow inline-flex items-center gap-2 justify-center">
          <Compass size={13} /> Off the map
        </span>
        <h1 className="font-display text-7xl md:text-8xl font-bold text-primary dark:text-white mt-6 leading-none">
          404
        </h1>
        <p className="mt-6 text-lg text-ink dark:text-white font-display font-semibold">
          Even our best navigators couldn't find this page.
        </p>
        <p className="mt-3 text-sm text-ink-500 dark:text-white/55 max-w-sm mx-auto">
          The page you're looking for may have moved, been renamed, or never existed. Let's get you back
          on campus.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" icon={false}>
            <Home size={16} className="mr-1.5 inline" /> Back to Home
          </Button>
          <Button to="/contact" variant="outline" icon={false}>
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
