import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rina Pratama',
    role: 'Freelancer',
    content:
      'FinTrack bantu aku konsisten menabung untuk DP rumah. Grafiknya jelas dan pengingatnya sangat membantu!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Akbar Wirawan',
    role: 'Product Manager',
    content:
      'Akhirnya bisa melihat cashflow bulanan tanpa ribet. Sinkronisasi dan kategorisasinya akurat.',
    avatar: 'https://images.unsplash.com/photo-1506898665061-3a5b8b18703d?q=80&w=400&auto=format&fit=crop'
  }
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Apa Kata Pengguna</h2>
          <p className="mt-3 text-slate-600">Mereka yang berhasil menata finansialnya bersama FinTrack.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Stars />
              <p className="mt-4 text-slate-700">“{t.content}”</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
