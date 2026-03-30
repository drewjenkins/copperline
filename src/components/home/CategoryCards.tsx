import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const categories = [
  {
    label: 'Single Origin',
    param: 'single-origin',
    description: 'Traceability from farm to cup. Each coffee tells the story of its place.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80',
    count: 8,
  },
  {
    label: 'Blends',
    param: 'blend',
    description: 'Carefully balanced combinations crafted for consistency and depth.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    count: 2,
  },
  {
    label: 'Seasonal',
    param: 'seasonal',
    description: 'Limited offerings that celebrate the best of each harvest season.',
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
    count: 2,
  },
];

export function CategoryCards() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Browse by Category"
            title="Find Your Perfect Cup"
            subtitle="Whether you're chasing terroir-driven nuance or a reliable daily ritual, we have the coffee for you."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.param}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/shop?category=${cat.param}`}
                className="group relative block overflow-hidden aspect-[3/4] bg-stone-900"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-xs text-amber-400 tracking-widest uppercase mb-2">{cat.count} coffees</p>
                  <h3 className="font-serif text-2xl text-stone-50 mb-2">{cat.label}</h3>
                  <p className="text-sm text-stone-300 leading-relaxed">{cat.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wide uppercase">
                    <span>Shop Now</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
