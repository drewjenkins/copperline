import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setError('');
  };

  return (
    <section className="py-20 md:py-28 bg-amber-700">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-amber-200 mb-4">Stay in the Loop</p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-4">
            First Dibs on New Arrivals
          </h2>
          <p className="text-amber-100 leading-relaxed mb-8">
            Sign up for our newsletter and get early access to new coffees, seasonal releases, and roast notes. Plus, use code <strong className="text-stone-50">FIRSTBREW</strong> for 10% off your first order.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-stone-50">
              <div className="w-8 h-8 rounded-full bg-stone-50/20 flex items-center justify-center">
                <Check size={16} />
              </div>
              <span className="font-medium">You're on the list. Welcome to Copperline.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3.5 bg-stone-50 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
                {error && <p className="text-xs text-amber-100 mt-1.5 text-left">{error}</p>}
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-stone-950 text-stone-50 text-sm font-medium tracking-wide hover:bg-stone-900 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
