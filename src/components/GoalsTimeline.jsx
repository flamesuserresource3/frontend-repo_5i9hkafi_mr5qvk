import React from 'react';
import { Target, Clock, CheckCircle2 } from 'lucide-react';

const goals = [
  { id: 1, title: 'Dana Rumah', target: 300000000, saved: 125000000, deadline: '2026-12-31', icon: Target },
  { id: 2, title: 'Pendidikan Anak', target: 200000000, saved: 90000000, deadline: '2027-06-30', icon: CheckCircle2 },
  { id: 3, title: 'Liburan Eropa', target: 50000000, saved: 15000000, deadline: '2025-08-15', icon: Clock },
];

function daysLeft(deadline) {
  const d = new Date(deadline);
  const now = new Date();
  const diff = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
  return diff < 0 ? 0 : diff;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

export default function GoalsTimeline({ hidden }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Financial Goals</h3>
        <span className="text-xs text-neutral-500">Progress & sisa waktu</span>
      </div>
      <ul className="space-y-4">
        {goals.map((g) => {
          const Icon = g.icon;
          const pct = Math.min(100, Math.round((g.saved / g.target) * 100));
          return (
            <li key={g.id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{g.title}</p>
                    <p className="text-xs text-neutral-500">Target {formatCurrency(g.target)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{hidden ? '•••••' : formatCurrency(g.saved)}</p>
                  <p className="text-xs text-neutral-500">{daysLeft(g.deadline)} hari lagi</p>
                </div>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-1 text-right text-xs text-neutral-500">{pct}% tercapai</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
