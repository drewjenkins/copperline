import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the Copperline Coffee Roasters website and placing orders through it, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our site.

These terms apply to all visitors, customers, and users of the site. We reserve the right to update these terms at any time; continued use of the site after changes constitutes acceptance.`,
  },
  {
    title: 'Products and Pricing',
    body: `All prices are listed in US dollars and are subject to change without notice. We make every effort to display accurate product information and pricing, but we reserve the right to correct errors and cancel orders made at an incorrect price.

Coffee is a natural agricultural product and flavor profiles can vary slightly between harvest lots. We describe our coffees as accurately as we can, but minor variation between lots is expected and is not grounds for return.`,
  },
  {
    title: 'Orders and Payment',
    body: `By placing an order, you represent that you are at least 18 years of age and that the payment information you provide is accurate. We reserve the right to refuse or cancel orders at our discretion, including in cases of suspected fraud, pricing errors, or product availability issues.

Payment is collected at the time of order. We accept major credit cards and process all payments through Stripe. We do not store your full payment card number.`,
  },
  {
    title: 'Subscriptions',
    body: `Subscription orders are billed on a recurring basis at the frequency you select (weekly, bi-weekly, or monthly). By subscribing, you authorize us to charge your payment method on each billing date. You can pause, modify, or cancel your subscription at any time by logging into your account or contacting us, provided we receive notice at least 48 hours before the next scheduled roast date.

Subscription prices are locked at the rate active when you subscribe. If we change subscription pricing, we'll notify active subscribers with at least 30 days' notice before any change takes effect.`,
  },
  {
    title: 'Shipping and Delivery',
    body: `We ship to addresses within the United States. Estimated delivery times are based on carrier projections and are not guaranteed. We are not responsible for delays caused by carriers, weather events, or circumstances beyond our control.

Risk of loss and title for products passes to you upon our delivery to the carrier. If your order arrives damaged, contact us within 72 hours and we'll arrange a replacement or refund.`,
  },
  {
    title: 'Returns and Refunds',
    body: `Our returns policy is described in detail on our Shipping & Returns page. In general: we stand behind the quality of what we roast. If you're not satisfied, contact us and we'll make it right. Refunds are processed to the original payment method and may take 5–7 business days to appear.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this site — including text, images, brand assets, product photography, and copy — is the property of Copperline Coffee Roasters, LLC and protected by applicable intellectual property laws. You may not reproduce, distribute, or use our content without written permission.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by law, Copperline Coffee Roasters shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our site or products. Our total liability for any claim shall not exceed the amount paid for the order giving rise to the claim.`,
  },
  {
    title: 'Governing Law',
    body: `These terms are governed by the laws of the State of North Carolina, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our site shall be resolved in the state or federal courts located in Buncombe County, North Carolina.`,
  },
  {
    title: 'Contact',
    body: `Questions about these terms can be directed to hello@copperlinecoffee.com or by mail to Copperline Coffee Roasters, LLC, 12 Copper Ridge Rd, Asheville, NC 28801.`,
  },
];

export function TermsPage() {
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
              Terms of Service
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
              These Terms of Service govern your use of the Copperline Coffee Roasters website and your purchases from us. We've written them to be clear and readable — please take a moment to review them.
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
                Questions about these terms? Contact us at{' '}
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
