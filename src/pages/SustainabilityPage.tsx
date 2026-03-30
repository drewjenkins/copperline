import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Leaf, Truck, Package, Users, Sun, Recycle } from 'lucide-react';

const commitments = [
  {
    icon: Users,
    title: 'Direct Trade Relationships',
    description:
      "We bypass commodity brokers entirely. Every lot we roast comes from a producer we've met in person, whose farm we've visited, and whose family we're committed to supporting year after year.",
  },
  {
    icon: Truck,
    title: 'Carbon-Neutral Shipping',
    description:
      'Every shipment we send — domestic or international — is offset through verified carbon credits with our partners at South Pole. We calculate actual freight emissions and retire credits accordingly.',
  },
  {
    icon: Package,
    title: 'Compostable Packaging',
    description:
      'Our bags are made from plant-based PLA film and kraft paper, certified home-compostable. The one-way valve and zipper lock are BPA-free. Even the shipping boxes are made from 100% recycled corrugated.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy Roastery',
    description:
      'Our Asheville roastery runs on 100% renewable electricity through a Green Power contract with Duke Energy. We also installed solar panels on our roof in 2023, which now cover roughly 40% of our energy needs.',
  },
  {
    icon: Leaf,
    title: 'Shade-Grown Sourcing Priority',
    description:
      'We actively prioritize farms that maintain forest canopy and biodiversity corridors. Shade-grown coffee protects migratory bird habitat, prevents soil erosion, and typically produces more complex, nuanced flavor.',
  },
  {
    icon: Recycle,
    title: 'Zero Waste Roastery Goal',
    description:
      'Chaff from our roaster goes to local composting facilities. We partner with Asheville GreenWorks to divert packaging waste. Our 2025 target is to send less than 2% of total waste to landfill.',
  },
];

const stats = [
  { value: '100%', label: 'Direct-trade sourced' },
  { value: '6', label: 'Producing countries' },
  { value: '12+', label: 'Farm partnerships' },
  { value: '$0', label: 'Net carbon since 2022' },
];

export function SustainabilityPage() {
  return (
    <PageTransition>
      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end bg-stone-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=1600&q=85"
            alt="Coffee farm"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs text-amber-500 tracking-widest uppercase mb-3"
            >
              Our Commitment
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-stone-50"
            >
              Sustainability
            </motion.h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  eyebrow="Why It Matters"
                  title="Coffee Is at the Front Line of Climate Change"
                />
                <div className="mt-6 space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    The regions where the world's finest coffee grows are disproportionately vulnerable to rising temperatures, shifting rainfall patterns, and extreme weather events. The farmers we partner with are already adapting — and they shouldn't have to do it alone.
                  </p>
                  <p>
                    Sustainability at Copperline isn't a section on our website. It's the lens through which we make every sourcing decision, every packaging choice, and every operational investment. We're not perfect, but we're honest about where we are and deliberate about where we're going.
                  </p>
                  <p>
                    We publish an annual impact report every January. It includes the actual premiums we paid above market price, verified carbon offset documentation, and honest reporting on where we fell short of our goals.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white border border-stone-200 p-8 text-center">
                    <p className="font-serif text-4xl text-amber-700 mb-2">{stat.value}</p>
                    <p className="text-sm text-stone-500 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitments */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionHeading
                eyebrow="How We Do It"
                title="Six Commitments We Stand Behind"
                centered
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {commitments.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="w-11 h-11 flex items-center justify-center bg-amber-50 border border-amber-200">
                      <Icon size={20} className="text-amber-700" />
                    </div>
                    <h3 className="font-serif text-lg text-stone-900">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Farming communities */}
        <section className="py-20 md:py-28 bg-stone-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  eyebrow="Beyond the Bean"
                  title="Investing in the Communities That Grow Our Coffee"
                  light
                />
                <div className="mt-6 space-y-5 text-stone-400 leading-relaxed">
                  <p>
                    Since 2021, we've contributed a portion of every bag sold to the Copperline Producer Fund — a dedicated pool used for producer-identified needs: school supplies in Huila, Colombia; water filtration systems for a cooperative in Yirgacheffe, Ethiopia; polytunnel infrastructure for a smallholder group in Huehuetenango, Guatemala.
                  </p>
                  <p>
                    We don't decide how the money is spent. We ask our partners what would make the most difference, and we fund it. The people who grow the coffee know their communities better than we do.
                  </p>
                  <p>
                    To date, the fund has contributed over $47,000 across 8 projects in 4 countries.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&q=80"
                  alt="Coffee farming community"
                  className="w-full aspect-[4/3] object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
