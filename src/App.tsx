import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/ui/PageLoader';

import { Home } from './pages/home/Home';
import { RealEstate } from './pages/real-estate/RealEstate';
import { About } from './pages/about/About';

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
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        
        <AnimatePresence mode="wait">
          {isInitializing && <PageLoader key="loader" />}
        </AnimatePresence>

        {/* Render persistent global layout elements only after init */}
        {!isInitializing && (
          <>
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions/real-estate" element={<RealEstate />} />
              <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;