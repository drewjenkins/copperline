import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What grind size should I order?',
    answer:
      "It depends on your brewing method. Here's a quick guide: Espresso → Fine. AeroPress → Medium-Fine. Pour Over (V60, Chemex) → Medium. Drip coffee maker → Medium. French Press → Coarse. Cold Brew → Extra Coarse. If you have a quality burr grinder at home, we always recommend ordering whole bean — grinding fresh right before brewing makes a noticeable difference in cup quality.",
  },
  {
    question: 'How should I store my coffee?',
    answer:
      "Store your coffee in its original bag (it's designed to protect it) at room temperature, away from direct sunlight, heat, and moisture. Don't store coffee in the fridge or freezer — the humidity and odors can degrade the flavor. Once opened, consume within 2-3 weeks for best results. Our bags have a one-way valve and resealable zipper to help maintain freshness.",
  },
  {
    question: 'How long does coffee stay fresh?',
    answer:
      "Roasted coffee is best consumed within 2-6 weeks of the roast date. The sweet spot for most coffees is 7-21 days post-roast — after the initial off-gassing period but before significant flavor degradation begins. You'll find the roast date printed on every bag we ship. We roast to order, so your coffee typically arrives within a few days of leaving the roaster.",
  },
  {
    question: 'Can I cancel or modify my subscription?',
    answer:
      'Yes, you can pause, modify, or cancel your subscription at any time — no fees, no hoops to jump through. Log into your account and manage your subscription from the "My Subscriptions" section, or email us at hello@copperlinecoffee.com. We ask for 48 hours notice before your next scheduled roast date to avoid that batch being roasted and shipped.',
  },
  {
    question: 'What brew method do you recommend for beginners?',
    answer:
      "The AeroPress is our top recommendation for beginners. It's forgiving, fast (under 2 minutes), easy to clean, and produces excellent coffee across a wide range of grind sizes and ratios. If you prefer something more hands-off, a quality automatic drip maker with a pre-infusion feature (like the OXO Brew 9-Cup) is another great starting point. We also offer brew guides for every major method on our blog.",
  },
  {
    question: 'Do you offer wholesale or café accounts?',
    answer:
      "Yes. We work with a select number of cafes, restaurants, and specialty grocery stores. We look for partners who share our values around quality and sourcing transparency. If you're interested in carrying Copperline or serving it in your space, reach out to us at wholesale@copperlinecoffee.com with some details about your concept. We typically respond within 3-5 business days.",
  },
  {
    question: 'Do you offer gift cards?',
    answer:
      "Yes! Digital gift cards are available in denominations of $25, $50, $75, and $100. They're delivered instantly via email and never expire. Gift cards can be used on any order, including subscriptions. You can purchase them from the Shop page or by emailing us if you need a custom amount for a corporate gift.",
  },
  {
    question: 'Do you ship internationally?',
    answer:
      "Currently, we ship within the United States only (all 50 states, including APO/FPO/DPO military addresses). International shipping is something we're actively working toward — we get asked about it often. If you'd like to be notified when international shipping becomes available, sign up for our newsletter and we'll announce it there first.",
  },
  {
    question: 'What is direct trade, and why does it matter?',
    answer:
      'Direct trade means we source coffee by working directly with the farmers and cooperatives who grow it — cutting out intermediary brokers and commodity exchanges. This lets us pay higher prices (we typically pay 30–60% above Fair Trade minimums), build long-term relationships, and have full transparency into how and where the coffee was grown. It also means better quality: when producers are paid fairly, they have the resources to invest in quality improvements.',
  },
  {
    question: 'Can I visit your roastery?',
    answer:
      'Yes! Our roastery at 12 Copper Ridge Rd in Asheville, NC has a small tasting bar open Thursday–Sunday, 8am–2pm. We offer free cuppings on Saturday mornings at 10am (no reservation needed, just show up). We also do private group tours by appointment — email us to schedule one.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-medium text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-stone-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-stone-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqPage() {
  return (
    <PageTransition>
      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-stone-950 py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs text-amber-500 tracking-widest uppercase mb-3"
            >
              Got Questions?
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-stone-50 mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-stone-400 max-w-xl leading-relaxed"
            >
              Everything you wanted to know about our coffee, subscriptions, and how we operate. Can't find what you're looking for?{' '}
              <a href="mailto:hello@copperlinecoffee.com" className="text-amber-500 hover:text-amber-400 underline">
                Drop us a line.
              </a>
            </motion.p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="py-20 md:py-28 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <SectionHeading eyebrow="FAQ" title="Common Questions" />
            <div className="mt-10">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            <div className="mt-14 bg-amber-50 border border-amber-200 p-8 text-center">
              <p className="font-serif text-xl text-stone-900 mb-2">Still have questions?</p>
              <p className="text-sm text-stone-600 mb-5">We're real people and we actually respond.</p>
              <a
                href="mailto:hello@copperlinecoffee.com"
                className="inline-block bg-amber-700 text-stone-50 px-6 py-3 text-sm font-medium hover:bg-amber-800 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
