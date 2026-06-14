import { ContactHero } from './sections/ContactHero';
import { ContactGrid } from './sections/ContactGrid';

export const Contact = () => {
  return (
    // FIXED: Added dark:bg-slate-900
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <ContactHero />
      <ContactGrid />
    </main>
  );
};