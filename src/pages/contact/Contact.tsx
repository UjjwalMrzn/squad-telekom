import { ContactHero } from './sections/ContactHero';
import { ContactGrid } from './sections/ContactGrid';

export const Contact = () => {
  return (
    <main className="w-full bg-white flex flex-col overflow-hidden">
      <ContactHero />
      <ContactGrid />
    </main>
  );
};