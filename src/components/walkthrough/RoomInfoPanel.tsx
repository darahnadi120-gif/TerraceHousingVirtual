"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Room } from "@/types/house";
import { useWalkthroughStore } from "@/store/walkthroughStore";

type RoomInfoPanelProps = {
  rooms: Room[];
};

export default function RoomInfoPanel({ rooms }: RoomInfoPanelProps) {
  const activeRoomId = useWalkthroughStore((state) => state.activeRoomId);
  const activeRoom = rooms.find((room) => room.id === activeRoomId) || null;

  return (
    <div className="pointer-events-none absolute left-6 top-24 w-72">
      <AnimatePresence>
        {activeRoom && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="glass-dark rounded-2xl p-4 text-white"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">Anda berada di</p>
            <h3 className="mt-2 font-display text-lg">{activeRoom.name}</h3>
            <p className="mt-1 text-xs text-white/70">Ukuran: {activeRoom.size}</p>
            <p className="mt-3 text-sm text-white/70">{activeRoom.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
