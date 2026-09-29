import Reveal from "./Reveal";

const stats = [
  { value: "03+", label: "Years Creating" },
  { value: "20+", label: "Brands & Projects" },
  { value: "100+", label: "Pieces of Content" },
  { value: "∞", label: "Ideas" },
];

export default function About() {
  return (
    <>
      <section id="story" className="bg-ink py-24 text-white md:py-36">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-5 md:px-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="label mb-6 text-brand">Our Story</p>
              <h2 className="display-section">WE DIDN'T START TO MAKE NOISE. WE STARTED TO MAKE AN IMPACT.</h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-5 text-white/70">
              <p>We are a digital marketing company built for businesses that understand that being online is no longer optional.</p>
              <p>We combine strategy, creativity, technology and storytelling to help brands communicate better, connect with their audience and grow in a digital-first world.</p>
              <p>From social media management to content creation, branding and digital strategy, we work alongside businesses to turn ideas into digital experiences people remember.</p>
            </Reveal>
          </div>
          {/* Replace this block with a real photo: <img src="/story.jpg" alt="..." loading="lazy" className="h-full w-full object-cover" /> */}
          <Reveal delay={0.15} className="relative min-h-[420px] bg-brand">
            <div className="absolute inset-8 border-2 border-white/40" />
            <div className="absolute inset-16 border-2 border-ink/50" />
            <p className="absolute inset-x-8 bottom-8 text-3xl font-black leading-none tracking-tighter md:text-5xl">Strategy × Creativity × Execution</p>
          </Reveal>
        </div>
      </section>

      <section aria-label="Numbers" className="border-b border-line py-20 md:py-28">
        <dl className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-12 px-5 md:px-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <dd className="text-[clamp(56px,9vw,140px)] font-black leading-none tracking-tighter text-brand">{s.value}</dd>
              <dt className="mt-3 font-semibold">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}
