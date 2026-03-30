import { PageTransition } from '../components/layout/PageTransition';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CategoryCards } from '../components/home/CategoryCards';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { Newsletter } from '../components/home/Newsletter';

export function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedProducts />
      <CategoryCards />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </PageTransition>
  );
}
