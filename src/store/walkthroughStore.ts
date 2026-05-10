import { create } from "zustand";

export type CameraMode = "first" | "orbit" | "top";
export type GuidedTourState = "idle" | "playing" | "paused";
export const DEFAULT_SPAWN: [number, number, number] = [0, 1.6, 10];
export const SECOND_FLOOR_POINT: [number, number, number] = [3.8, 3.5, -1.2];
export const THIRD_FLOOR_POINT: [number, number, number] = [3.8, 5.85, -1.2];

type WalkthroughState = {
  isNight: boolean;
  cameraMode: CameraMode;
  guidedTourState: GuidedTourState;
  showMiniMap: boolean;
  showFullMap: boolean;
  activeRoomId: string | null;
  activeHotspotId: string | null;
  toastMessage: string | null;
  playerPosition: { x: number; y: number; z: number };
  spawnPoint: [number, number, number];
  secondFloorPoint: [number, number, number];
  thirdFloorPoint: [number, number, number];
  teleportTarget: [number, number, number] | null;
  setNight: (value: boolean) => void;
  toggleNight: () => void;
  setCameraMode: (mode: CameraMode) => void;
  setGuidedTourState: (state: GuidedTourState) => void;
  toggleMiniMap: () => void;
  setActiveRoom: (roomId: string | null) => void;
  openHotspot: (hotspotId: string) => void;
  closeHotspot: () => void;
  setToast: (message: string | null) => void;
  setShowFullMap: (value: boolean) => void;
  setPlayerPosition: (pos: { x: number; y: number; z: number }) => void;
  setSpawnPoint: (pos: [number, number, number]) => void;
  setSecondFloorPoint: (pos: [number, number, number]) => void;
  setThirdFloorPoint: (pos: [number, number, number]) => void;
  setTeleportTarget: (pos: [number, number, number] | null) => void;
};

export const useWalkthroughStore = create<WalkthroughState>((set) => ({
  isNight: false,
  cameraMode: "first",
  guidedTourState: "idle",
  showMiniMap: false,
  showFullMap: false,
  activeRoomId: null,
  activeHotspotId: null,
  toastMessage: null,
  playerPosition: { x: DEFAULT_SPAWN[0], y: DEFAULT_SPAWN[1], z: DEFAULT_SPAWN[2] },
  spawnPoint: DEFAULT_SPAWN,
  secondFloorPoint: SECOND_FLOOR_POINT,
  thirdFloorPoint: THIRD_FLOOR_POINT,
  teleportTarget: null,
  setNight: (value) => set({ isNight: value }),
  toggleNight: () => set((state) => ({ isNight: !state.isNight })),
  setCameraMode: (mode) => set({ cameraMode: mode }),
  setGuidedTourState: (state) => set({ guidedTourState: state }),
  toggleMiniMap: () => set((state) => ({ showMiniMap: !state.showMiniMap })),
  setActiveRoom: (roomId) => set({ activeRoomId: roomId }),
  openHotspot: (hotspotId) => set({ activeHotspotId: hotspotId }),
  closeHotspot: () => set({ activeHotspotId: null }),
  setToast: (message) => set({ toastMessage: message }),
  setShowFullMap: (value) => set({ showFullMap: value }),
  setPlayerPosition: (pos) => set({ playerPosition: pos }),
  setSpawnPoint: (pos) => set({ spawnPoint: pos }),
  setSecondFloorPoint: (pos) => set({ secondFloorPoint: pos }),
  setThirdFloorPoint: (pos) => set({ thirdFloorPoint: pos }),
  setTeleportTarget: (pos) => set({ teleportTarget: pos })
}));
