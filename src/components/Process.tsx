import Reveal from "./Reveal";

const steps = [
  { title: "Discover", text: "We learn about your business, audience, goals and challenges." },
  { title: "Strategize", text: "We create a clear digital strategy designed around your objectives." },
  { title: "Create", text: "We turn the strategy into content, campaigns, designs and experiences." },
  { title: "Grow", text: "We measure performance, learn from the data and continuously improve." },
];

export default function Process() {
  return (
    <section id="process" className="bg-soft py-24 md:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal>
          <p className="label mb-6 text-brand">How we work</p>
          <h2 className="display-section">FROM IDEA<br />TO IMPACT.</h2>
        </Reveal>
        <ol className="mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative border-l-2 border-brand pl-6 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-6">
              <Reveal delay={i * 0.1}>
                <span className="text-6xl font-black tracking-tighter text-brand">0{i + 1}</span>
                <h3 className="mb-3 mt-4 text-2xl font-extrabold">{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
