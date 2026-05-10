"use client";

import { motion } from "framer-motion";

export default function LoadingExperience({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 text-center text-sm uppercase tracking-[0.3em] text-white"
    >
      Menyiapkan Virtual Residence Experience...
    </motion.div>
  );
}
