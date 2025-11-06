import React from 'react';
import { MoveUpRight, MoveDownLeft, Layers } from 'lucide-react';

const txs = [
  { id: 1, type: 'buy', asset: 'Saham - BBCA', amount: 2500000, date: '2025-01-12' },
  { id: 2, type: 'sell', asset: 'Crypto - BTC', amount: 4500000, date: '2025-02-03' },
  { id: 3, type: 'buy', asset: 'Reksadana - Money Market', amount: 1500000, date: '2025-02-20' },
  { id: 4, type: 'buy', asset: 'Emas', amount: 1000000, date: '2025-03-05' },
];

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

export default function TransactionsTimeline({ hidden }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Riwayat Transaksi</h3>
        <span className="text-xs text-neutral-500">Buy/Sell & Kategori</span>
      </div>
      <ul className="space-y-3">
        {txs.map((t) => (
          <li key={t.id} className="flex items-center gap-3">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              t.type === 'buy' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
            }`}>
              {t.type === 'buy' ? <MoveDownLeft className="h-4 w-4" /> : <MoveUpRight className="h-4 w-4" />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{t.asset}</p>
              <p className="text-xs text-neutral-500">{new Date(t.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-semibold ${t.type === 'buy' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {hidden ? '•••••' : (t.type === 'buy' ? '-' : '+') + formatCurrency(t.amount)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500"><Layers className="h-4 w-4" /> Timeline transaksi</div>
    </div>
  );
}
