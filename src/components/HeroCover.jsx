import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Soft gradient and vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-end p-8 text-white">
        <div className="backdrop-blur-sm bg-white/5 ring-1 ring-white/10 rounded-xl p-4 mb-4">
          <span className="text-xs uppercase tracking-widest text-white/70">Portfolio Dashboard</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Shiny Crypto & Finance Hub</h1>
        <p className="mt-2 max-w-2xl text-sm md:text-base text-white/80">
          Real-time overview, diversification tracking, and goal progress — all in one dynamic dashboard.
        </p>
      </div>
    </section>
  );
}
