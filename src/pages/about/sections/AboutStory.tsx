import { motion, type Variants } from 'framer-motion';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Building, Send, Sliders } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const AboutStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 relative">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-4xl mb-16 lg:mb-20"
        >
          <SectionBadge text="The Squad Story" className="!mb-8" />
          <SectionHeader 
            align="left"
            title="Revolutionizing Business Interactions."
            titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 dark:!text-white !mb-8"
            subtitle="Founded in 2021, Squad Telekom is a U.S. based telecommunications company operating from India, specializing in high quality, cost effective voice and SMS carrier services. We focus on emerging and underserved markets, with a strong reputation for reliability, transparent partnerships, and consistent financial integrity."
            subtitleClassName="!text-lg !text-slate-600 dark:!text-slate-400 !leading-relaxed !font-medium"
          />
        </motion.div>

        {/* --- MILESTONE CARDS (REPLACED OLD 3-CARD SECTION) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              year: "2021",
              icon: Building, 
              title: "Foundation & Voice/SMS", 
              desc: "Established as a U.S. based telecommunications company operating from India, providing cost effective voice and SMS carrier services for emerging and underserved markets." 
            },
            { 
              year: "2023",
              icon: Send, 
              title: "Global A2P Expansion", 
              desc: "Expanded into global A2P SMS services, supporting high volume OTP and promotional traffic with robust routing infrastructure and guaranteed deliverability." 
            },
            { 
              year: "2025",
              icon: Sliders, 
              title: "ARSS Platform Launch", 
              desc: "Launched Automated Retail SMS Service (ARSS) a flexible, self-managed platform giving businesses complete control over route testing, management, and payments." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-500 flex flex-col relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-brand-500" />
                </div>
                <span className="text-3xl font-extrabold text-brand-500/30 dark:text-brand-400/20 group-hover:text-brand-500 transition-colors duration-300">
                  {item.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};