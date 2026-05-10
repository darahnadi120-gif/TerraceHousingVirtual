"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-700 to-accent-600 px-8 py-12 text-center text-white shadow-glass md:flex-row md:text-left"
      >
        <div>
          <h3 className="font-display text-2xl">Siap meninjau 4 terrace houses secara interaktif?</h3>
          <p className="mt-2 text-white/80">
            Masuk ke walkthrough 3D Courtenay Crescent dan evaluasi tiap level dengan cepat.
          </p>
        </div>
        <Link
          href="/walkthrough"
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-white"
        >
          Mulai Virtual Tour
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}
