import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Headset, Zap, ArrowUpRight } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const REWhySquad = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-16 lg:mb-20"
        >
          <SectionBadge text="Global Infrastructure" className="!mb-6" />
          <SectionHeader 
            align="left"
            title="Why Squad"
            titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 !mb-4"
            subtitle="Seamless, scalable, and secure — Squad empowers real estate enterprises with trusted communication solutions that drive growth, efficiency, and stronger customer relationships."
            subtitleClassName="!text-lg lg:!text-xl !text-slate-600 !max-w-3xl"
          />
        </motion.div>

        {/* --- BENTO BOX GRID --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {/* 1. TOP LEFT: Wide Image Card */}
          <motion.div 
            variants={fadeUp}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col sm:flex-row border border-slate-100 shadow-lg shadow-slate-200/40 group"
          >
            <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                alt="Global Connections" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full sm:w-3/5 p-8 lg:p-12 flex items-center justify-center text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                <span className="text-brand-600">900+ operator</span><br/>
                connections across 30+<br/>
                Countries
              </h3>
            </div>
          </motion.div>

          {/* 2. TOP MID: Dark Accent Card */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-[#020617] rounded-[2rem] p-8 flex flex-col justify-between shadow-xl group transition-transform"
          >
            <div>
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Enterprise<br/>Grade Security</h3>
            </div>
            <p className="text-slate-400 font-medium text-sm">Compliant, reliable, and scalable solutions.</p>
          </motion.div>

          {/* 3. TOP RIGHT: Brand Gradient Card */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-gradient-to-br from-brand-500 to-brand-600 rounded-[2rem] p-8 flex flex-col justify-between shadow-xl shadow-brand-500/20 group transition-transform relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            <div>
              <Headset className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">24/7 Dedicated<br/>Support</h3>
            </div>
            <p className="text-brand-100 font-medium text-sm leading-relaxed mt-4">Always-on technical assistance for smooth business communication.</p>
          </motion.div>

          {/* 4. BOTTOM LEFT: Brand Gradient Card */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-gradient-to-br from-brand-500 to-brand-600 rounded-[2rem] p-8 flex flex-col justify-between shadow-xl shadow-brand-500/20 group transition-transform"
          >
            <div>
              <Zap className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Lightning-Fast<br/>Delivery</h3>
            </div>
            <p className="text-brand-100 font-medium text-sm leading-relaxed">Messages delivered securely in under 10 seconds.</p>
          </motion.div>

          {/* 5. BOTTOM MID: Dark Accent Card */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-1 bg-[#020617] rounded-[2rem] p-8 flex flex-col justify-between shadow-xl group transition-transform relative overflow-hidden"
          >
            <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">12,000+</h3>
              <p className="text-emerald-400 font-bold tracking-wide uppercase text-xs mb-6">Brands Trust Us</p>
            </div>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">A proven and reliable communication partner for enterprises worldwide.</p>
          </motion.div>

          {/* 6. BOTTOM RIGHT: Wide Image Card */}
          <motion.div 
            variants={fadeUp}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col sm:flex-row border border-slate-100 shadow-lg shadow-slate-200/40 group"
          >
            <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
                alt="Mobile App Interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full sm:w-3/5 p-8 lg:p-12 flex items-center justify-center text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                Constantly evolving to meet <span className="text-brand-600">tomorrow's communication</span> needs.
              </h3>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};