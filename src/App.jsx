import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import { Wallet, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
              <Wallet className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold">FinTrack</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-sky-700">Fitur</a>
            <a href="#pricing" className="hover:text-sky-700">Harga</a>
            <a href="#contact" className="hover:text-sky-700">Kontak</a>
          </nav>
          <a href="#pricing" className="hidden rounded-lg bg-sky-600 px-4 py-2 text-sm text-white shadow-sm hover:bg-sky-700 sm:inline-block">
            Coba Gratis
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>

      {/* Footer inline to keep sub-components 3-4 as requested */}
      <footer id="contact" className="w-full border-t border-slate-200 bg-sky-50/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
                <Wallet className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold">FinTrack</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Solusi minimalis untuk mengelola keuangan pribadi. Lacak, rencanakan, dan capai tujuan finansial Anda.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Email: support@fintrack.app</li>
              <li>Tel: +62 812 3456 7890</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Ikuti Kami</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 hover:bg-slate-50">
                <Instagram className="h-5 w-5 text-slate-700" />
              </a>
              <a aria-label="Facebook" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 hover:bg-slate-50">
                <Facebook className="h-5 w-5 text-slate-700" />
              </a>
              <a aria-label="LinkedIn" href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 hover:bg-slate-50">
                <Linkedin className="h-5 w-5 text-slate-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} FinTrack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
