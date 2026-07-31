import { EsimHero } from './sections/EsimHero';
import { EsimFeatures } from './sections/EsimFeatures';
import { EsimBenefits } from './sections/EsimBenefits';
import { EsimFaq } from './sections/EsimFaq';

export const Esim = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <EsimHero />
      <EsimFeatures />
      <EsimBenefits />
      <EsimFaq />
    </main>
  );
};