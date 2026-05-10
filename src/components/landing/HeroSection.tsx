"use client";

import Link from "next/link";
import { ArrowRight, MoveUpRight, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-12">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            <Building2 className="h-4 w-4" />
            Courtenay Crescent Redevelopment
          </span>
          <h1 className="font-display text-4xl font-semibold text-brand-900 md:text-5xl lg:text-6xl">
            Terrace Houses at 36 Courtenay Crescent, Mangere East
          </h1>
          <p className="max-w-xl text-lg text-brand-900/80">
            Proyek redevelopment: membongkar rumah single-storey eksisting dan membangun
            4 terrace houses baru pada satu site dengan walkthrough 3D interaktif.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/walkthrough"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-glass transition-colors hover:bg-brand-700"
            >
              Mulai Virtual Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#detail-rumah"
              className="inline-flex items-center gap-2 rounded-full border border-brand-700/30 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-700"
            >
              Lihat Detail Rumah
              <MoveUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-brand-900/70">
            <div>
              <p className="text-xs uppercase tracking-[0.3em]">Unit</p>
              <p className="text-lg font-semibold text-brand-900">4 Terrace Dwellings</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em]">Lokasi</p>
              <p className="text-lg font-semibold text-brand-900">Mangere East</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em]">Program</p>
              <p className="text-lg font-semibold text-brand-900">3 Master Bedrooms</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="glass-panel relative mx-auto w-full max-w-md rounded-3xl p-6 shadow-glass"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-white to-brand-50 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.25),transparent_60%)]" />
            <div className="relative flex min-h-[360px] flex-col justify-between rounded-2xl border border-white/60 bg-white/70 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-700">Terrace Housing</p>
                <h2 className="font-display text-2xl text-brand-900">Project Brief Snapshot</h2>
              </div>
              <div className="space-y-3 text-sm text-brand-900/70">
                <div className="flex items-center justify-between">
                  <span>4 Dwellings</span>
                  <span>3 Master Bedrooms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Living + Lounge</span>
                  <span>Kitchen + Dining</span>
                </div>
              </div>
              <div className="rounded-2xl bg-brand-700/10 p-4 text-xs text-brand-900/70">
                Tiap dwelling memiliki single garage, laundry, dan upper floor deck
                sebagai area outdoor living.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-16 h-80 w-80 rounded-full bg-accent-600/20 blur-3xl" />
    </section>
  );
}
