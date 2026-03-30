import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { StarRating } from '../ui/StarRating';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="What People Are Saying"
            title="Loved by Coffee Drinkers"
            subtitle="Don't take our word for it. Here's what our customers say about their Copperline experience."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 border border-stone-100"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 text-stone-700 leading-relaxed italic">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-stone-900">{t.author}</p>
                  <p className="text-xs text-stone-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
