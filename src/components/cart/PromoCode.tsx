import { useState } from 'react';
import { Tag, X, Check } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export function PromoCode() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { promoApplied, promoCode, applyPromo, removePromo } = useCartStore();

  const handleApply = () => {
    if (!input.trim()) {
      setError('Please enter a promo code.');
      return;
    }
    const success = applyPromo(input.trim());
    if (!success) {
      setError('Invalid promo code. Try FIRSTBREW for 10% off!');
    } else {
      setError('');
      setInput('');
    }
  };

  if (promoApplied) {
    return (
      <div className="flex items-center justify-between py-3 px-4 bg-green-50 border border-green-200">
        <div className="flex items-center gap-2 text-sm text-green-700">
          <Check size={15} />
          <span>Code <strong>{promoCode}</strong> applied — 10% off!</span>
        </div>
        <button onClick={removePromo} className="p-1 text-green-600 hover:text-red-500 transition-colors" aria-label="Remove promo">
          <X size={15} />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Tag size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={input}
            onChange={(e) => { setInput(e.target.value.toUpperCase()); setError(''); }}
            onKeyDown={(e) => e.key === 'Enter' && handleApply()}
            placeholder="Promo code"
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent uppercase tracking-wide"
          />
        </div>
        <button
          onClick={handleApply}
          className="px-4 py-2.5 text-sm font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors"
        >
          Apply
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
    </div>
  );
}
