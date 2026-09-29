import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [view, setView] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setView(!!(e.target as HTMLElement).closest("[data-cursor='view']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[60]"
    >
      <motion.div
        animate={{ width: view ? 64 : 10, height: view ? 64 : 10 }}
        transition={{ duration: 0.2 }}
        className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white"
      >
        {view && "VIEW"}
      </motion.div>
    </motion.div>
  );
}
