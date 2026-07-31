import { WhatsAppBusinessMessagingHero } from './sections/WhatsAppBusinessMessagingHero';
import { WhatsAppBusinessMessagingFeatures } from './sections/WhatsAppBusinessMessagingFeatures';
import { WhatsAppBusinessMessagingBenefits } from './sections/WhatsAppBusinessMessagingBenefits';
import { WhatsAppBusinessMessagingFaq } from './sections/WhatsAppBusinessMessagingFaq';

export const WhatsAppBusinessMessaging = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <WhatsAppBusinessMessagingHero />
      <WhatsAppBusinessMessagingFeatures />
      <WhatsAppBusinessMessagingBenefits />
      <WhatsAppBusinessMessagingFaq />
    </main>
  );
};