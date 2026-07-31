import { EGamingHero } from './sections/EGamingHero';
import { EGamingBenefits } from './sections/EGamingBenefits';
import { EGamingDifference } from './sections/EGamingDifference';
import { EGamingFeatures } from './sections/EGamingFeatures';
import { EGamingWhySquad } from './sections/EGamingWhySquad';
import { EGamingFaq } from './sections/EGamingFaq'; 

export const EGaming = () => {
  return (
    // FIXED: Added dark:bg-slate-900
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <EGamingHero />
      <EGamingBenefits />
      <EGamingDifference />
      <EGamingFeatures />
      <EGamingWhySquad />
      <EGamingFaq /> 
    </main>
  );
};