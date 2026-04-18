import { motion } from 'framer-motion';
import { MapPin, Users, Building2, Calendar, Globe2 } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const stats = [
  { icon: Calendar, label: "Founded", value: "2021" },
  { icon: Building2, label: "Industry", value: "Telecommunications" },
  { icon: Users, label: "Company Size", value: "11-50 employees" },
  { icon: MapPin, label: "Headquarters", value: "Wilmington, Delaware" }
];

export const AboutDetails = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- ADDED SECTION HEADER & BADGE --- */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionBadge text="Corporate Profile" className="!mb-6" />
          <SectionHeader 
            align="left"
            title="Global Infrastructure & Operations."
            subtitle="A focused look at our organizational scale and the strategic locations that power our worldwide wholesale network."
          />
        </div>

        {/* --- STATS GRID: Improved Spacing and Cohesion --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col items-center text-center group transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-50 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{stat.value}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* --- GLOBAL PRESENCE BANNER: Refined Dark UI --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#020617] rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-2xl"
        >
          {/* Subtle Interior Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                <Globe2 className="w-8 h-8 text-brand-400" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Global Presence</h3>
                <p className="text-slate-400 font-medium">Operating seamlessly across continents with dedicated regional hubs.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-12">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-white font-bold tracking-tight">Wilmington, Delaware, US</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-white font-bold tracking-tight">Media City, Sharjah, AE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};