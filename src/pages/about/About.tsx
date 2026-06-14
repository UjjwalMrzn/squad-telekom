import { AboutHero } from './sections/AboutHero';
import { AboutStory } from './sections/AboutStory';
import { AboutDetails } from './sections/AboutDetails';

export const About = () => {
  return (
    // FIXED: Added dark:bg-slate-900
    <main className="w-full bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutDetails />
    </main>
  );
};