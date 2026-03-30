import type { GrindType, BagSize } from '../../data/products';
import { grindTypeLabels, bagSizeLabels, bagSizePricing } from '../../data/products';

interface VariantSelectorProps {
  grindType: GrindType;
  bagSize: BagSize;
  basePrice: number;
  onGrindChange: (g: GrindType) => void;
  onSizeChange: (s: BagSize) => void;
}

const grindTypes: GrindType[] = ['whole-bean', 'medium-grind', 'fine-grind'];
const bagSizes: BagSize[] = ['12oz', '2lb', '5lb'];

export function VariantSelector({
  grindType,
  bagSize,
  basePrice,
  onGrindChange,
  onSizeChange,
}: VariantSelectorProps) {
  return (
    <div className="space-y-5">
      {/* Grind Type */}
      <div>
        <p className="text-sm font-medium text-stone-700 mb-2.5">
          Grind: <span className="text-amber-700">{grindTypeLabels[grindType]}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {grindTypes.map((g) => (
            <button
              key={g}
              onClick={() => onGrindChange(g)}
              className={`px-4 py-2 text-sm border transition-colors ${
                grindType === g
                  ? 'border-stone-900 bg-stone-900 text-stone-50'
                  : 'border-stone-300 text-stone-700 hover:border-stone-500'
              }`}
            >
              {grindTypeLabels[g]}
            </button>
          ))}
        </div>
      </div>

      {/* Bag Size */}
      <div>
        <p className="text-sm font-medium text-stone-700 mb-2.5">
          Size: <span className="text-amber-700">{bagSizeLabels[bagSize]}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {bagSizes.map((s) => {
            const price = basePrice + bagSizePricing[s];
            return (
              <button
                key={s}
                onClick={() => onSizeChange(s)}
                className={`px-4 py-2 text-sm border transition-colors flex flex-col items-center ${
                  bagSize === s
                    ? 'border-stone-900 bg-stone-900 text-stone-50'
                    : 'border-stone-300 text-stone-700 hover:border-stone-500'
                }`}
              >
                <span>{bagSizeLabels[s]}</span>
                <span className={`text-xs mt-0.5 ${bagSize === s ? 'text-stone-300' : 'text-stone-400'}`}>
                  ${price}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
