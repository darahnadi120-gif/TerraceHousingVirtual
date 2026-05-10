"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import WalkthroughScene from "@/components/walkthrough/WalkthroughScene";
import UIOverlay from "@/components/walkthrough/UIOverlay";
import HotspotModal from "@/components/walkthrough/HotspotModal";
import RoomInfoPanel from "@/components/walkthrough/RoomInfoPanel";
import ControlHelp from "@/components/walkthrough/ControlHelp";
import LoadingExperience from "@/components/walkthrough/LoadingExperience";
import { rooms } from "@/data/roomData";
import { hotspots } from "@/data/hotspotData";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function WalkthroughExperience() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const activeHotspotId = useWalkthroughStore((state) => state.activeHotspotId);
  const toastMessage = useWalkthroughStore((state) => state.toastMessage);
  const setToast = useWalkthroughStore((state) => state.setToast);
  const setGuidedTourState = useWalkthroughStore((state) => state.setGuidedTourState);
  const setTeleportTarget = useWalkthroughStore((state) => state.setTeleportTarget);
  const playerPosition = useWalkthroughStore((state) => state.playerPosition);
  const spawnPoint = useWalkthroughStore((state) => state.spawnPoint);
  const secondFloorPoint = useWalkthroughStore((state) => state.secondFloorPoint);
  const thirdFloorPoint = useWalkthroughStore((state) => state.thirdFloorPoint);

  const activeHotspot = useMemo(
    () => hotspots.find((spot) => spot.id === activeHotspotId) || null,
    [activeHotspotId]
  );

  useEffect(() => {
    if (!toastMessage) return;
    const timeout = window.setTimeout(() => setToast(null), 2500);
    return () => window.clearTimeout(timeout);
  }, [toastMessage, setToast]);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowWelcome(false), 4000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.code === "KeyG") setGuidedTourState("playing");
      if (event.code === "KeyR") setTeleportTarget(spawnPoint);
      if (event.code === "Digit2") {
        setTeleportTarget([playerPosition.x, secondFloorPoint[1], playerPosition.z]);
      }
      if (event.code === "Digit3") {
        setTeleportTarget([playerPosition.x, thirdFloorPoint[1], playerPosition.z]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerPosition.x, playerPosition.z, secondFloorPoint, setGuidedTourState, setTeleportTarget, spawnPoint, thirdFloorPoint]);

  return (
    <div className="relative h-full w-full">
      <WalkthroughScene />
      <div className="crosshair" />
      <UIOverlay />
      <RoomInfoPanel rooms={rooms} />
      <ControlHelp />
      <Link
        href="/"
        className="absolute left-2 top-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali
      </Link>
      <AnimatePresence>
        <LoadingExperience active={isLoading} />
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute inset-x-6 top-24 rounded-2xl border border-white/20 bg-black/70 p-4 text-center text-sm uppercase tracking-[0.2em] text-white"
          >
            Selamat datang di Aurora Grand Residence. Silakan gunakan WASD untuk mulai berjalan.
          </motion.div>
        )}
        {activeHotspot && <HotspotModal hotspot={activeHotspot} />}
      </AnimatePresence>
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
