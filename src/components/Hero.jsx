import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-sky-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <span className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 backdrop-blur">
          New • Smarter personal finance
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          Kelola Keuangan Pribadi dengan Mudah bersama <span className="text-sky-600">FinTrack</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Lacak pemasukan, pengeluaran, dan capai tujuan finansial Anda dengan visual yang jelas, rekomendasi cerdas, dan keamanan kelas bank.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-lg bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
          >
            Mulai Gratis
          </a>
          <a
            href="#features"
            className="rounded-lg bg-white/80 px-6 py-3 text-sky-700 ring-1 ring-sky-200 backdrop-blur transition hover:bg-white"
          >
            Lihat Fitur
          </a>
        </div>
      </div>
    </section>
  );
}
