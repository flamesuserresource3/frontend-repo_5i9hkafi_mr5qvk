import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import PrivacyToggle from './components/PrivacyToggle';
import OverviewCards from './components/OverviewCards';
import ChartsSection from './components/ChartsSection';
import GoalsTimeline from './components/GoalsTimeline';
import TransactionsTimeline from './components/TransactionsTimeline';

export default function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <HeroCover />

        <div className="mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Dashboard Overview</h2>
            <p className="text-sm text-neutral-500">Realtime nilai portofolio, P/L, diversifikasi, dan performa.</p>
          </div>
          <PrivacyToggle hidden={hidden} onToggle={() => setHidden((s) => !s)} />
        </div>

        <div className="mt-4">
          <OverviewCards hidden={hidden} />
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ChartsSection hidden={hidden} />
          </div>
          <div className="space-y-4">
            <GoalsTimeline hidden={hidden} />
            <TransactionsTimeline hidden={hidden} />
          </div>
        </div>

        <footer className="mt-10 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Portfolio+ — Crypto/Fintech Dashboard</p>
          <p>Privacy quick-toggle and holographic hero by Spline.</p>
        </footer>
      </div>
    </div>
  );
}
