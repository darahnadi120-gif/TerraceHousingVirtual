"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Hotspot, Room } from "@/types/house";
import { useWalkthroughStore } from "@/store/walkthroughStore";

type FullMapModalProps = {
  rooms: Room[];
  hotspots: Hotspot[];
};

export default function FullMapModal({ rooms, hotspots }: FullMapModalProps) {
  const showFullMap = useWalkthroughStore((state) => state.showFullMap);
  const setShowFullMap = useWalkthroughStore((state) => state.setShowFullMap);

  if (!showFullMap) return null;

  const minX = Math.min(...rooms.map((room) => room.center.x - room.mapSize.width / 2));
  const maxX = Math.max(...rooms.map((room) => room.center.x + room.mapSize.width / 2));
  const minZ = Math.min(...rooms.map((room) => room.center.z - room.mapSize.depth / 2));
  const maxZ = Math.max(...rooms.map((room) => room.center.z + room.mapSize.depth / 2));

  const width = 520;
  const height = 360;
  const padding = 20;
  const scaleX = (width - padding * 2) / (maxX - minX);
  const scaleZ = (height - padding * 2) / (maxZ - minZ);

  const mapX = (x: number) => (x - minX) * scaleX + padding;
  const mapZ = (z: number) => (z - minZ) * scaleZ + padding;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="glass-dark w-full max-w-3xl rounded-3xl p-6 text-white"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl">Full Map</h3>
            <button
              type="button"
              onClick={() => setShowFullMap(false)}
              className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em]"
            >
              Tutup
            </button>
          </div>
          <svg width={width} height={height} className="mt-4">
            {rooms.map((room) => (
              <g key={room.id}>
                <rect
                  x={mapX(room.center.x - room.mapSize.width / 2)}
                  y={mapZ(room.center.z - room.mapSize.depth / 2)}
                  width={room.mapSize.width * scaleX}
                  height={room.mapSize.depth * scaleZ}
                  fill="rgba(148, 163, 184, 0.2)"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth={1}
                />
                <text
                  x={mapX(room.center.x)}
                  y={mapZ(room.center.z)}
                  fill="white"
                  fontSize={10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {room.name}
                </text>
              </g>
            ))}
            {hotspots.map((spot) => (
              <circle
                key={spot.id}
                cx={mapX(spot.position[0])}
                cy={mapZ(spot.position[2])}
                r={3}
                fill="#38bdf8"
              />
            ))}
          </svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
