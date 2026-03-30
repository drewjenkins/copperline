import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Truck, RefreshCcw, Clock, Shield, Package, AlertCircle } from 'lucide-react';

const shippingOptions = [
  {
    name: 'Standard Shipping',
    time: '3–5 Business Days',
    price: '$5.99',
    note: 'Free on orders over $50',
    icon: Truck,
  },
  {
    name: 'Express Shipping',
    time: '1–2 Business Days',
    price: '$12.99',
    note: 'Order by 12pm ET for same-day dispatch',
    icon: Clock,
  },
  {
    name: 'Free Shipping',
    time: '3–5 Business Days',
    price: 'Free',
    note: 'Automatically applied to orders $50+',
    icon: Package,
  },
];

export function ShippingPage() {
  return (
    <PageTransition>
      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-stone-950 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs text-amber-500 tracking-widest uppercase mb-3"
            >
              Getting Coffee to You
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-stone-50 mb-6"
            >
              Shipping & Returns
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-stone-400 max-w-xl leading-relaxed"
            >
              We roast to order and ship within 1–2 business days. Your coffee arrives at peak freshness — never sitting in a warehouse.
            </motion.p>
          </div>
        </section>

        {/* Shipping options */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading eyebrow="Shipping Options" title="How Fast Do You Need It?" />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {shippingOptions.map((option, i) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="bg-white border border-stone-200 p-8 space-y-4"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-amber-50 border border-amber-200">
                      <Icon size={18} className="text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-stone-900">{option.name}</h3>
                      <p className="text-2xl font-semibold text-amber-700 mt-1">{option.price}</p>
                    </div>
                    <div className="text-sm text-stone-600 space-y-1">
                      <p className="font-medium">{option.time}</p>
                      <p className="text-stone-400">{option.note}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 p-5 flex gap-3">
              <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-stone-700 leading-relaxed">
                <strong>Freshness guarantee:</strong> All orders ship within 1–2 business days of roasting. We include a roast date on every bag. If your coffee arrives more than 14 days post-roast, contact us and we'll make it right.
              </p>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Shipping details */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Truck size={20} className="text-amber-700" />
                  <h2 className="font-serif text-2xl text-stone-900">Shipping Details</h2>
                </div>
                <div className="space-y-5 text-stone-600 text-sm leading-relaxed">
                  <p>
                    We ship Monday through Friday. Orders placed before 12pm ET on a business day typically ship the same day. Orders placed after 12pm ET, or on weekends and holidays, ship the next business day.
                  </p>
                  <p>
                    We ship via USPS and UPS depending on package size and destination. You'll receive a tracking number via email as soon as your order ships.
                  </p>
                  <p>
                    Currently we ship to all 50 US states. We do not yet offer international shipping, though it's on our roadmap for 2025.
                  </p>
                  <div className="border-t border-stone-100 pt-5 space-y-2">
                    <h4 className="font-medium text-stone-800">APO/FPO/DPO Addresses</h4>
                    <p>We ship to military addresses at standard rates. Please allow up to 10 business days for delivery.</p>
                  </div>
                  <div className="border-t border-stone-100 pt-5 space-y-2">
                    <h4 className="font-medium text-stone-800">P.O. Boxes</h4>
                    <p>We can ship to P.O. boxes via USPS Priority Mail. Express shipping is not available for P.O. boxes.</p>
                  </div>
                </div>
              </div>

              {/* Returns */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <RefreshCcw size={20} className="text-amber-700" />
                  <h2 className="font-serif text-2xl text-stone-900">Returns & Exchanges</h2>
                </div>
                <div className="space-y-5 text-stone-600 text-sm leading-relaxed">
                  <p>
                    Because coffee is a consumable product, we can't accept returns on opened bags. However, we stand behind the quality of everything we roast.
                  </p>
                  <p>
                    If you're dissatisfied with your coffee for any reason — stale, off-flavor, wrong grind, wrong product — contact us within 30 days of your order and we'll either replace it or issue a full refund. No questions asked.
                  </p>
                  <p>
                    For unopened, sealed bags, we accept returns within 30 days of the delivery date. Returned items must be in their original condition.
                  </p>
                  <div className="bg-stone-50 border border-stone-200 p-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-amber-700" />
                      <h4 className="font-medium text-stone-800">How to Initiate a Return</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-1 text-stone-500">
                      <li>Email us at <a href="mailto:hello@copperlinecoffee.com" className="text-amber-700 hover:underline">hello@copperlinecoffee.com</a> with your order number</li>
                      <li>Tell us what's wrong — we want to know</li>
                      <li>We'll confirm next steps within 1 business day</li>
                      <li>Refunds are processed within 5–7 business days</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
