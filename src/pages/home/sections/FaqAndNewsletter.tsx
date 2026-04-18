import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
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
    question: "How Squad helps to grow your business?",
    answer: "Squad helps to grow your business by providing a comprehensive telecom solution that meets your business needs."
  },
  {
    question: "What service does Squad provide?",
    answer: "We provide A2P/P2A SMS, RCS, Email, WhatsApp, Telegram, and Viber and help enable businesses to manage digital interactions and streamline customer communication workflow."
  },
  {
    question: "How can I choose the right telecom solution for my business?",
    answer: "Our expert team will guide you through the available options based on your requirements, goals, and budget. You can contact us at connect@squad.net."
  },
  {
    question: "What are the benefits of using Squad's services for my business?",
    answer: "Squad streamlines communication, improves customer engagement, and enhances scalability with 24/7 support and analytics tools."
  }
];

export const FaqAndNewsletter = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-slate-50 relative overflow-hidden">
      
      {/* LOCKED GRID: 1400px invisible master line */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col gap-10">
        
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
            
            {/* DRY: Swapped Hardcoded HTML for SectionBadge */}
            <SectionBadge text="Support & Help" />

            {/* DRY: Swapped Hardcoded HTML for SectionHeader */}
            <SectionHeader 
              title="FAQs"
              subtitle="Find quick answers to the most common queries about our telecom solutions, platform capabilities, onboarding process, and support services."
              subtitleClassName="!mb-10"
            />

            <div className="flex flex-wrap items-center gap-6">
              <button className="px-6 py-3 rounded-full border border-brand-500 text-brand-600 font-semibold text-sm tracking-wide hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-brand-500/30">
                More Questions
              </button>
              
              {/* Clean Text Link */}
              <button className="group text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors tracking-wide flex items-center gap-2">
                <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                  Contact Us
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="flex-1 w-full mt-2 lg:mt-0">
            <div className="border-t border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div 
                    key={index} 
                    className="border-b border-slate-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
                    >
                      <h3 className={`text-lg lg:text-[19px] font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'}`}>
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
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* NEWSLETTER CTA BLOCK */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className="w-full bg-brand-500 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden shadow-xl shadow-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Ambient Glow matching the LMS gradient feel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight relative z-10 text-center md:text-left drop-shadow-sm">
            Subscribe to our newsletter
          </h2>

          <button className="relative z-10 flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm tracking-wide hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-lg group">
            Sign Up Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

        </motion.div>

      </div>
    </section>
  );
};