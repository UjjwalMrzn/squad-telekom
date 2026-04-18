import { REHero } from './sections/REHero';
import { REBenefits } from './sections/REBenefits';
import { REDifference } from './sections/REDifference';
import { REFeatures } from './sections/REFeatures';
import { REWhySquad } from './sections/REWhySquad';
import { REFaq } from './sections/REFaq'; // <-- Import the new FAQ section

export const RealEstate = () => {
  return (
    <main className="w-full bg-white flex flex-col overflow-hidden">
      {/* 1. Page Intro */}
      <REHero />

      {/* 2. Dark Mode Value Proposition */}
      <REBenefits />

      {/* 3. Growth & Stats Difference */}
      <REDifference />
      
      {/* 4. Deep-Dive Features */}
      <REFeatures />

      {/* 5. Bento Box "Why Us" */}
      <REWhySquad />

      {/* 6. Frequently Asked Questions */}
      <REFaq /> {/* <-- Mount here */}
      
    </main>
  );
};