import { BulkSMSHero } from './sections/BulkSMSHero';
import { BulkSMSFeatures } from './sections/BulkSMSFeatures';
import { BulkSMSBenefits } from './sections/BulkSMSBenefits';
import { BulkSMSFaq } from './sections/BulkSMSFaq';

export const BulkSMS = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <BulkSMSHero />
      <BulkSMSFeatures />
      <BulkSMSBenefits />
      <BulkSMSFaq />
    </main>
  );
};