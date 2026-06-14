import { Hero } from './sections/Hero';
import { Overview } from './sections/Overview';
import { Products } from './sections/Products';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { SuccessStories } from './sections/SuccessStories';
import { GlobalImpact } from './sections/GlobalImpact';
import { FaqAndNewsletter } from './sections/FaqAndNewsletter';

export const Home = () => {
  return (
    // FIXED: Added dark:bg-slate-900
    <main className="flex-grow bg-white dark:bg-slate-900">
      <Hero />
      <Overview />
      <Products />
      <WhyChooseUs />
      <SuccessStories />
      <GlobalImpact />
      <FaqAndNewsletter />
    </main>
  );
};