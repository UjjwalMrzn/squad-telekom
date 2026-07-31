import { A2PMessagingHero } from './sections/A2PMessagingHero';
import { A2PMessagingFeatures } from './sections/A2PMessagingFeatures';
import { A2PMessagingBenefits } from './sections/A2PMessagingBenefits';
import { A2PMessagingFaq } from './sections/A2PMessagingFaq';

export const A2PMessaging = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <A2PMessagingHero />
      <A2PMessagingFeatures />
      <A2PMessagingBenefits />
      <A2PMessagingFaq />
    </main>
  );
};