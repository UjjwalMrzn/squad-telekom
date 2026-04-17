import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Overview } from './components/sections/Overview';
import { Products } from './components/sections/Products';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { SuccessStories } from './components/sections/SuccessStories';
import { GlobalImpact } from './components/sections/GlobalImpact';
import { FaqAndNewsletter } from './components/sections/FaqAndNewsletter';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. Header / Navbar */}
      <Navbar />
      
      {/* Adding flex-grow ensures the footer is always pushed to the bottom */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. Company Overview */}
        <Overview />
        
        {/* 4. Products & Services */}
        <Products />
        
        {/* 5. Features / "Why Choose Us" */}
        <WhyChooseUs />
        
        {/* 6. Success Stories */}
        <SuccessStories />
        
        {/* 7. Global Stats / Milestone Banner */}
        <GlobalImpact />

        {/* 8. FAQs & Newsletter */}
        <FaqAndNewsletter />
      </main>

      {/* 9. Global Footer (Sits outside main, inside the layout wrapper) */}
      <Footer />
    </div>
  );
}

export default App;