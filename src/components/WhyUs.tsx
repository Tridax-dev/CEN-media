import Reveal from "./Reveal";

const reasons = [
  { lines: ["WE THINK", "STRATEGICALLY."], text: "Every post, page and campaign starts with a goal, an audience and a plan." },
  { lines: ["WE CREATE", "BOLDLY."], text: "Distinct creative that stands out in the feed and stays in memory." },
  { lines: ["WE EXECUTE", "PROPERLY."], text: "Consistent delivery, clear communication and results you can measure." },
];

export default function WhyUs() {
  return (
    <section className="bg-ink py-24 text-white md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal>
          <h2 className="display-section">WHY BRANDS<br />CHOOSE US.</h2>
        </Reveal>
        <ul className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {reasons.map((r, i) => (
            <li key={r.lines[0]} className="border-t border-white/20 pt-6">
              <Reveal delay={i * 0.1}>
                <span className="label text-white/50">0{i + 1}</span>
                <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-tighter text-brand md:text-5xl">
                  {r.lines[0]}<br />{r.lines[1]}
                </h3>
                <p className="mt-5 max-w-sm text-white/70">{r.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
