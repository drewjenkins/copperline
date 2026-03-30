import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';

const sections = [
  {
    title: 'Information We Collect',
    body: `When you place an order, create an account, or sign up for our newsletter, we collect information you provide directly: your name, email address, shipping address, and payment information. Payment data is processed by Stripe and we never store your full card number on our servers.

We also collect limited usage data through analytics tools (such as page views and session duration) to understand how our site is used and improve the experience. This data is aggregated and not linked to individual identities.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use your information to process and fulfill your orders, send order confirmations and shipping notifications, respond to your questions and support requests, and — if you've opted in — send you occasional emails about new coffees, promotions, and brewing content.

We do not sell, rent, or trade your personal information to third parties. Ever.`,
  },
  {
    title: 'Cookies',
    body: `Our site uses cookies to maintain your shopping cart session and remember your preferences. We use a minimal analytics cookie (via privacy-respecting tooling) to understand aggregate traffic patterns. You can disable cookies in your browser settings, though some site functionality (like the cart) depends on them.`,
  },
  {
    title: 'Email Communications',
    body: `If you subscribe to our newsletter or create an account, we may send you transactional emails (order confirmations, shipping updates) and marketing emails (new releases, promotions). You can unsubscribe from marketing emails at any time via the link in any email, or by emailing us directly. Transactional emails cannot be opted out of as they're necessary to fulfill your orders.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your order history and account information as long as your account is active, or as needed to provide services and comply with legal obligations. If you'd like to delete your account and associated data, email us at hello@copperlinecoffee.com and we'll process the request within 30 days.`,
  },
  {
    title: 'Security',
    body: `We use industry-standard security practices including SSL/TLS encryption for all data transmitted between your browser and our site, and we use Stripe for payment processing — one of the most secure payment processors available. We conduct periodic security reviews and keep our dependencies up to date.`,
  },
  {
    title: 'Your Rights',
    body: `You have the right to access, correct, or delete the personal information we hold about you. Depending on your location, you may also have rights under GDPR, CCPA, or similar frameworks. To exercise any of these rights, email us at hello@copperlinecoffee.com. We'll respond within 30 days.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this privacy policy from time to time. When we do, we'll update the effective date at the bottom of this page and, for material changes, notify you by email. Your continued use of our site after a policy change constitutes acceptance of the updated terms.`,
  },
];

export function PrivacyPage() {
  return (
    <PageTransition>
      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-stone-950 py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xs text-amber-500 tracking-widest uppercase mb-3"
            >
              Legal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-stone-50"
            >
              Privacy Policy
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-sm text-stone-500 mb-12">
              Effective date: January 1, 2024 · Copperline Coffee Roasters, LLC · 12 Copper Ridge Rd, Asheville, NC 28801
            </p>
            <p className="text-stone-600 leading-relaxed mb-12">
              We take your privacy seriously. This policy explains what information we collect, how we use it, and what choices you have. We've written it in plain language because legalese doesn't serve anyone.
            </p>
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="border-t border-stone-200 pt-8">
                  <h2 className="font-serif text-xl text-stone-900 mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.body.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm text-stone-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-stone-200 text-sm text-stone-500">
              <p>
                Questions about this policy? Contact us at{' '}
                <a href="mailto:hello@copperlinecoffee.com" className="text-amber-700 hover:underline">
                  hello@copperlinecoffee.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
