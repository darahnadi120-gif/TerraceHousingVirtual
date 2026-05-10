"use client";

import { motion } from "framer-motion";
import {
  Home,
  BedDouble,
  CarFront,
  Sofa,
  CookingPot,
  WashingMachine,
  Trees
} from "lucide-react";

const specs = [
  { icon: Home, label: "Jumlah Unit", value: "4 Terrace Houses" },
  { icon: BedDouble, label: "Kamar Utama", value: "3 Master Bedrooms" },
  { icon: Sofa, label: "Ruang Keluarga", value: "Living + Lounge" },
  { icon: CookingPot, label: "Area Makan", value: "Kitchen + Dining" },
  { icon: CarFront, label: "Parkir", value: "Single Garage" },
  { icon: WashingMachine, label: "Service Area", value: "Laundry" },
  { icon: Trees, label: "Outdoor Living", value: "Upper Floor Deck" }
];

export default function PropertySpecs() {
  return (
    <section id="detail-rumah" className="px-6 pb-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 p-10 shadow-glass">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Site Brief</p>
            <h2 className="mt-3 font-display text-3xl text-brand-900">
              36 Courtenay Crescent, Mangere East
            </h2>
            <p className="mt-3 max-w-2xl text-brand-900/70">
              Demolish existing single-storey house and build 4 new terrace dwellings
              with complete family program and modern circulation.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-brand-700/10 px-6 py-4 text-sm text-brand-900/80"
          >
            Landing page ini sinkron dengan model GLB walkthrough project.
          </motion.div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-4 transition-colors hover:border-brand-700/40"
            >
              <spec.icon className="h-6 w-6 text-brand-700" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{spec.label}</p>
                <p className="text-lg font-semibold text-brand-900">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
