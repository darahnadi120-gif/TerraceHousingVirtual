import { Map, BedDouble, Bath, Sofa } from "lucide-react";

const items = [
  { icon: Map, label: "Luas Bangunan", value: "72 m2" },
  { icon: Map, label: "Luas Tanah", value: "90 m2" },
  { icon: BedDouble, label: "Kamar Tidur", value: "2" },
  { icon: Bath, label: "Kamar Mandi", value: "1" },
  { icon: Sofa, label: "Ruang Tamu", value: "1" }
];

export default function HouseInfo() {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 p-10 shadow-glass">
        <h2 className="font-display text-3xl text-brand-900">Informasi Rumah</h2>
        <p className="mt-3 max-w-2xl text-brand-900/70">
          Detail spesifikasi yang bisa ditampilkan saat presentasi kepada calon pembeli.
          Informasi ini terhubung dengan pengalaman walkthrough 3D.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-4 transition-colors hover:border-brand-700/40"
            >
              <item.icon className="h-6 w-6 text-brand-700" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{item.label}</p>
                <p className="text-lg font-semibold text-brand-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
