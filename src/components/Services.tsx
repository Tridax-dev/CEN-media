import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";

type VisualKind = "social" | "content" | "branding" | "strategy" | "video" | "growth";

interface Service {
  id: string;
  title: string;
  description: string;
  visual: VisualKind;
}

const services: Service[] = [
  { id: "01", title: "Social Media Management", visual: "social", description: "We manage your social presence from strategy to publishing, community management and performance tracking." },
  { id: "02", title: "Content Creation", visual: "content", description: "Strategic graphics, short-form videos, campaigns and creative content designed around your brand." },
  { id: "03", title: "Branding & Design", visual: "branding", description: "We create visual identities that make businesses recognizable, consistent and memorable." },
  { id: "04", title: "Digital Strategy", visual: "strategy", description: "We turn business goals into practical digital strategies that attract the right audience and drive action." },
  { id: "05", title: "Video Production", visual: "video", description: "Short-form videos, promotional content, reels and campaign visuals built for modern platforms." },
  { id: "06", title: "Campaigns & Growth", visual: "growth", description: "We create and execute digital campaigns designed to increase awareness, engagement and customer acquisition." },
];

function Visual({ kind }: { kind: VisualKind }) {
  const bar = "rounded-full bg-ink/15";
  switch (kind) {
    case "social":
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2"><div className="h-7 w-7 rounded-full bg-brand" /><div className={`h-2 w-20 ${bar}`} /></div>
          <div className="aspect-square w-full bg-ink" />
          <div className="flex gap-2"><div className="h-3 w-3 rounded-full bg-brand" /><div className={`h-2 w-24 ${bar}`} /></div>
        </div>
      );
    case "content":
      return (
        <div className="space-y-2">
          <div className="aspect-video bg-ink" />
          <div className="flex h-8 gap-1">
            {[40, 70, 30, 55, 80].map((w, i) => <div key={i} className={i % 2 ? "bg-ink/30" : "bg-brand"} style={{ width: `${w / 3}%` }} />)}
          </div>
          <div className="h-1 bg-ink/15"><div className="h-1 w-1/2 bg-brand" /></div>
        </div>
      );
    case "branding":
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 flex h-16 items-center justify-center bg-ink text-2xl font-black text-white">Aa<span className="text-brand">.</span></div>
          <div className="h-10 bg-brand" /><div className="h-10 bg-ink" />
          <div className="h-10 border border-ink" /><div className="h-10 bg-soft" />
        </div>
      );
    case "strategy":
      return (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {["+24%", "3.2k", "8.1%"].map((n) => <div key={n} className="bg-soft p-2 text-xs font-extrabold">{n}</div>)}
          </div>
          <div className="flex h-20 items-end gap-1">
            {[30, 45, 40, 65, 55, 85].map((h, i) => <div key={i} className="flex-1 bg-brand" style={{ height: `${h}%` }} />)}
          </div>
        </div>
      );
    case "video":
      return (
        <div className="relative aspect-video bg-ink">
          <div className="absolute inset-2 border border-white/40" />
          <div className="absolute left-3 top-3 flex items-center gap-1 text-[10px] font-bold text-white"><span className="h-2 w-2 rounded-full bg-brand" />REC</div>
          <div className="absolute bottom-3 left-3 h-6 w-6 border-y-[8px] border-l-[14px] border-y-transparent border-l-white" />
        </div>
      );
    case "growth":
      return (
        <svg viewBox="0 0 200 110" className="w-full" role="img" aria-label="Growth chart">
          <polyline points="0,100 40,80 80,85 120,45 160,30 200,8" fill="none" stroke="#c50000" strokeWidth="5" />
          <line x1="0" y1="108" x2="200" y2="108" stroke="#0a0a0a" strokeWidth="2" />
        </svg>
      );
  }
}

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30 });
  const sy = useSpring(y, { stiffness: 300, damping: 30 });

  return (
    <section id="services" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
          <p className="label mb-6 text-brand">What we do</p>
          <h2 className="display-section max-w-4xl">
            WE BUILD<br />DIGITAL PRESENCE<br />THAT WORKS.
          </h2>
        </motion.div>

        <ul
          className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3"
          onMouseMove={(e) => { x.set(e.clientX + 24); y.set(e.clientY + 24); }}
          onMouseLeave={() => setActive(null)}
        >
          {services.map((s) => (
            <li key={s.id} className="bg-white">
              <a
                href="#booking"
                data-cursor="view"
                onMouseEnter={() => setActive(s)}
                onFocus={() => setActive(null)}
                className="group flex min-h-[340px] flex-col justify-between border-transparent p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-brand hover:text-white focus-visible:-translate-y-2 focus-visible:bg-brand focus-visible:text-white md:p-10"
              >
                <span className="text-sm font-bold text-brand transition-colors group-hover:text-white group-focus-visible:text-white">{s.id}</span>
                <div>
                  <h3 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted transition-colors group-hover:text-white/90 group-focus-visible:text-white/90">{s.description}</p>
                </div>
                <ArrowRight aria-hidden className="mt-8 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor-following preview: large desktop screens only */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            aria-hidden
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden w-56 border border-ink bg-white p-3 shadow-2xl lg:block"
          >
            <Visual kind={active.visual} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
