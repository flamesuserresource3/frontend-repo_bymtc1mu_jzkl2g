import React from 'react';
import { PieChart, Wallet, Shield } from 'lucide-react';

const features = [
  {
    icon: PieChart,
    title: 'Insight Anggaran Real-time',
    desc: 'Pantau kategori pengeluaran dan pemasukan dengan grafik interaktif yang mudah dipahami.'
  },
  {
    icon: Wallet,
    title: 'Perencanaan Tujuan',
    desc: 'Tetapkan target menabung dan dapatkan pengingat serta progress otomatis setiap bulan.'
  },
  {
    icon: Shield,
    title: 'Keamanan Terpercaya',
    desc: 'Lindungi data finansial Anda dengan enkripsi kelas bank dan autentikasi berlapis.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Semua yang Anda Butuhkan</h2>
          <p className="mt-3 text-slate-600">Fokus pada hal penting. FinTrack merangkum pengelolaan keuangan dalam satu tempat yang rapi dan mudah.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
