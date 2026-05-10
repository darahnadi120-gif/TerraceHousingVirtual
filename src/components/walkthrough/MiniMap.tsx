"use client";

import type { Hotspot, Room } from "@/types/house";
import { useWalkthroughStore } from "@/store/walkthroughStore";

type MiniMapProps = {
  rooms: Room[];
  hotspots: Hotspot[];
};

export default function MiniMap({ rooms, hotspots }: MiniMapProps) {
  const playerPosition = useWalkthroughStore((state) => state.playerPosition);
  const setTeleportTarget = useWalkthroughStore((state) => state.setTeleportTarget);
  const setToast = useWalkthroughStore((state) => state.setToast);
  const setShowFullMap = useWalkthroughStore((state) => state.setShowFullMap);

  const minX = Math.min(...rooms.map((room) => room.center.x - room.mapSize.width / 2));
  const maxX = Math.max(...rooms.map((room) => room.center.x + room.mapSize.width / 2));
  const minZ = Math.min(...rooms.map((room) => room.center.z - room.mapSize.depth / 2));
  const maxZ = Math.max(...rooms.map((room) => room.center.z + room.mapSize.depth / 2));

  const width = 190;
  const height = 150;
  const padding = 12;
  const scaleX = (width - padding * 2) / (maxX - minX);
  const scaleZ = (height - padding * 2) / (maxZ - minZ);

  const mapX = (x: number) => (x - minX) * scaleX + padding;
  const mapZ = (z: number) => (z - minZ) * scaleZ + padding;

  const handleTeleport = (room: Room) => {
    setTeleportTarget([room.center.x, 1.6, room.center.z]);
    setToast(`Teleport ke ${room.name}`);
  };

  return (
    <div className="absolute right-6 top-6 rounded-2xl border border-white/20 bg-black/60 p-3 text-[10px] text-white/80 backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.3em]">Mini Map</p>
        <button
          type="button"
          onClick={() => setShowFullMap(true)}
          className="rounded-full border border-white/20 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/80"
        >
          Full Map
        </button>
      </div>
      <svg width={width} height={height} className="mt-2">
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
              onClick={() => handleTeleport(room)}
              style={{ cursor: "pointer" }}
            />
            <text
              x={mapX(room.center.x)}
              y={mapZ(room.center.z)}
              fill="white"
              fontSize={8}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {room.shortLabel}
            </text>
          </g>
        ))}
        {hotspots.map((spot) => (
          <circle
            key={spot.id}
            cx={mapX(spot.position[0])}
            cy={mapZ(spot.position[2])}
            r={2}
            fill="#38bdf8"
            opacity={0.8}
          />
        ))}
        <circle
          cx={mapX(playerPosition.x)}
          cy={mapZ(playerPosition.z)}
          r={4}
          fill="#ef4444"
        />
      </svg>
    </div>
  );
}
