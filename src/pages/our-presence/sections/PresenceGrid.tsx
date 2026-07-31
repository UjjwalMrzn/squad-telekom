import { motion } from 'framer-motion';
import { Globe2, MapPin } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const offices = [
  {
    country: "United States",
    type: "Global Headquarters",
    desc: "Our HQ oversees corporate strategy, carrier relations, and finance for the Americas, anchoring Squad Telekom's global wholesale operations."
  },
  {
    country: "United Arab Emirates",
    type: "Middle East Regional Hub",
    desc: "Our UAE hub drives partnerships across the MEA region, supporting voice and SMS routes for carriers throughout the Gulf and North Africa."
  },
  {
    country: "Singapore",
    type: "APAC Regional Hub",
    desc: "Our Singapore hub extends coverage across Asia-Pacific, managing regional carrier relationships and localized support for our fastest-growing markets."
  }
];

export const PresenceGrid = () => {
  return (
    <>
      {/* --- OFFICE CARDS SECTION --- */}
      <section className="py-24 lg:py-32 bg-white dark:bg-slate-900 relative">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="max-w-4xl mb-20">
            <SectionBadge text="Our Offices" className="!mb-8" />
            <SectionHeader
              align="left"
              title="Three Countries, One Network."
              titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 dark:!text-white !mb-8"
              subtitle="Each office plays a distinct role in keeping our global wholesale voice, SMS, and software offerings running around the clock."
              subtitleClassName="!text-lg !text-slate-600 dark:!text-slate-400 !leading-relaxed !font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center mb-8">
                    <MapPin className="w-7 h-7 text-brand-500" />
                  </div>

                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest block mb-3">
                    {office.type}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{office.country}</h3>

                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {office.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GLOBAL PRESENCE BANNER --- */}
      <section className="pb-24 lg:pb-32 bg-white dark:bg-slate-900">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#020617] rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-2xl border border-transparent dark:border-slate-800/50"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
                  <Globe2 className="w-8 h-8 text-brand-400" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Expanding Every Year</h3>
                  <p className="text-slate-400 font-medium">New regional offices are on the roadmap as our carrier network grows.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 lg:gap-12">
                {offices.map((office) => (
                  <div key={office.country} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-white font-bold tracking-tight">{office.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};