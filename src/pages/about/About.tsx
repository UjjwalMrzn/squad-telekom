import { AboutHero } from './sections/AboutHero';
import { AboutStory } from './sections/AboutStory';
import { AboutDetails } from './sections/AboutDetails';

export const About = () => {
  return (
    <main className="w-full bg-white flex flex-col overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutDetails />
    </main>
  );
};