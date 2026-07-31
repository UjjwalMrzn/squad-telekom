import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionBadge } from '../../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

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
    question: "What’s the difference between A2P and P2P?",
    answer: "A2P (Application-to-Person) is regulated, brand-driven messaging sent from a web application or software system to mobile subscribers—such as OTPs, alerts, and transactional updates. P2P (Person-to-Person) is traditional two-way messaging between individual mobile users."
  },
  {
    question: "How long does sender registration and setup take?",
    answer: "Registration times vary by region: Regional channels (e.g., India’s TRAI DLT registration) take 3–7 business days; Global A2P direct routes take ~24–72 hours; OTT channels like WhatsApp Business API take 1–5 days."
  },
  {
    question: "Can Squad integrate with my existing CRM?",
    answer: "Yes, Squad provides developer-friendly APIs, SDKs, and pre-built connectors to integrate seamlessly with Salesforce, HubSpot, Zoho, and custom CRM or ERP platforms."
  },
  {
    question: "What opt-in requirements apply to A2P messaging?",
    answer: "Explicit user consent is required (via web forms, keyword SMS, or app opt-in checkboxes). Opt-out requests must be processed immediately, and Squad strictly enforces GDPR, TCPA, and TRAI regulatory compliance."
  },
  {
    question: "How fast are time-sensitive A2P messages like OTPs delivered?",
    answer: "By utilizing direct tier-1 carrier connections and intelligent dynamic routing, critical transactional messages and OTPs are typically delivered globally in under 2 to 5 seconds."
  },
  {
    question: "Does Squad support automated fallback for failed messages?",
    answer: "Yes. Our platform includes smart fallback logic—if a primary SMS route encounters delivery delays, the message can automatically failover to Voice, WhatsApp, or RCS to guarantee delivery."
  }
];

export const A2PMessagingFaq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="pt-16 pb-16 lg:pt-20 lg:pb-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col gap-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 lg:p-16 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-200 dark:border-slate-700 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
        >
          {/* LEFT COLUMN: Header & Actions */}
          <div className="flex-1 lg:max-w-sm flex flex-col items-start">
            <SectionBadge text="Support & Help" className="!bg-slate-50 dark:!bg-slate-800/50 !border-slate-200 dark:!border-slate-700 !mb-6" />

            <SectionHeader 
              title="FAQs"
              titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 dark:!text-white !mb-6"
              subtitle="Find quick answers to the most common queries about our telecom solutions, platform capabilities, onboarding process, and support services. Whether you're exploring Squad for the first time or already a partner, our FAQs help you navigate with ease."
              subtitleClassName="!mb-10 !text-slate-600 dark:!text-slate-400"
            />

            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-full border border-brand-500 text-brand-600 font-bold text-sm tracking-wide hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-brand-500/30 cursor-pointer"
              >
                {showAll ? "Less Questions" : "More Questions"}
              </button>
              
              <Link to="/contact" className="group text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-brand-600 transition-colors tracking-wide flex items-center gap-2">
                <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="flex-1 w-full mt-2 lg:mt-0">
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
                      className="border-b border-slate-200 dark:border-slate-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between py-6 text-left group focus:outline-none cursor-pointer"
                      >
                        <h3 className={`text-lg lg:text-[19px] font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400'}`}>
                          {faq.question}
                        </h3>
                        
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