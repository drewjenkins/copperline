import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../../data/products';
import { roastLevelLabels } from '../../data/products';
import { Badge } from './Badge';
import { StarRating } from './StarRating';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const avgRating = product.reviews.length
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-stone-100 aspect-square mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && <Badge variant="new">New</Badge>}
            {product.category === 'seasonal' && <Badge variant="seasonal">Seasonal</Badge>}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
              {product.name}
            </h3>
            <span className="text-stone-900 font-medium text-sm whitespace-nowrap">${product.basePrice}</span>
          </div>

          <p className="text-xs text-stone-500 uppercase tracking-wide">
            {product.origin.country} · {roastLevelLabels[product.roastLevel]} Roast
          </p>

          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {product.flavorNotes.slice(0, 3).map((note) => (
              <span key={note} className="text-xs text-stone-500 border border-stone-200 px-2 py-0.5">
                {note}
              </span>
            ))}
          </div>

          {product.reviews.length > 0 && (
            <div className="pt-1">
              <StarRating rating={avgRating} showCount count={product.reviews.length} />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
