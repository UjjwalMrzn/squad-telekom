import { BankingHero } from './sections/BankingHero';
import { BankingBenefits } from './sections/BankingBenefits';
import { BankingDifference } from './sections/BankingDifference';
import { BankingFeatures } from './sections/BankingFeatures';
import { BankingWhySquad } from './sections/BankingWhySquad';
import { BankingFaq } from './sections/BankingFaq';

export const Banking = () => {
  return (
    <main className="w-full bg-white flex flex-col overflow-hidden">
      <BankingHero />
      <BankingBenefits />
      <BankingDifference />
      <BankingFeatures />
      <BankingWhySquad />
      <BankingFaq />
    </main>
  );
};