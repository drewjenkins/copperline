import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from '../ui/ProductCard';
import { SectionHeading } from '../ui/SectionHeading';

export function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Current Offerings"
            title="Staff Favorites"
            subtitle="Coffees our team can't stop talking about — each one exceptional in its own right."
          />
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors whitespace-nowrap"
          >
            View all coffees <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
