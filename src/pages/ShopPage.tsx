import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import type { RoastLevel, Category } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import type { Filters } from '../components/shop/FilterSidebar';
import { SortDropdown } from '../components/shop/SortDropdown';
import type { SortOption } from '../components/shop/SortDropdown';
import { ActiveFilters } from '../components/shop/ActiveFilters';
import { PageTransition } from '../components/layout/PageTransition';

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sort, setSort] = useState<SortOption>('featured');
  const [search, setSearch] = useState('');

  // Derive category and roast from URL params on every render so footer links
  // (which only change searchParams) always produce updated filter state.
  const filters: Filters = {
    category: (searchParams.get('category') as Category | '') || '',
    roast: (searchParams.get('roast') as RoastLevel | '') || '',
    search,
  };

  const setFilters = (newFilters: Filters) => {
    setSearch(newFilters.search);
    const params: Record<string, string> = {};
    if (newFilters.category) params.category = newFilters.category;
    if (newFilters.roast) params.roast = newFilters.roast;
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.roast) {
      result = result.filter((p) => p.roastLevel === filters.roast);
    }
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.origin.country.toLowerCase().includes(q) ||
          p.flavorNotes.some((n) => n.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case 'price-desc':
        result.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
        break;
      case 'featured':
      default:
        result = result.filter((p) => p.isFeatured).concat(result.filter((p) => !p.isFeatured));
    }

    return result;
  }, [filters, sort]);

  return (
    <PageTransition>
      <div className="pt-20 md:pt-24 min-h-screen bg-stone-50">
        {/* Header */}
        <div className="bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-2">Copperline Coffee</p>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900">Shop All Coffees</h1>
            <p className="mt-3 text-stone-500 max-w-xl">
              {products.length} coffees, each roasted fresh to order in Asheville, NC.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          {/* Search + Controls row */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="search"
                placeholder="Search by name, origin, or flavor…"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
              />
              {filters.search && (
                <button
                  onClick={() => setFilters({ ...filters, search: '' })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="flex items-center gap-2 text-sm font-medium text-stone-700 border border-stone-200 px-3 py-2.5 md:hidden"
              >
                <SlidersHorizontal size={15} />
                Filters
              </button>
              <SortDropdown value={sort} onChange={setSort} />
            </div>
          </div>

          <ActiveFilters filters={filters} onChange={setFilters} />

          <div className="flex gap-12">
            {/* Desktop sidebar */}
            <div className="hidden md:block w-48 flex-shrink-0">
              <FilterSidebar filters={filters} onChange={setFilters} />
            </div>

            {/* Mobile filter overlay */}
            <AnimatePresence>
              {mobileFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="fixed inset-0 z-50 bg-stone-50 p-6 overflow-y-auto md:hidden"
                >
                  <FilterSidebar
                    filters={filters}
                    onChange={(f) => { setFilters(f); setMobileFilterOpen(false); }}
                    onClose={() => setMobileFilterOpen(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product grid */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-stone-400 text-lg mb-3">No coffees match your filters.</p>
                  <button
                    onClick={() => setFilters({ category: '', roast: '', search: '' })}
                    className="text-sm text-amber-700 underline hover:text-amber-800"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-stone-500 mb-6">{filtered.length} coffees</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filtered.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
