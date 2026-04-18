import { Hero } from './sections/Hero';
import { Overview } from './sections/Overview';
import { Products } from './sections/Products';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { SuccessStories } from './sections/SuccessStories';
import { GlobalImpact } from './sections/GlobalImpact';
import { FaqAndNewsletter } from './sections/FaqAndNewsletter';

export const Home = () => {
  return (
    <main className="flex-grow">
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