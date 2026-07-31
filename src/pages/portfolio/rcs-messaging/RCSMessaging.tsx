import { RCSMessagingHero } from './sections/RCSMessagingHero';
import { RCSMessagingFeatures } from './sections/RCSMessagingFeatures';
import { RCSMessagingBenefits } from './sections/RCSMessagingBenefits';
import { RCSMessagingFaq } from './sections/RCSMessagingFaq';

export const RCSMessaging = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <RCSMessagingHero />
      <RCSMessagingFeatures />
      <RCSMessagingBenefits />
      <RCSMessagingFaq />
    </main>
  );
};