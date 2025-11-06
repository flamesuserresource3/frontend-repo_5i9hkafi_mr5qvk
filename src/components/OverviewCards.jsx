import React from 'react';
import { Wallet, TrendingUp, PieChart, Percent } from 'lucide-react';

function formatCurrency(value, hidden) {
  if (hidden) return '•••••••';
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function StatCard({ icon: Icon, label, value, sublabel, positive }) {
  return (
    <div className="flex flex-1 items-center justify-between rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-neutral-500">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
      {sublabel && (
        <div className={`text-sm font-medium ${positive ? 'text-emerald-600' : 'text-rose-600'}`}>{sublabel}</div>
      )}
    </div>
  );
}

export default function OverviewCards({ hidden }) {
  // Mock demo values — backend can replace with live data later
  const total = 125000000;
  const pnl = 18500000; // profit
  const returnPct = (pnl / (total - pnl)) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Wallet} label="Total Portfolio" value={formatCurrency(total, hidden)} />
      <StatCard icon={TrendingUp} label="Total P/L" value={formatCurrency(pnl, hidden)} sublabel={`${pnl >= 0 ? '+' : ''}${returnPct.toFixed(2)}%`} positive={pnl >= 0} />
      <StatCard icon={PieChart} label="Diversifikasi Aset" value={hidden ? '••••' : '5 Kategori'} />
      <StatCard icon={Percent} label="Performance (YTD)" value={hidden ? '•••' : '+12.4%'} positive={true} />
    </div>
  );
}
