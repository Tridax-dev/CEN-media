import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero, { Marquee } from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import Footer, { FinalCTA } from "./components/Footer";
import Cursor from "./components/Cursor";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <Team />
        <WhyUs />
        <Booking />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  );
}
