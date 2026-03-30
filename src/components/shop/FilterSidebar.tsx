import { X } from 'lucide-react';
import type { RoastLevel, Category } from '../../data/products';

export interface Filters {
  category: Category | '';
  roast: RoastLevel | '';
  search: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onClose?: () => void;
}

const categories: { value: Category | ''; label: string }[] = [
  { value: '', label: 'All Coffees' },
  { value: 'single-origin', label: 'Single Origin' },
  { value: 'blend', label: 'Blends' },
  { value: 'seasonal', label: 'Seasonal' },
];

const roastLevels: { value: RoastLevel | ''; label: string }[] = [
  { value: '', label: 'All Roasts' },
  { value: 'light', label: 'Light' },
  { value: 'medium', label: 'Medium' },
  { value: 'dark', label: 'Dark' },
];

export function FilterSidebar({ filters, onChange, onClose }: FilterSidebarProps) {
  const hasActiveFilters = filters.category !== '' || filters.roast !== '';

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-lg text-stone-900">Filter</h3>
        {onClose && (
          <button onClick={onClose} className="p-1 text-stone-500 hover:text-stone-900 md:hidden">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-3">Category</h4>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => onChange({ ...filters, category: cat.value })}
                className={`text-sm transition-colors ${
                  filters.category === cat.value
                    ? 'text-amber-700 font-medium'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Roast Level */}
      <div className="mb-8">
        <h4 className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-3">Roast Level</h4>
        <ul className="space-y-2">
          {roastLevels.map((roast) => (
            <li key={roast.value}>
              <button
                onClick={() => onChange({ ...filters, roast: roast.value })}
                className={`text-sm transition-colors ${
                  filters.roast === roast.value
                    ? 'text-amber-700 font-medium'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {roast.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Clear filters */}
      {hasActiveFilters && (
        <button
          onClick={() => onChange({ ...filters, category: '', roast: '' })}
          className="text-xs text-stone-500 underline hover:text-stone-900 transition-colors"
        >
          Clear filters
        </button>
      )}
    </aside>
  );
}
