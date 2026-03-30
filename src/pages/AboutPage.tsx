import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Leaf, Award, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'We cup every lot before purchasing. If it doesn\'t meet our standards, we don\'t buy it — regardless of price or availability pressure.',
  },
  {
    icon: Heart,
    title: 'Producer Relationships',
    description: 'We pay above Fair Trade minimums and maintain multi-year relationships with our farms. The people growing your coffee deserve to thrive.',
  },
  {
    icon: Leaf,
    title: 'Environmental Stewardship',
    description: 'Our roastery runs on 100% renewable energy. All packaging is compostable. We offset every shipment\'s carbon footprint.',
  },
];

const team = [
  {
    name: 'Eliza Hartwell',
    role: 'Founder & Head Roaster',
    bio: 'Eliza spent 8 years working with coffee cooperatives across Ethiopia and Colombia before returning to her hometown of Asheville to open Copperline. Her philosophy: the best coffee is the one you understand.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Marcus Okoye',
    role: 'Green Buyer & Sourcing',
    bio: 'Marcus travels to origin twice a year to build relationships with producers and identify exceptional lots before they hit the commodity market. He speaks four languages — coffee being the most important.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Rina Callaway',
    role: 'Barista & Education Lead',
    bio: 'A former World Brewers Cup competitor, Rina leads our customer education program and trains our wholesale partners. She believes every home brewer can make cafe-quality coffee.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
];

export function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end bg-stone-950 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=85"
            alt="Coffee roasting"
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
              Est. 2019 · Asheville, NC
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-stone-50"
            >
              Our Story
            </motion.h1>
          </div>
        </section>

        {/* Founder story */}
        <section className="py-20 md:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  eyebrow="How It Started"
                  title="A Mission to Close the Distance"
                />
                <div className="mt-6 space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    Copperline was born from a frustration: there was an enormous gap between the farmers growing extraordinary coffee and the people drinking it. We set out to close that gap — to make the line from origin to cup as direct, as honest, and as transparent as possible.
                  </p>
                  <p>
                    Our founder Eliza Hartwell spent years learning the supply chain from the ground up, living in coffee-growing communities, cupping thousands of lots, and studying under some of the world's most respected roasters. When she came back to Asheville, she brought everything she'd learned.
                  </p>
                  <p>
                    The name Copperline is a nod to the Appalachian copper mining history that shaped this region — and to the warm amber color of a perfectly rested espresso pulling through a portafilter. Grounded in place. Reaching toward quality.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
                  alt="Roastery"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-amber-700 text-stone-50 p-5 hidden md:block">
                  <p className="font-serif text-2xl">5+</p>
                  <p className="text-xs tracking-wide">years roasting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80"
                  alt="Coffee origin"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeading
                  eyebrow="Sourcing Philosophy"
                  title="We Know Our Farmers by Name"
                />
                <div className="mt-6 space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    Direct trade isn't a marketing phrase for us — it's a practice. We visit our producing partners at origin at least once per harvest cycle. We pay meaningful premiums above commodity prices. And we share lot information so you know exactly where your coffee was grown, by whom, and how.
                  </p>
                  <p>
                    Our current sourcing portfolio spans Ethiopia, Colombia, Kenya, Guatemala, Indonesia, Costa Rica, Brazil, and Honduras. Each relationship represents years of trust-building, transparent pricing, and mutual commitment to quality.
                  </p>
                  <p>
                    When you buy Copperline, you're participating in a supply chain designed to be good for everyone in it — especially the people at the beginning of it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-stone-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionHeading
                eyebrow="What We Stand For"
                title="Our Commitments"
                centered
                light
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-amber-700/20 border border-amber-700/30 mx-auto mb-5">
                      <Icon size={22} className="text-amber-500" />
                    </div>
                    <h3 className="font-serif text-xl text-stone-50 mb-3">{v.title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed">{v.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <SectionHeading
                eyebrow="The Team"
                title="The People Behind the Coffee"
                centered
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover mb-5 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <h3 className="font-serif text-lg text-stone-900">{member.name}</h3>
                  <p className="text-xs text-amber-700 tracking-wide uppercase mb-3">{member.role}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
