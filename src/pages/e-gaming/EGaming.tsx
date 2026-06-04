import { EGamingHero } from './sections/EGamingHero';
import { EGamingBenefits } from './sections/EGamingBenefits';
import { EGamingDifference } from './sections/EGamingDifference';
import { EGamingFeatures } from './sections/EGamingFeatures';
import { EGamingWhySquad } from './sections/EGamingWhySquad';
import { EGamingFaq } from './sections/EGamingFaq'; // Add this import

export const EGaming = () => {
  return (
    <main className="w-full bg-white flex flex-col overflow-hidden">
      <EGamingHero />
      <EGamingBenefits />
      <EGamingDifference />
      <EGamingFeatures />
      <EGamingWhySquad />
      <EGamingFaq /> {/* Add this line */}
    </main>
  );
};