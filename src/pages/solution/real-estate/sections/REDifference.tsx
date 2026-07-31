import { motion, type Variants } from 'framer-motion';
import { SectionBadge } from '../../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const stats = [
  {
    value: "40%",
    title: "Fewer lead drop-offs",
    description: "with instant replies delivered across SMS, WhatsApp, RCS & Voice."
  },
  {
    value: "3x",
    title: "Faster deal closures",
    description: "using immersive property showcases (videos, floor plans, brochures)."
  },
  {
    value: "25%",
    title: "Higher buyer engagement",
    description: "with automated reminders for visits, callbacks & follow-ups."
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 } 
  }
};

export const REDifference = () => {
  return (
    // FIXED: Changed dark:bg-slate-900 to dark:bg-[#020617] to alternate with Benefits
    <section className="py-16 lg:py-20 bg-white dark:bg-[#020617] relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
      
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- TOP SPLIT: Image & Narrative --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          
          {/* Left: Premium Image Container */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            {/* FIXED: Added dark:bg-slate-800 */}
            <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 group w-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="Data driven business growth dashboard" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
              />
            </div>
          </motion.div>

          {/* Right: Narrative Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="order-1 lg:order-2 flex flex-col justify-center items-start"
          >
            <SectionBadge text="Business Impact" className="!mb-6" />
            <SectionHeader 
              align="left"
              title="What Makes Squad Different in Driving Business Growth"
              // FIXED: Added dark:text-white
              titleClassName="!text-3xl md:!text-4xl lg:!text-[2.75rem] !font-bold !text-slate-900 dark:!text-white !leading-[1.15] !mb-6"
              subtitle={
                <div className="flex flex-col gap-5">
                  <p>
                    Squad empowers real estate businesses to connect with buyers instantly, share immersive property showcases, and deliver secure updates across SMS, WhatsApp, RCS, and voice.
                  </p>
                  <p>
                    With real-time insights and automated reminders, we help brokers and developers reduce drop-offs, build trust, and close deals faster—all on a scalable, reliable platform.
                  </p>
                </div>
              }
              // FIXED: Added dark:text-slate-400
              subtitleClassName="!text-base lg:!text-lg !text-slate-600 dark:!text-slate-400 !font-medium !leading-relaxed"
            />
          </motion.div>
        </div>

        {/* --- BOTTOM: Stats Grid --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              // FIXED: Ensure cards are dark:bg-slate-900 to pop slightly off the #020617 background
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-slate-800 flex flex-col justify-start transition-transform duration-300"
            >
              {/* FIXED: Added dark:text-white */}
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                {stat.value}
              </h3>
              {/* FIXED: Added dark:text-brand-400 */}
              <h4 className="text-lg lg:text-xl font-bold text-brand-600 dark:text-brand-400 mb-2 leading-tight">
                {stat.title}
              </h4>
              {/* FIXED: Added dark:text-slate-400 */}
              <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};