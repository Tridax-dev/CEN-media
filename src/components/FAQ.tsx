import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  { q: "What services do you offer?", a: "Social media management, content creation, branding and design, digital strategy, video production and growth campaigns." },
  { q: "How much does your service cost?", a: "It depends on scope. Book a strategy call and we'll recommend a package that fits your goals and budget." },
  { q: "Do you work with startups?", a: "Yes. We work with startups and established businesses that want to be seen online." },
  { q: "Can you manage our social media accounts?", a: "Yes. We handle strategy, content, publishing, community management and performance tracking." },
  { q: "Do you create both graphics and videos?", a: "Yes. We produce static graphics, short-form video, reels and campaign visuals." },
  { q: "How long does it take to see results?", a: "Early engagement gains often show within weeks. Lasting growth builds over a few months of consistent work." },
  { q: "Can we book a one-time project instead of monthly management?", a: "Yes. We take one-off projects like brand identities and campaigns as well as monthly retainers." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <Reveal><h2 className="display-section mb-12">FAQ</h2></Reveal>
        <ul className="border-t border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-line">
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex min-h-[64px] w-full items-center justify-between gap-6 py-4 text-left text-lg font-bold md:text-xl">
                    {f.q}
                    <ChevronDown aria-hidden className={`h-6 w-6 shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="pb-6 text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
