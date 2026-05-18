"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedBackground() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const x = useTransform(smoothX, [0, 1], ["-4%", "4%"]);
  const y = useTransform(smoothY, [0, 1], ["-3%", "3%"]);

  useEffect(() => {
    function onMove(event: PointerEvent) {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    }

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <motion.div
        style={{ x, y }}
        className="absolute inset-[-10%] opacity-70"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(184,102,69,0.22),transparent_64%)] blur-3xl" />
        <div className="absolute right-[4%] top-[22%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(45,95,154,0.18),transparent_66%)] blur-3xl" />
        <div className="absolute bottom-[-8%] left-[30%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(95,111,82,0.2),transparent_68%)] blur-3xl" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,19,24,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,24,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(248,246,241,0.78)_72%)]" />
    </div>
  );
}
