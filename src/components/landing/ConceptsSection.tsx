"use client";

import { motion } from "framer-motion";

const concepts = [
  {
    title: "3D Modeling",
    description: "Rumah, gateway, furniture, dan lingkungan dibangun dari geometri 3D."
  },
  {
    title: "Camera & Perspective",
    description: "First-person free-fly membantu review desain dari berbagai elevasi."
  },
  {
    title: "Lighting & Shadow",
    description: "Pencahayaan disetel untuk membaca bentuk bangunan dan depth ruang."
  },
  {
    title: "Material & Texture",
    description: "Material marmer, kaca, kayu, metal, dan rumput disimulasikan sederhana."
  },
  {
    title: "Interaction",
    description: "User dapat bergerak, membaca hotspot, dan mengikuti guided tour."
  },
  {
    title: "Collision & Animation",
    description: "Collider bantu untuk akses lantai atas dan interaksi teleport vertikal."
  }
];

export default function ConceptsSection() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel rounded-3xl p-10 shadow-glass">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Grafika Komputer</p>
          <h2 className="mt-3 font-display text-3xl text-brand-900">
            Konsep grafika komputer pada project terrace houses
          </h2>
          <p className="mt-3 max-w-2xl text-brand-900/70">
            Panel ini membantu presentasi tugas dengan menjelaskan konsep yang digunakan
            pada walkthrough 3D.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {concepts.map((concept, index) => (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-white/60 bg-white/70 p-4"
              >
                <h3 className="text-sm font-semibold text-brand-900">{concept.title}</h3>
                <p className="mt-2 text-sm text-brand-900/70">{concept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
