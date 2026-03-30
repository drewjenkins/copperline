import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CartItem as CartItemType } from '../../store/cartStore';
import { useCartStore } from '../../store/cartStore';
import { grindTypeLabels, bagSizeLabels } from '../../data/products';
import { QuantitySelector } from '../product/QuantitySelector';

interface CartItemProps {
  item: CartItemType;
}

export function CartItemRow({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-6 border-b border-stone-100 last:border-0">
      {/* Image */}
      <Link to={`/products/${item.product.slug}`} className="flex-shrink-0">
        <img
          src={item.product.images[0]}
          alt={item.product.name}
          className="w-20 h-20 object-cover bg-stone-100"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              to={`/products/${item.product.slug}`}
              className="font-serif text-base text-stone-900 hover:text-amber-700 transition-colors block leading-snug"
            >
              {item.product.name}
            </Link>
            <p className="text-xs text-stone-400 mt-0.5">
              {grindTypeLabels[item.grindType]} · {bagSizeLabels[item.bagSize]}
            </p>
          </div>
          <p className="text-sm font-medium text-stone-900 whitespace-nowrap">
            ${(item.unitPrice * item.quantity).toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <QuantitySelector
            quantity={item.quantity}
            onChange={(qty) => updateQuantity(item.id, qty)}
          />
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-400">${item.unitPrice.toFixed(2)} each</span>
            <button
              onClick={() => removeItem(item.id)}
              className="p-1.5 text-stone-400 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
