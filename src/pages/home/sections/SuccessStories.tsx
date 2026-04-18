import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const stories = [
  {
    readTime: "5 min read",
    title: "How Squad Helped Us Streamline Our Messaging & Drive Real Results",
    excerpt: "Before we partnered with Squad, we were constantly juggling between multi...",
  },
  {
    readTime: "5 min read",
    title: "Squad Has Truly Made a Difference in How We Send Messages",
    excerpt: "When we started using messaging services for our business, we were mostly focused on just getting the...",
  },
  {
    readTime: "5 min read",
    title: "Messaging Used to Be Stressful Then Squad Happened",
    excerpt: "As someone managing operations in a growing business, messaging wasn't something I wanted to thin...",
  }
];

export const SuccessStories = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* LOCKED GRID: 1400px invisible master line */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* SPLIT HEADER SECTION - FIXED ALIGNMENT */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 justify-between items-start lg:items-end mb-16 md:mb-24">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="flex-1 lg:max-w-3xl"
          >
            {/* DRY: Swapped Hardcoded HTML for SectionBadge */}
            <SectionBadge text="Success Stories" className="!mb-8" />
            
            {/* DRY: Swapped Hardcoded HTML for SectionHeader. Used CSS overrides to perfectly match your extrabold locked UI */}
            <SectionHeader 
              title={<>Trusted globally. <span className="text-brand-500">Smarter connections.</span> Confident, scalable growth.</>}
              titleClassName="!text-4xl md:!text-5xl lg:!text-6xl !font-bold !leading-[1.1] !mb-0"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="flex-1 lg:max-w-lg flex flex-col items-start lg:pb-2"
          >
            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
              Our platform has empowered enterprises across industries to boost customer engagement, reduce delivery delays, and scale messaging with confidence. Here's how some of our clients transformed their communication with Squad.
            </p>
            
            <div className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-500 text-white font-bold text-sm tracking-wide hover:bg-brand-600 transition-colors duration-300 cursor-pointer shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50">
              Read More
            </div>
          </motion.div>

        </div>

        {/* STORY CARDS GRID */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr"
        >
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden group cursor-pointer border border-slate-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(59,186,177,0.15)] hover:border-brand-300 transition-all duration-500 flex flex-col h-full min-h-[360px]"
            >
              
              {/* THEME ACCENT: Brand-tinted quote mark */}
              <div className="absolute -top-6 right-4 text-[140px] font-serif leading-none text-brand-50/60 group-hover:text-brand-100 transition-colors duration-500 pointer-events-none select-none z-0">
                &ldquo;
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Card Header: Dot and Read Time */}
                <div className="flex items-center justify-between mb-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(59,186,177,0.6)]" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-white/80 px-2 py-1 rounded backdrop-blur-sm">
                    {story.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors duration-300 leading-[1.35] tracking-tight mb-8">
                  {story.title}
                </h3>

                {/* Spacer to guarantee the bottom row is perfectly anchored */}
                <div className="flex-grow" />

                {/* Excerpt and Arrow Row */}
                <div className="flex items-end justify-between gap-6 mt-4">
                  <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] line-clamp-2">
                    {story.excerpt}
                  </p>
                  
                  {/* THEME ACCENT: Button looks interactive before hover with soft brand background */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-500/30">
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};