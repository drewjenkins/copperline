import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Coffee } from 'lucide-react';

export function NotFoundPage() {
  return (
    <PageTransition>
      <div className="pt-20 min-h-screen bg-stone-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6">
            <Coffee size={28} className="text-amber-700" />
          </div>
          <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-3">404 — Page Not Found</p>
          <h1 className="font-serif text-4xl text-stone-900 mb-4">This Bag is Empty</h1>
          <p className="text-stone-500 leading-relaxed mb-8">
            Looks like this page doesn't exist — maybe it was a limited seasonal offering that sold out. Let's get you back to something good.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/shop"
              className="px-6 py-3 border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-100 transition-colors"
            >
              Browse Coffees
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
