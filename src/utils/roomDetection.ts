import type { Room } from "@/types/house";

export function detectRoom(rooms: Room[], position: { x: number; z: number }) {
  return (
    rooms.find(
      (room) =>
        position.x >= room.bounds.minX &&
        position.x <= room.bounds.maxX &&
        position.z >= room.bounds.minZ &&
        position.z <= room.bounds.maxZ
    ) || null
  );
}
