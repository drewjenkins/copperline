import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { PageTransition } from '../components/layout/PageTransition';
import { CartItemRow } from '../components/cart/CartItem';
import { PromoCode } from '../components/cart/PromoCode';
import { OrderSummary } from '../components/cart/OrderSummary';

export function CartPage() {
  const items = useCartStore((s) => s.items);

  return (
    <PageTransition>
      <div className="pt-20 md:pt-24 min-h-screen bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={28} className="text-stone-400" />
              </div>
              <h2 className="font-serif text-2xl text-stone-900 mb-3">Your cart is empty</h2>
              <p className="text-stone-500 mb-8">Add some coffee and we'll get you sorted.</p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-amber-700 text-stone-50 px-8 py-3.5 text-sm font-medium hover:bg-amber-800 transition-colors"
              >
                Browse Coffees <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              {/* Items */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-stone-100 p-6">
                  {items.map((item) => (
                    <CartItemRow key={item.id} item={item} />
                  ))}
                </div>

                {/* Promo */}
                <div className="mt-4">
                  <PromoCode />
                </div>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-stone-500 hover:text-stone-900 transition-colors"
                >
                  ← Continue shopping
                </Link>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
