import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showCount?: boolean;
  count?: number;
}

export function StarRating({ rating, maxRating = 5, size = 14, showCount, count }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={i < Math.round(rating) ? 'fill-amber-500 text-amber-500' : 'fill-stone-200 text-stone-200'}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="text-sm text-stone-500 ml-1">({count})</span>
      )}
    </div>
  );
}
