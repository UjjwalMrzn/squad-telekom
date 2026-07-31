import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/ui/PageLoader';
import { ScrollToTop } from './components/utils/ScrollToTop'; // <-- 1. Import the utility

import { Home } from './pages/home/Home';
import { RealEstate } from './pages/solution/real-estate/RealEstate';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Banking } from './pages/solution/banking/Banking';
import { EGaming } from './pages/solution/e-gaming/EGaming';
import { OurPresence } from './pages/our-presence/OurPresence';
import { BulkSMS } from './pages/portfolio/bulk-sms/BulkSMS';
import { A2PMessaging } from './pages/portfolio/a2p-messaging/A2PMessaging';
import { RCSMessaging } from './pages/portfolio/rcs-messaging/RCSMessaging';
import { WhatsAppBusinessMessaging } from './pages/portfolio/whatsapp-business-messaging/WhatsAppBusinessMessaging';
import { Telegram } from './pages/portfolio/telegram/Telegram';
import { Esim } from './pages/portfolio/esim/Esim';
import { VoiceOTP } from './pages/portfolio/voice-otp/VoiceOTP';
import { Software } from './pages/portfolio/software/Software';

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
    <ThemeProvider>
    <Router>
      {/* 2. Mount it right inside the Router. It renders nothing, just handles scrolling. */}
      <ScrollToTop /> 
      
      <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col">
        
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions/banking" element={<Banking />} />
              <Route path="/solutions/e-gaming" element={<EGaming />} />
              <Route path="/our-presence" element={<OurPresence />} />
              <Route path="/portfolio/bulk-sms" element={<BulkSMS />} />
              <Route path="/portfolio/a2p-messaging" element={<A2PMessaging />} />
              <Route path="/portfolio/rcs-messaging" element={<RCSMessaging />} />
              <Route path="/portfolio/whatsapp-business-messaging" element={<WhatsAppBusinessMessaging />} />
              <Route path="/portfolio/telegram" element={<Telegram />} />
              <Route path="/portfolio/esim" element={<Esim />} />
              <Route path="/portfolio/voice-otp" element={<VoiceOTP />} />
              <Route path="/portfolio/software" element={<Software />} />
            </Routes>

            <Footer />
          </>
        )}
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;