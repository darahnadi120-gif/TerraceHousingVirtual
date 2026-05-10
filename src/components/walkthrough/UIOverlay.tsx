"use client";

import { motion } from "framer-motion";
import {
  Navigation,
  RotateCcw,
  Eye,
  Pause,
  Play,
  ChevronsUp,
  ChevronsDown
} from "lucide-react";
import { useWalkthroughStore } from "@/store/walkthroughStore";
import { guidedTourPoints } from "@/data/tourData";

export default function UIOverlay() {
  const guidedTourState = useWalkthroughStore((state) => state.guidedTourState);
  const setGuidedTourState = useWalkthroughStore((state) => state.setGuidedTourState);
  const cameraMode = useWalkthroughStore((state) => state.cameraMode);
  const setTeleportTarget = useWalkthroughStore((state) => state.setTeleportTarget);
  const setToast = useWalkthroughStore((state) => state.setToast);
  const spawnPoint = useWalkthroughStore((state) => state.spawnPoint);
  const playerPosition = useWalkthroughStore((state) => state.playerPosition);
  const secondFloorPoint = useWalkthroughStore((state) => state.secondFloorPoint);
  const thirdFloorPoint = useWalkthroughStore((state) => state.thirdFloorPoint);

  const handleGuided = () => {
    if (guidedTourState === "playing") {
      setGuidedTourState("paused");
      return;
    }
    setGuidedTourState("playing");
    setToast(guidedTourPoints[0]?.narration ?? null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pointer-events-none absolute inset-0 text-white"
    >
      <div className="pointer-events-auto absolute left-40 right-6 top-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur">
        <span>Aurora Grand Residence</span>
        <span className="flex items-center gap-2 text-[10px]">
          <Eye className="h-3 w-3" />
          Mode Kamera: {cameraMode}
        </span>
      </div>
      <div className="pointer-events-auto absolute bottom-6 left-6 right-6 md:left-[360px]">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-black/45 p-2 backdrop-blur">
        <button
          type="button"
          onClick={handleGuided}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition-colors hover:bg-black/80"
        >
          {guidedTourState === "playing" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {guidedTourState === "playing" ? "Pause Tour" : "Guided Tour"}
        </button>
        <button
          type="button"
          onClick={() => setGuidedTourState("idle")}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition-colors hover:bg-black/80"
        >
          <Navigation className="h-4 w-4" />
          Stop Tour
        </button>
        <button
          type="button"
          onClick={() => setTeleportTarget(spawnPoint)}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition-colors hover:bg-black/80"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Posisi
        </button>
        <button
          type="button"
          onClick={() => setTeleportTarget([playerPosition.x, secondFloorPoint[1], playerPosition.z])}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition-colors hover:bg-black/80"
        >
          <ChevronsUp className="h-4 w-4" />
          Lantai 2
        </button>
        <button
          type="button"
          onClick={() => setTeleportTarget([playerPosition.x, thirdFloorPoint[1], playerPosition.z])}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 transition-colors hover:bg-black/80"
        >
          <ChevronsDown className="h-4 w-4" />
          Lantai 3
        </button>
        </div>
      </div>
    </motion.div>
  );
}
