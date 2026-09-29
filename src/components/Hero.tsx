import { motion } from "motion/react";
import { bookingHref } from "../config";

const lines = ["WE MAKE", "BRANDS", "IMPOSSIBLE", "TO IGNORE."];
const marqueeItems = ["SOCIAL MEDIA", "CONTENT CREATION", "BRANDING", "DIGITAL STRATEGY", "VIDEO", "DESIGN", "GROWTH"];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="label mb-8 text-brand"
        >
          Digital Marketing · Brand · Growth
        </motion.p>

        <h1 className="display-hero">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${line === "IMPOSSIBLE" ? "text-brand" : ""}`}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 max-w-xl"
        >
          <p className="text-lg text-muted">
            We build brands, create content and design digital experiences that help ambitious businesses get seen,
            remembered and chosen.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={bookingHref} className="inline-flex h-14 items-center justify-center bg-brand px-8 font-bold text-white transition-colors hover:bg-brand-dark">
              Book a Strategy Call →
            </a>
            <a href="#work" className="inline-flex h-14 items-center justify-center border border-ink px-8 font-bold transition-colors hover:bg-ink hover:text-white">
              Explore Our Work ↓
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-white py-5" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-3xl font-extrabold tracking-tight text-brand md:text-5xl">
            {t}
            <span className="text-ink">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
