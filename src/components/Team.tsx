import { Instagram, User } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "../config";

interface Member { name: string; role: string; bio: string; photo?: string }

// Replace names, roles, bios and set `photo` (e.g. "/team/jane.webp") when ready.
const team: Member[] = [
  { name: "TEAM MEMBER 01", role: "Creative Director", bio: "Short description placeholder." },
  { name: "TEAM MEMBER 02", role: "Social Media Manager", bio: "Short description placeholder." },
  { name: "TEAM MEMBER 03", role: "Content Strategist", bio: "Short description placeholder." },
  { name: "TEAM MEMBER 04", role: "Designer", bio: "Short description placeholder." },
];

export default function Team() {
  return (
    <section id="team" className="bg-soft py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal>
          <p className="label mb-6 text-brand">The People</p>
          <h2 className="display-section">A SMALL TEAM.<br />BIG ENERGY.</h2>
        </Reveal>
        <ul className="mt-16 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.08}>
                <article className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-line">
                    <div className="grayscale transition duration-500 group-hover:grayscale-0 group-focus-within:grayscale-0">
                      {m.photo ? (
                        <img src={m.photo} alt={`${m.name}, ${m.role}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                      ) : (
                        <div className="flex aspect-[3/4] items-center justify-center text-muted"><User aria-hidden className="h-16 w-16" /></div>
                      )}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand p-4 text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 max-md:hidden">
                      <p className="text-sm">{m.bio}</p>
                      <a href={siteConfig.instagram} aria-label={`${m.name} on Instagram`} className="mt-3 inline-flex h-10 w-10 items-center justify-center border border-white/60 hover:bg-white hover:text-brand">
                        <Instagram aria-hidden className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-extrabold tracking-tight md:text-lg">{m.name}</h3>
                  <p className="text-sm text-muted">{m.role}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
