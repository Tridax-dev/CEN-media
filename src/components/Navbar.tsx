import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "./Logo";
import { bookingHref, navLinks } from "../config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-white shadow-[0_1px_0_var(--color-line),0_8px_24px_rgba(0,0,0,0.05)]" : "bg-transparent"
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="Home" onClick={() => setOpen(false)}>
          <Logo className="h-12" />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold transition-colors hover:text-brand">{l.label}</a>
            </li>
          ))}
          <li>
            <a href={bookingHref} className="inline-flex h-12 items-center bg-brand px-6 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
              Book a Strategy Call →
            </a>
          </li>
        </ul>

        <button
          className="flex h-12 w-12 items-center justify-center md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 flex h-[calc(100dvh-5rem)] flex-col justify-between bg-white px-5 pb-10 pt-8 md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((l, i) => (
                <motion.li key={l.href} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-5xl font-black tracking-tighter">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={bookingHref} className="flex h-14 items-center justify-center bg-brand text-base font-bold text-white">
              Book a Strategy Call →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
