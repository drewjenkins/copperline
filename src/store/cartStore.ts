import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, GrindType, BagSize } from '../data/products';
import { bagSizePricing } from '../data/products';

export interface CartItem {
  id: string; // unique: productId + grind + size
  product: Product;
  grindType: GrindType;
  bagSize: BagSize;
  quantity: number;
  unitPrice: number;
}

interface CartState {
  items: CartItem[];
  promoCode: string;
  promoApplied: boolean;
  addItem: (product: Product, grindType: GrindType, bagSize: BagSize, quantity: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getDiscount: () => number;
  getShipping: () => number;
  getTax: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

const PROMO_CODE = 'FIRSTBREW';
const PROMO_DISCOUNT = 0.10;
const TAX_RATE = 0.0725;
const FREE_SHIPPING_THRESHOLD = 60;
const SHIPPING_COST = 6.99;

function buildItemId(productId: string, grindType: GrindType, bagSize: BagSize) {
  return `${productId}-${grindType}-${bagSize}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: '',
      promoApplied: false,

      addItem: (product, grindType, bagSize, quantity) => {
        const itemId = buildItemId(product.id, grindType, bagSize);
        const unitPrice = product.basePrice + bagSizePricing[bagSize];
        set((state) => {
          const existing = state.items.find((i) => i.id === itemId);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === itemId ? { ...i, quantity: i.quantity + quantity } : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              { id: itemId, product, grindType, bagSize, quantity, unitPrice },
            ],
          };
        });
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          ),
        }));
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== itemId),
        }));
      },

      applyPromo: (code) => {
        if (code.toUpperCase() === PROMO_CODE) {
          set({ promoCode: code.toUpperCase(), promoApplied: true });
          return true;
        }
        return false;
      },

      removePromo: () => {
        set({ promoCode: '', promoApplied: false });
      },

      clearCart: () => {
        set({ items: [], promoCode: '', promoApplied: false });
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      },

      getDiscount: () => {
        const { promoApplied, getSubtotal } = get();
        return promoApplied ? getSubtotal() * PROMO_DISCOUNT : 0;
      },

      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
      },

      getTax: () => {
        const { getSubtotal, getDiscount } = get();
        return (getSubtotal() - getDiscount()) * TAX_RATE;
      },

      getTotal: () => {
        const { getSubtotal, getDiscount, getShipping, getTax } = get();
        return getSubtotal() - getDiscount() + getShipping() + getTax();
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'copperline-cart',
    }
  )
);
