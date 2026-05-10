"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Navigation,
  Building2,
  Layers,
  Compass
} from "lucide-react";

const features = [
  {
    title: "Virtual walkthrough 3D",
    description: "Jelajahi kawasan dan interior rumah dengan sudut pandang orang pertama.",
    icon: Sparkles
  },
  {
    title: "Redevelopment Context",
    description: "Menceritakan transformasi site dari rumah lama ke 4 terrace houses baru.",
    icon: Building2
  },
  {
    title: "Hotspot informasi",
    description: "Akses detail ruangan, material, dan fitur premium secara interaktif.",
    icon: MapPin
  },
  {
    title: "Guided tour otomatis",
    description: "Ikuti rute terbaik dengan narasi premium untuk presentasi cepat.",
    icon: Navigation
  },
  {
    title: "Multi-level Inspection",
    description: "Akses visual ke area lantai 2 dan lantai 3 untuk presentasi spatial.",
    icon: Layers
  },
  {
    title: "Free Fly Navigation",
    description: "Gerakan mengikuti aim kamera untuk memeriksa detail facade dan interior.",
    icon: Compass
  }
];

export default function FeatureSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Fitur Premium</p>
          <h2 className="mt-3 font-display text-3xl text-brand-900">
            Presentasi redevelopment yang jelas dan interaktif
          </h2>
          <p className="mt-4 text-brand-900/70">
            Fokus pada komunikasi desain, program ruang, dan pengalaman walkthrough.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel rounded-3xl p-6 shadow-glass"
            >
              <feature.icon className="h-6 w-6 text-brand-700" />
              <h3 className="mt-4 text-lg font-semibold text-brand-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-brand-900/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
