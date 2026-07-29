import { PresenceHero } from './sections/PresenceHero';
import { PresenceGrid } from './sections/PresenceGrid';

export const OurPresence = () => {
  return (
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <PresenceHero />
      <PresenceGrid />
    </main>
  );
};