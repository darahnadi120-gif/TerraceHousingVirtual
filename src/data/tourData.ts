import type { GuidedTourPoint } from "@/types/house";

export const guidedTourPoints: GuidedTourPoint[] = [
  {
    id: "tour-front",
    label: "Front View",
    position: [0, 2.2, 18],
    narration: "Kita mulai dari tampak depan model rumah."
  },
  {
    id: "tour-mid",
    label: "Middle View",
    position: [0, 2.2, 6],
    narration: "Sekarang bergerak mendekati area utama rumah."
  },
  {
    id: "tour-near",
    label: "Near View",
    position: [0, 2, -2],
    narration: "Kita berada di area dekat struktur utama rumah."
  }
];
