import { useState } from 'react';
import { Link } from 'react-router-dom'; // FIXED: Added Link for routing
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

// Reordered and adapted to Squad Telekom branding, with extra questions added
const faqs = [
  {
    question: "Is Squad compliant with banking regulations?",
    answer: "Yes, Squad is fully compliant with GDPR, PCI-DSS, and other global financial standards to ensure your data is always protected."
  },
  {
    question: "How can Squad help banks and fintechs?",
    answer: "Squad provides secure communication for OTPs, fraud alerts, loan updates, and promotional offers across SMS, WhatsApp, voice, and email."
  },
  {
    question: "Does Squad offer fraud prevention tools?",
    answer: "Yes, with real-time testing, whitelisting, and secure routing validations, Squad ensures accurate and highly secure message delivery."
  },
  {
    question: "Can Squad scale for large banks and global operations?",
    answer: "Absolutely. With our carrier-grade infrastructure and 900+ global operator connections, Squad seamlessly supports BFSI operations of any size."
  },
  // FIXED: Added the extra question for the "More Questions" expansion
  {
    question: "How quickly can Squad be integrated with banking platforms?",
    answer: "Our API-driven solutions integrate seamlessly with CRMs, core banking systems, and payment platforms within days."
  }
];

export const BankingFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false); // FIXED: Added state for toggling questions

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FIXED: Determine which FAQs to show based on state
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="pt-24 pb-24 lg:pt-32 lg:pb-32 bg-slate-50 relative overflow-hidden">
      
      {/* LOCKED GRID: 1600px invisible master line */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col gap-10">
        
        {/* FAQ MAIN CARD */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className="bg-white rounded-[2rem] p-8 lg:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
        >
          {/* LEFT COLUMN: Header & Actions */}
          <div className="flex-1 lg:max-w-sm flex flex-col items-start">
            
            <SectionBadge text="Support & Help" className="!bg-slate-50 !border-slate-200 !mb-6" />

            <SectionHeader 
              title="FAQs"
              titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 !mb-6"
              subtitle="Find quick answers to the most common queries about our secure banking telecom solutions, compliance standards, and global scalability."
              subtitleClassName="!mb-10 !text-slate-600"
            />

            <div className="flex flex-wrap items-center gap-6">
              {/* FIXED: Toggle button functionality and dynamic text */}
              <button 
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-full border border-brand-500 text-brand-600 font-bold text-sm tracking-wide hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-brand-500/30"
              >
                {showAll ? "Less Questions" : "More Questions"}
              </button>
              
              {/* FIXED: Replaced button with Link for routing */}
              <Link to="/contact" className="group text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors tracking-wide flex items-center gap-2">
                <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="flex-1 w-full mt-2 lg:mt-0">
            <motion.div layout className="border-t border-slate-200">
              <AnimatePresence initial={false}>
                {displayedFaqs.map((faq, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <motion.div 
                      key={faq.question} // Use question as key for stable animations
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                      >
                        <h3 className={`text-lg lg:text-[19px] font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'}`}>
                          {faq.question}
                        </h3>
                        
                        <div className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-400 group-hover:text-brand-500'}`}>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                          </motion.div>
                        </div>
                      </button>

                      {/* Smooth height animation for content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="pb-6 text-base text-slate-500 leading-relaxed font-medium pr-4 lg:pr-12">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};