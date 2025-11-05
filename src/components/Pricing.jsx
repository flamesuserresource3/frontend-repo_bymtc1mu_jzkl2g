import React from 'react';
import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 'Rp0',
    tagline: 'Cocok untuk pemula',
    features: ['Pencatatan transaksi', 'Kategori dasar', 'Grafik bulanan'],
    cta: 'Mulai Gratis',
    highlighted: false
  },
  {
    name: 'Pro',
    price: 'Rp59.000/bulan',
    tagline: 'Untuk pengguna serius',
    features: ['Semua fitur Basic', 'Tujuan menabung', 'Ekspor PDF/CSV', 'Sinkronisasi multi-perangkat'],
    cta: 'Pilih Pro',
    highlighted: true
  },
  {
    name: 'Premium',
    price: 'Rp99.000/bulan',
    tagline: 'Paling lengkap',
    features: ['Semua fitur Pro', 'Rekomendasi cerdas', 'Dukungan prioritas', 'Integrasi bank'],
    cta: 'Go Premium',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Harga yang Transparan</h2>
          <p className="mt-3 text-slate-600">Pilih paket sesuai kebutuhan Anda. Upgrade kapan saja.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                'relative rounded-2xl border p-6 shadow-sm ' +
                (tier.highlighted
                  ? 'border-sky-300 bg-gradient-to-b from-sky-50 to-white shadow-sky-100'
                  : 'border-slate-200 bg-white')
              }
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  Paling Populer
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</div>
              <div className="text-sm text-slate-500">{tier.tagline}</div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-sky-600" />
                    <span className="text-sm text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={
                  'mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition ' +
                  (tier.highlighted
                    ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700'
                    : 'bg-white text-sky-700 ring-1 ring-slate-200 hover:bg-slate-50')
                }
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
