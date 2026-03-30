import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { Truck } from 'lucide-react';

interface OrderSummaryProps {
  showCheckoutButton?: boolean;
}

export function OrderSummary({ showCheckoutButton = true }: OrderSummaryProps) {
  const subtotal = useCartStore((s) => s.getSubtotal());
  const discount = useCartStore((s) => s.getDiscount());
  const shipping = useCartStore((s) => s.getShipping());
  const tax = useCartStore((s) => s.getTax());
  const total = useCartStore((s) => s.getTotal());
  const promoApplied = useCartStore((s) => s.promoApplied);

  const FREE_SHIPPING_THRESHOLD = 60;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="bg-stone-50 border border-stone-200 p-6 space-y-4">
      <h3 className="font-serif text-lg text-stone-900">Order Summary</h3>

      {amountToFreeShipping > 0 && (
        <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 text-xs text-amber-800">
          <Truck size={14} />
          <span>Add <strong>${amountToFreeShipping.toFixed(2)}</strong> more for free shipping!</span>
        </div>
      )}

      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-stone-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {promoApplied && (
          <div className="flex justify-between text-green-600">
            <span>Promo (FIRSTBREW)</span>
            <span>−${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-stone-600">
          <span>Shipping</span>
          <span>{shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-stone-600">
          <span>Tax (7.25%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t border-stone-200 pt-3 flex justify-between font-semibold text-stone-900">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {showCheckoutButton && (
        <Link
          to="/checkout"
          className="block w-full text-center py-3.5 bg-amber-700 text-stone-50 text-sm font-medium tracking-wide hover:bg-amber-800 transition-colors mt-2"
        >
          Proceed to Checkout
        </Link>
      )}
    </div>
  );
}
