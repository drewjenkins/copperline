import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Leaf, MapPin, Star } from 'lucide-react';
import { getProductBySlug, roastLevelLabels, bagSizePricing } from '../data/products';
import type { GrindType, BagSize } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { PageTransition } from '../components/layout/PageTransition';
import { ImageGallery } from '../components/product/ImageGallery';
import { VariantSelector } from '../components/product/VariantSelector';
import { QuantitySelector } from '../components/product/QuantitySelector';
import { ReviewCard } from '../components/product/ReviewCard';
import { Badge } from '../components/ui/Badge';
import { StarRating } from '../components/ui/StarRating';

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');

  const [grindType, setGrindType] = useState<GrindType>('whole-bean');
  const [bagSize, setBagSize] = useState<BagSize>('12oz');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-stone-900 mb-4">Coffee Not Found</h2>
          <Link to="/shop" className="text-amber-700 underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const unitPrice = product.basePrice + bagSizePricing[bagSize];
  const avgRating = product.reviews.length
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0;

  const handleAddToCart = () => {
    addItem(product, grindType, bagSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <PageTransition>
      <div className="pt-20 md:pt-24 min-h-screen bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left: Image gallery */}
            <div>
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Product info */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.isNew && <Badge variant="new">New Arrival</Badge>}
                {product.category === 'seasonal' && <Badge variant="seasonal">Limited Season</Badge>}
                <Badge variant={product.roastLevel}>{roastLevelLabels[product.roastLevel]} Roast</Badge>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">{product.name}</h1>

              {/* Origin */}
              <div className="flex items-center gap-1.5 text-sm text-stone-500 mb-4">
                <MapPin size={14} className="text-amber-700" />
                <span>{product.origin.country}</span>
                {product.origin.region !== 'Blend' && (
                  <><span>·</span><span>{product.origin.region}</span></>
                )}
              </div>

              {/* Rating */}
              {product.reviews.length > 0 && (
                <div className="flex items-center gap-3 mb-5">
                  <StarRating rating={avgRating} showCount count={product.reviews.length} />
                  <a href="#reviews" className="text-xs text-amber-700 hover:underline">
                    Read reviews
                  </a>
                </div>
              )}

              {/* Price */}
              <div className="text-3xl font-medium text-stone-900 mb-6">
                ${unitPrice.toFixed(2)}
              </div>

              {/* Description */}
              <p className="text-stone-600 leading-relaxed mb-6">{product.description}</p>

              {/* Flavor notes */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-stone-500 tracking-widest uppercase mb-2.5">Flavor Notes</p>
                <div className="flex flex-wrap gap-2">
                  {product.flavorNotes.map((note) => (
                    <span key={note} className="flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200 text-xs text-amber-800">
                      <Star size={10} className="fill-amber-500 text-amber-500" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 space-y-6">
                {/* Variant selectors */}
                <VariantSelector
                  grindType={grindType}
                  bagSize={bagSize}
                  basePrice={product.basePrice}
                  onGrindChange={setGrindType}
                  onSizeChange={setBagSize}
                />

                {/* Quantity + Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <QuantitySelector quantity={quantity} onChange={setQuantity} />
                  <motion.button
                    onClick={handleAddToCart}
                    whileTap={{ scale: 0.97 }}
                    className={`flex-1 flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-medium tracking-wide transition-colors ${
                      added
                        ? 'bg-green-700 text-stone-50'
                        : 'bg-amber-700 text-stone-50 hover:bg-amber-800'
                    }`}
                  >
                    <ShoppingBag size={17} />
                    {added ? 'Added to Cart!' : 'Add to Cart'}
                  </motion.button>
                </div>

                {/* Promo hint */}
                <p className="text-xs text-stone-400 flex items-center gap-1.5">
                  <Leaf size={12} className="text-green-600" />
                  Use code <strong className="text-stone-600">FIRSTBREW</strong> for 10% off your first order. Free shipping over $60.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div id="reviews" className="mt-20 border-t border-stone-200 pt-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-serif text-2xl text-stone-900">Customer Reviews</h2>
                {product.reviews.length > 0 && (
                  <div className="flex items-center gap-2 text-sm text-stone-500">
                    <StarRating rating={avgRating} size={15} />
                    <span>{avgRating.toFixed(1)} · {product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}</span>
                  </div>
                )}
              </div>

              {product.reviews.length === 0 ? (
                <p className="text-stone-400">No reviews yet — be the first!</p>
              ) : (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
