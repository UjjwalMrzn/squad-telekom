import { SoftwareHero } from './sections/SoftwareHero';
import { SoftwareFeatures } from './sections/SoftwareFeatures';
import { SoftwareBenefits } from './sections/SoftwareBenefits';
import { SoftwareFaq } from './sections/SoftwareFaq';

export const Software = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <SoftwareHero />
      <SoftwareFeatures />
      <SoftwareBenefits />
      <SoftwareFaq />
    </main>
  );
};