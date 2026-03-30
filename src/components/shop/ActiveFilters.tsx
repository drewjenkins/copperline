import { X } from 'lucide-react';
import type { Filters } from './FilterSidebar';
import { roastLevelLabels } from '../../data/products';

interface ActiveFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function ActiveFilters({ filters, onChange }: ActiveFiltersProps) {
  const chips: { key: keyof Filters; label: string }[] = [];

  if (filters.category) {
    const labels: Record<string, string> = {
      'single-origin': 'Single Origin',
      blend: 'Blends',
      seasonal: 'Seasonal',
    };
    chips.push({ key: 'category', label: labels[filters.category] || filters.category });
  }

  if (filters.roast) {
    chips.push({ key: 'roast', label: roastLevelLabels[filters.roast] + ' Roast' });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-xs text-stone-500">Active filters:</span>
      {chips.map((chip) => (
        <button
          key={chip.key}
          onClick={() => onChange({ ...filters, [chip.key]: '' })}
          className="flex items-center gap-1.5 px-3 py-1 text-xs bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
        >
          {chip.label}
          <X size={12} />
        </button>
      ))}
      <button
        onClick={() => onChange({ ...filters, category: '', roast: '' })}
        className="text-xs text-amber-700 hover:text-amber-800 underline ml-1"
      >
        Clear all
      </button>
    </div>
  );
}
