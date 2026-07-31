import { TelegramHero } from './sections/TelegramHero';
import { TelegramFeatures } from './sections/TelegramFeatures';
import { TelegramBenefits } from './sections/TelegramBenefits';
import { TelegramFaq } from './sections/TelegramFaq';

export const Telegram = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <TelegramHero />
      <TelegramFeatures />
      <TelegramBenefits />
      <TelegramFaq />
    </main>
  );
};