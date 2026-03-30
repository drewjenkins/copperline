import type { Review } from '../../data/products';
import { StarRating } from '../ui/StarRating';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const date = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="border-b border-stone-100 pb-6 last:border-0">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <p className="text-sm font-semibold text-stone-900">{review.author}</p>
          <StarRating rating={review.rating} size={13} />
        </div>
        <time className="text-xs text-stone-400 whitespace-nowrap">{date}</time>
      </div>
      <h4 className="text-sm font-medium text-stone-800 mt-2 mb-1">{review.title}</h4>
      <p className="text-sm text-stone-600 leading-relaxed">{review.body}</p>
    </div>
  );
}
