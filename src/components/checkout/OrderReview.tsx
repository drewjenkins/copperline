import { useCartStore } from '../../store/cartStore';
import { grindTypeLabels, bagSizeLabels } from '../../data/products';
import type { ShippingData } from './ShippingForm';
import { MapPin, CreditCard } from 'lucide-react';

interface OrderReviewProps {
  shipping: ShippingData;
  onBack: () => void;
  onPlaceOrder: () => void;
}

export function OrderReview({ shipping, onBack, onPlaceOrder }: OrderReviewProps) {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.getSubtotal());
  const discount = useCartStore((s) => s.getDiscount());
  const shippingCost = useCartStore((s) => s.getShipping());
  const tax = useCartStore((s) => s.getTax());
  const total = useCartStore((s) => s.getTotal());
  const promoApplied = useCartStore((s) => s.promoApplied);

  return (
    <div className="space-y-8">
      <h2 className="font-serif text-xl text-stone-900">Review Your Order</h2>

      {/* Items */}
      <div>
        <h3 className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-3">Items</h3>
        <div className="border border-stone-200 divide-y divide-stone-100">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-3">
              <img src={item.product.images[0]} alt={item.product.name} className="w-12 h-12 object-cover bg-stone-100" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-900 truncate">{item.product.name}</p>
                <p className="text-xs text-stone-400">
                  {grindTypeLabels[item.grindType]} · {bagSizeLabels[item.bagSize]} · Qty {item.quantity}
                </p>
              </div>
              <p className="text-sm font-medium text-stone-900">${(item.unitPrice * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping address */}
      <div>
        <h3 className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-3 flex items-center gap-1.5">
          <MapPin size={12} /> Shipping To
        </h3>
        <div className="text-sm text-stone-700 space-y-0.5 bg-stone-50 border border-stone-200 p-4">
          <p className="font-medium">{shipping.firstName} {shipping.lastName}</p>
          <p>{shipping.address1}{shipping.address2 ? `, ${shipping.address2}` : ''}</p>
          <p>{shipping.city}, {shipping.state} {shipping.zip}</p>
          <p>{shipping.email}</p>
        </div>
      </div>

      {/* Payment */}
      <div>
        <h3 className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-3 flex items-center gap-1.5">
          <CreditCard size={12} /> Payment
        </h3>
        <p className="text-sm text-stone-600 bg-stone-50 border border-stone-200 p-4">
          Demo card ending in •••• (no charge will be made)
        </p>
      </div>

      {/* Totals */}
      <div className="border-t border-stone-200 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-stone-600">
          <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
        </div>
        {promoApplied && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span><span>−${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-stone-600">
          <span>Shipping</span>
          <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-stone-600">
          <span>Tax</span><span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-stone-900 text-base border-t border-stone-200 pt-2 mt-2">
          <span>Total</span><span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-3.5 border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onPlaceOrder}
          className="flex-1 py-3.5 bg-amber-700 text-stone-50 text-sm font-medium tracking-wide hover:bg-amber-800 transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
