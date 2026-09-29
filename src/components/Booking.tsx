import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { bookingHref, siteConfig } from "../config";

interface Lead { name: string; email: string; company: string; need: string; budget: string; date: string; message: string }

const fields: { key: keyof Lead; label: string; type?: string; required?: boolean; options?: string[]; wide?: boolean }[] = [
  { key: "name", label: "Name", required: true },
  { key: "email", label: "Email", type: "email", required: true },
  { key: "company", label: "Company" },
  { key: "need", label: "What do you need help with?", options: ["Social media management", "Content creation", "Branding & design", "Digital strategy", "Video production", "Campaigns & growth", "Not sure yet"] },
  { key: "budget", label: "Budget range", options: ["Under ₦200k", "₦200k – ₦500k", "₦500k – ₦1M", "₦1M+", "Let's discuss"] },
  { key: "date", label: "Preferred date", type: "date" },
  { key: "message", label: "Message", wide: true },
];

const empty: Lead = { name: "", email: "", company: "", need: "", budget: "", date: "", message: "" };

/** Swap this for a real backend call (fetch to Formspree, an API route, etc). */
async function submitLead(lead: Lead) {
  const body = Object.entries(lead).map(([k, v]) => `${k}: ${v}`).join("\n");
  window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Consultation request from " + lead.name)}&body=${encodeURIComponent(body)}`;
}

export default function Booking() {
  const [lead, setLead] = useState<Lead>(empty);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitLead(lead);
    setSent(true);
  };

  const input = "h-12 w-full border border-white/40 bg-white px-4 text-ink";

  return (
    <section id="booking" className="bg-brand py-24 text-white md:py-36">
      <div className="mx-auto grid max-w-[1280px] gap-16 px-5 md:px-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="display-section">READY TO BUILD SOMETHING BIG?</h2>
          <p className="mt-8 max-w-md text-lg text-white/90">
            Tell us what you're building, where you are right now and where you want to go. Let's figure out how we can help.
          </p>
          <a href={bookingHref} className="mt-10 inline-flex h-14 items-center bg-white px-8 font-extrabold text-brand transition-colors hover:bg-ink hover:text-white">
            BOOK A STRATEGY CALL →
          </a>
          <p className="mt-6"><a href={`mailto:${siteConfig.email}`} className="font-semibold underline underline-offset-4">{siteConfig.email}</a></p>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div role="status" className="border border-white/40 p-8">
              <h3 className="text-3xl font-black tracking-tighter">Request ready to send.</h3>
              <p className="mt-3 text-white/90">Your email app should have opened. If it didn't, write to {siteConfig.email}.</p>
              <button onClick={() => { setLead(empty); setSent(false); }} className="mt-6 h-12 border border-white px-6 font-bold hover:bg-white hover:text-brand">Send another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.key} className={`block ${f.wide || f.key === "need" ? "sm:col-span-2" : ""}`}>
                  <span className="label mb-2 block">{f.label}</span>
                  {f.options ? (
                    <select className={input} value={lead[f.key]} onChange={(e) => setLead({ ...lead, [f.key]: e.target.value })}>
                      <option value="">Select…</option>
                      {f.options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  ) : f.wide ? (
                    <textarea rows={4} className={`${input} h-auto py-3`} value={lead[f.key]} onChange={(e) => setLead({ ...lead, [f.key]: e.target.value })} />
                  ) : (
                    <input type={f.type ?? "text"} required={f.required} className={input} value={lead[f.key]} onChange={(e) => setLead({ ...lead, [f.key]: e.target.value })} />
                  )}
                </label>
              ))}
              <button type="submit" className="h-14 bg-ink px-8 font-extrabold transition-colors hover:bg-white hover:text-brand sm:col-span-2">
                Request a Consultation →
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
