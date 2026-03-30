import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Coffee } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { PageTransition } from '../components/layout/PageTransition';
import { StepIndicator } from '../components/checkout/StepIndicator';
import { ShippingForm } from '../components/checkout/ShippingForm';
import type { ShippingData } from '../components/checkout/ShippingForm';
import { PaymentForm } from '../components/checkout/PaymentForm';
import type { PaymentData } from '../components/checkout/PaymentForm';
import { OrderReview } from '../components/checkout/OrderReview';
import { OrderSummary } from '../components/cart/OrderSummary';

const STEPS = ['Shipping', 'Payment', 'Review'];

function generateOrderNumber() {
  return 'CCR-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

export function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState<ShippingData | null>(null);
  const [, setPaymentData] = useState<PaymentData | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (items.length === 0 && !confirmed) {
    return <Navigate to="/cart" replace />;
  }

  const handleShippingSubmit = (data: ShippingData) => {
    setShippingData(data);
    setStep(2);
  };

  const handlePaymentSubmit = (data: PaymentData) => {
    setPaymentData(data);
    setStep(3);
  };

  const handlePlaceOrder = () => {
    setOrderNumber(generateOrderNumber());
    clearCart();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <PageTransition>
        <div className="pt-20 md:pt-24 min-h-screen bg-stone-50 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-md w-full text-center py-16"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="font-serif text-3xl text-stone-900 mb-3">Order Confirmed!</h1>
            <p className="text-stone-600 mb-2">
              Thank you, {shippingData?.firstName}. Your order has been placed.
            </p>
            <p className="text-sm text-stone-400 mb-8">
              Order <strong className="text-stone-600">{orderNumber}</strong> · A confirmation will be sent to {shippingData?.email}
            </p>

            <div className="bg-white border border-stone-200 p-6 text-sm text-stone-600 mb-8 space-y-2">
              <div className="flex items-center gap-2 text-amber-700">
                <Coffee size={16} />
                <span className="font-medium">What happens next?</span>
              </div>
              <p>We'll start your fresh roast within 24 hours. Your coffee will ship in 1–2 business days. Free shipping on this order!</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/shop"
                className="flex-1 py-3 border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors text-center"
              >
                Keep Shopping
              </Link>
              <Link
                to="/"
                className="flex-1 py-3 bg-amber-700 text-stone-50 text-sm font-medium hover:bg-amber-800 transition-colors text-center"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-20 md:pt-24 min-h-screen bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl text-stone-900 text-center mb-8">Checkout</h1>

          <StepIndicator currentStep={step} steps={STEPS} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form area */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-stone-100 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 1 && (
                      <ShippingForm
                        defaultValues={shippingData || undefined}
                        onSubmit={handleShippingSubmit}
                      />
                    )}
                    {step === 2 && (
                      <PaymentForm
                        onSubmit={handlePaymentSubmit}
                        onBack={() => setStep(1)}
                      />
                    )}
                    {step === 3 && shippingData && (
                      <OrderReview
                        shipping={shippingData}
                        onBack={() => setStep(2)}
                        onPlaceOrder={handlePlaceOrder}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Order summary sidebar */}
            <div className="lg:col-span-1">
              <OrderSummary showCheckoutButton={false} />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
