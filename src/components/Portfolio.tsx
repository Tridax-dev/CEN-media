import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface Project { client: string; category: string; description: string; year: string; image?: string; tone: string }

// Set `image` to a file in /public (e.g. "/work/foodiebanc.webp") to replace the placeholder.
const projects: Project[] = [
  { client: "FoodieBanc", category: "Social Media · Content · Digital Strategy", description: "Building a recognizable digital presence for a modern food-tech brand.", year: "2025", tone: "bg-brand" },
  { client: "Aspom Travels", category: "Content · Social Media", description: "Travel content built to inspire the next booking.", year: "2025", tone: "bg-ink" },
  { client: "ABS Birth Services", category: "Brand Content · Social Media", description: "Warm, trustworthy content for a care-focused brand.", year: "2025", tone: "bg-ink" },
  { client: "Soubassement Engineering", category: "Digital Presence · Content", description: "A clear, credible digital presence for an engineering firm.", year: "2025", tone: "bg-brand" },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal>
          <p className="label mb-6 text-brand">Selected Work</p>
          <h2 className="display-section">WE MAKE<br />GOOD IDEAS<br />LOOK GOOD.</h2>
        </Reveal>
        <ul className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.client} className={i % 2 ? "md:mt-20" : ""}>
              <Reveal delay={(i % 2) * 0.1}>
                <a href="#booking" data-cursor="view" className="group block">
                  <div className={`relative aspect-[4/5] overflow-hidden ${p.tone}`}>
                    <div className="absolute inset-0 transition-transform duration-[800ms] group-hover:scale-105">
                      {p.image ? (
                        <img src={p.image} alt={`${p.client} project`} loading="lazy" className="h-full w-full object-cover" />
                      ) : (
                        <span className="absolute -bottom-6 -left-2 text-[clamp(120px,22vw,300px)] font-black leading-none tracking-tighter text-white/15">{p.client[0]}</span>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-brand opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight transition-transform duration-500 group-hover:-translate-y-1">{p.client}</h3>
                      <p className="label mt-2 text-brand">{p.category}</p>
                      <p className="mt-3 max-w-md text-muted">{p.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-muted">{p.year}</span>
                      <ArrowUpRight aria-hidden className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
