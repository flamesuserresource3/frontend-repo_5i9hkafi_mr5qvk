import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PrivacyToggle({ hidden, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
      aria-pressed={hidden}
      aria-label={hidden ? 'Show balances' : 'Hide balances'}
    >
      {hidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
      <span>{hidden ? 'Show' : 'Hide'} Balance</span>
    </button>
  );
}
