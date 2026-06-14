import { useState } from 'react';
import { Link } from 'react-router-dom'; 
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

const faqs = [
  {
    question: "What industries does Squad serve?",
    answer: "Squad works across multiple verticals including real estate, e-commerce, BFSI, healthcare, logistics, and more — providing customized communication solutions for every industry."
  },
  {
    question: "How reliable are Squad services?",
    answer: "With 900+ operator connections and enterprise-grade infrastructure, Squad ensures 99.9% uptime, <10-second message delivery, and unmatched global scalability."
  },
  {
    question: "Does Squad provide 24/7 customer support?",
    answer: "Yes, our dedicated support team is available round-the-clock to assist you with integration, troubleshooting, and scaling your communication needs."
  },
  {
    question: "Is Squad compliant with global regulations?",
    answer: "Absolutely. Squad is fully compliant with data protection and telecom regulations across multiple countries, ensuring security and peace of mind for your business."
  },
  {
    question: "Can Squad solutions integrate with my existing platforms?",
    answer: "Yes, our API-driven solutions easily integrate with CRMs, ERPs, and third-party platforms to simplify workflows and enhance customer engagement."
  },
  {
    question: "How does Squad ensure message delivery accuracy?",
    answer: "With proprietary testing solutions, live handset checks, and SIM-based validation, Squad guarantees unmatched delivery accuracy for both SMS and voice."
  }
];

export const REFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    // FIXED: Added dark:bg-slate-900
    <section className="pt-16 pb-16 lg:pt-20 lg:pb-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      
      {/* LOCKED GRID: 1600px invisible master line */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col gap-10">
        
        {/* FAQ MAIN CARD */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          // FIXED: Added dark:bg-slate-800 and dark:border-slate-700
          className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 lg:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
        >
          {/* LEFT COLUMN: Header & Actions */}
          <div className="flex-1 lg:max-w-sm flex flex-col items-start">
            
            {/* FIXED: Adjusted dark mode utility classes */}
            <SectionBadge text="Support & Help" className="!bg-slate-50 dark:!bg-slate-800/50 !border-slate-200 dark:!border-slate-700 !mb-6" />

            <SectionHeader 
              title="FAQs"
              // FIXED: Added dark:text-white
              titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 dark:!text-white !mb-6"
              subtitle="Find quick answers to the most common queries about our telecom solutions, platform capabilities, onboarding process, and support services."
              // FIXED: Added dark:text-slate-400
              subtitleClassName="!mb-10 !text-slate-600 dark:!text-slate-400"
            />

            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-full border border-brand-500 text-brand-600 font-bold text-sm tracking-wide hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-brand-500/30"
              >
                {showAll ? "Less Questions" : "More Questions"}
              </button>
              
              {/* FIXED: Added dark:text-slate-400 */}
              <Link to="/contact" className="group text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 transition-colors tracking-wide flex items-center gap-2">
                <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="flex-1 w-full mt-2 lg:mt-0">
            {/* FIXED: Added dark:border-slate-700 */}
            <motion.div layout className="border-t border-slate-200 dark:border-slate-700">
              <AnimatePresence initial={false}>
                {displayedFaqs.map((faq, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <motion.div 
                      key={faq.question} 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      // FIXED: Added dark:border-slate-700
                      className="border-b border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                      >
                        {/* FIXED: Added dark mode text behavior */}
                        <h3 className={`text-lg lg:text-[19px] font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400'}`}>
                          {faq.question}
                        </h3>
                        
                        {/* FIXED: Added dark mode text behavior */}
                        <div className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-400 dark:text-slate-500 group-hover:text-brand-500'}`}>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          >
                            {/* FIXED: Added dark:text-slate-400 */}
                            <p className="pb-6 text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium pr-4 lg:pr-12">
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