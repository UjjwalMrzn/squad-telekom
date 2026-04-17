import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Products } from './components/sections/Products';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { SuccessStories } from './components/sections/SuccessStories';
import { GlobalImpact } from './components/sections/GlobalImpact';
import { FaqAndNewsletter } from './components/sections/FaqAndNewsletter';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/ui/PageLoader';

function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  // Simulate initial app load / asset fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 1800); // Gives time for the brand animation to play and heavy assets to load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <AnimatePresence mode="wait">
        {isInitializing && <PageLoader key="loader" />}
      </AnimatePresence>

      {/* Only render the heavy DOM elements once the initialization is complete to avoid jank */}
      {!isInitializing && (
        <>
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <Overview />
            <Products />
            <WhyChooseUs />
            <SuccessStories />
            <GlobalImpact />
            <FaqAndNewsletter />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;