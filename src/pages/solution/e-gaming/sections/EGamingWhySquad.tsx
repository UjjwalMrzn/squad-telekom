import { motion, type Variants } from 'framer-motion';
// FIXED: Removed the unused ShieldCheck, Headset, and Zap imports
import { ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '../../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const EGamingWhySquad = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 dark:bg-[#020617] relative overflow-hidden border-b border-slate-200 dark:border-slate-800">

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <SectionBadge text="The Squad Advantage" className="!bg-white dark:!bg-slate-800 !border-brand-100 dark:!border-slate-700 !mb-4" />
          <SectionHeader 
            align="left"
            title="Why Gaming Platforms Choose Squad"
            titleClassName="!text-3xl md:!text-4xl lg:!text-5xl !font-bold !text-slate-900 dark:!text-white !leading-[1.15] !mb-4"
            subtitle="Squad delivers scalable communication infrastructure designed for modern e-gaming businesses focused on engagement, performance, and security."
            subtitleClassName="!text-base lg:!text-lg !text-slate-600 dark:!text-slate-400 !font-medium"
          />
        </div>

        {/* Bento Box Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[280px]"
        >
          
          {/* Row 1, Item 1: Wide Image Card */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-slate-800 rounded-[2rem] p-4 lg:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center gap-6 lg:gap-10 transition-transform duration-300 group"
          >
            <div className="w-32 sm:w-40 h-full rounded-[1.5rem] overflow-hidden shrink-0 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                alt="Global Reach" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white text-center flex-1 pr-4 lg:pr-8 leading-snug">
              <span className="text-brand-600 dark:text-brand-400">900+ operator</span><br className="hidden sm:block" />
              connections across 30+ <br className="hidden sm:block" />
              Countries
            </h3>
          </motion.div>

          {/* Row 1, Item 2: Gradient Square */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-gradient-to-br from-brand-400 to-brand-600 rounded-[2rem] p-8 shadow-lg shadow-brand-500/20 relative overflow-hidden transition-transform duration-300 flex flex-col group border border-transparent dark:border-slate-800/50"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 relative z-10 leading-tight">Enterprise Grade Security</h3>
            <div className="flex-grow" />
            <ArrowUpRight className="w-6 h-6 text-brand-100 mb-4 opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <p className="text-sm font-medium text-white/90 relative z-10 leading-relaxed">
              Compliant, reliable, and scalable solutions.
            </p>
          </motion.div>

          {/* Row 1, Item 3: Gradient Square */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-gradient-to-br from-emerald-400 to-brand-500 rounded-[2rem] p-8 shadow-lg shadow-brand-500/20 relative overflow-hidden transition-transform duration-300 flex flex-col group border border-transparent dark:border-slate-800/50"
          >
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1 relative z-10 tracking-tighter">24/7 <span className="text-base font-semibold tracking-normal block mt-1 opacity-90">Dedicated Support</span></h3>
            <div className="flex-grow" />
            <ArrowUpRight className="w-6 h-6 text-brand-100 mb-4 opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <p className="text-sm font-medium text-white/90 relative z-10 leading-relaxed">
              Always-on technical assistance for smooth and uninterrupted business communication.
            </p>
          </motion.div>

          {/* Row 2, Item 1: Gradient Square */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-gradient-to-br from-brand-500 to-emerald-500 rounded-[2rem] p-8 shadow-lg shadow-brand-500/20 relative overflow-hidden transition-transform duration-300 flex flex-col group border border-transparent dark:border-slate-800/50"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 relative z-10 leading-tight">Lightning-Fast Delivery</h3>
            <div className="flex-grow" />
            <ArrowUpRight className="w-6 h-6 text-brand-100 mb-4 opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <p className="text-sm font-medium text-white/90 relative z-10 leading-relaxed">
              Messages delivered in under 10 seconds.
            </p>
          </motion.div>

          {/* Row 2, Item 2: Gradient Square */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-[#020617] dark:bg-slate-900 rounded-[2rem] p-8 shadow-xl relative overflow-hidden transition-transform duration-300 flex flex-col group border border-transparent dark:border-slate-800"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1 relative z-10 tracking-tighter">12,000+ <span className="text-sm font-semibold tracking-normal block mt-1 opacity-90 uppercase text-emerald-400">Brands Trust Us</span></h3>
            <div className="flex-grow" />
            <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-white mb-4 opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <p className="text-sm font-medium text-slate-400 relative z-10 leading-relaxed">
              A proven and reliable communication partner for enterprises worldwide.
            </p>
          </motion.div>

          {/* Row 2, Item 3: Wide Image Card */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 md:col-span-2 bg-white dark:bg-slate-800 rounded-[2rem] p-4 lg:p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-slate-700 flex items-center gap-6 lg:gap-10 transition-transform duration-300 group"
          >
            <div className="w-32 sm:w-40 h-full rounded-[1.5rem] overflow-hidden shrink-0 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop" 
                alt="Evolving Communication" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white text-center flex-1 pr-4 lg:pr-8 leading-snug">
              Constantly evolving to meet <span className="text-brand-600 dark:text-brand-400">tomorrow's communication</span> needs.
            </h3>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};