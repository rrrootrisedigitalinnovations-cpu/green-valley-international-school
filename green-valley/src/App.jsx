import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import ScrollProgressBar from "./components/layout/ScrollProgressBar";
import FloatingAdmissionButton from "./components/layout/FloatingAdmissionButton";
import PageTransition from "./components/layout/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import CampusLife from "./pages/CampusLife";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import NewsEvents from "./pages/NewsEvents";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/admissions" element={<PageTransition><Admissions /></PageTransition>} />
        <Route path="/academics" element={<PageTransition><Academics /></PageTransition>} />
        <Route path="/faculty" element={<PageTransition><Faculty /></PageTransition>} />
        <Route path="/campus-life" element={<PageTransition><CampusLife /></PageTransition>} />
        <Route path="/facilities" element={<PageTransition><Facilities /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/news" element={<PageTransition><NewsEvents /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-surface-dark transition-colors duration-500">
      <Loader visible={loading} />
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingAdmissionButton />
    </div>
  );
}
