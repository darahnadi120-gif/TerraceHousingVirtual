"use client";

import { motion } from "framer-motion";
import { X, Info } from "lucide-react";
import type { Hotspot } from "@/types/house";
import { useWalkthroughStore } from "@/store/walkthroughStore";

type HotspotModalProps = {
  hotspot: Hotspot;
};

export default function HotspotModal({ hotspot }: HotspotModalProps) {
  const closeHotspot = useWalkthroughStore((state) => state.closeHotspot);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-x-6 bottom-20 z-30 flex justify-center"
    >
      <div className="glass-dark w-full max-w-md rounded-3xl p-6 text-white shadow-glass">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 p-2">
              <Info className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                {hotspot.category}
              </p>
              <h4 className="font-display text-lg">{hotspot.title}</h4>
            </div>
          </div>
          <button
            type="button"
            onClick={closeHotspot}
            className="rounded-full border border-white/20 p-2 text-white/80 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-4 text-sm text-white/70">{hotspot.description}</p>
      </div>
    </motion.div>
  );
}
