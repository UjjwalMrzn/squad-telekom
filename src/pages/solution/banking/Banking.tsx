import { BankingHero } from './sections/BankingHero';
import { BankingBenefits } from './sections/BankingBenefits';
import { BankingDifference } from './sections/BankingDifference';
import { BankingFeatures } from './sections/BankingFeatures';
import { BankingWhySquad } from './sections/BankingWhySquad';
import { BankingFaq } from './sections/BankingFaq';

export const Banking = () => {
  return (
    // FIXED: Added dark:bg-slate-900
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <BankingHero />
      <BankingBenefits />
      <BankingDifference />
      <BankingFeatures />
      <BankingWhySquad />
      <BankingFaq />
    </main>
  );
};