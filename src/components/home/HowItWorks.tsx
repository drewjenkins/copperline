import { motion } from 'framer-motion';
import { Search, Flame, Package } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Choose Your Coffee',
    description: 'Browse our curated selection of single-origin coffees and blends. Filter by roast level, origin, or flavor profile to find exactly what you\'re looking for.',
  },
  {
    icon: Flame,
    number: '02',
    title: 'We Roast Fresh',
    description: 'Every order triggers a fresh roast in our Asheville facility. We never ship stale coffee — your beans are roasted to order and ship within 48 hours.',
  },
  {
    icon: Package,
    number: '03',
    title: 'Delivered to Your Door',
    description: 'Packaged in our signature resealable bags with one-way degassing valves and shipped directly to you. Free shipping on orders over $60.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            eyebrow="The Process"
            title="From Origin to Cup"
            subtitle="We keep the chain short and the quality high at every step."
            centered
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="relative mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-amber-700/20 border border-amber-700/30">
                    <Icon size={24} className="text-amber-500" />
                  </div>
                  <span className="absolute -top-3 -right-3 text-5xl font-serif text-stone-800 leading-none select-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-stone-50 mb-3">{step.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
