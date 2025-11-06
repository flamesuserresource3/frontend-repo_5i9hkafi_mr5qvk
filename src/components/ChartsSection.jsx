import React, { useMemo } from 'react';

function Sparkline({ data, color = '#22c55e' }) {
  const width = 520;
  const height = 160;
  const padding = 12;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((d, i) => {
    const x = padding + (i * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - ((d - min) / (max - min || 1)) * (height - padding * 2);
    return [x, y];
  });
  const dAttr = points.map((p, i) => (i === 0 ? `M ${p[0]},${p[1]}` : `L ${p[0]},${p[1]}`)).join(' ');
  const area = `${dAttr} L ${points[points.length - 1][0]},${height - padding} L ${points[0][0]},${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkGrad)" />
      <path d={dAttr} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function ConicPie({ segments }) {
  const bg = useMemo(() => {
    let current = 0;
    const parts = segments.map((s) => {
      const next = current + s.value;
      const str = `${s.color} ${current}% ${next}%`;
      current = next;
      return str;
    });
    return `conic-gradient(${parts.join(',')})`;
  }, [segments]);

  return (
    <div className="relative mx-auto h-56 w-56">
      <div
        className="h-full w-full rounded-full"
        style={{ backgroundImage: bg }}
      />
      <div className="absolute inset-6 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xs text-neutral-500">Alokasi</div>
          <div className="text-lg font-semibold">Portofolio</div>
        </div>
      </div>
    </div>
  );
}

export default function ChartsSection({ hidden }) {
  const allocation = [35, 20, 15, 18, 12];
  const allocationColors = ['#3b82f6', '#22c55e', '#a855f7', '#f59e0b', '#ef4444'];
  const total = allocation.reduce((a, b) => a + b, 0);
  const segments = allocation.map((v, i) => ({ value: (v / total) * 100, color: allocationColors[i] }));

  const performance = [1.2, 2.1, -0.5, 3.4, 1.9, 2.2, -1.1, 4.0, 1.1, 0.8, 2.6, 3.1];

  const legend = [
    { label: 'Saham', color: '#3b82f6', value: '35%' },
    { label: 'Reksadana', color: '#22c55e', value: '20%' },
    { label: 'Crypto', color: '#a855f7', value: '15%' },
    { label: 'Obligasi', color: '#f59e0b', value: '18%' },
    { label: 'Emas', color: '#ef4444', value: '12%' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Diversifikasi Aset</h3>
          <span className="text-xs text-neutral-500">Visual alokasi per aset</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <ConicPie segments={segments} />
          <ul className="grid grid-cols-2 gap-3 w-full">
            {legend.map((l) => (
              <li key={l.label} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: l.color }} />
                  <span className="text-sm">{l.label}</span>
                </div>
                <span className="text-xs text-neutral-500">{hidden ? '••' : l.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Performance Tahunan</h3>
          <span className="text-xs text-neutral-500">Harian/Bulanan/Tahunan</span>
        </div>
        <Sparkline data={performance} />
        <div className="mt-2 flex items-center justify-end gap-2 text-xs text-neutral-500">
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#22c55e' }} /> Return %
        </div>
      </div>
    </div>
  );
}
