import { motion, type Variants } from 'framer-motion';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const stats = [
  {
    value: "99.99%",
    title: "Platform Uptime",
    description: "ensuring mission-critical alerts never fail during high-volume trading hours."
  },
  {
    value: "< 2s",
    title: "Delivery Latency",
    description: "for crucial OTPs and fraud verification checks globally."
  },
  {
    value: "256-bit",
    title: "End-to-End Encryption",
    description: "maintaining strict compliance with international banking regulations."
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 }, // Matched to EGaming (25)
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } // Matched duration
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12 } // Matched to EGaming (0.12)
  }
};

export const BankingDifference = () => {
  return (
    // FIXED: Matched exact section padding from EGaming (py-16 lg:py-20)
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden border-b border-slate-100">
      
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- TOP SPLIT: Image & Narrative --- */}
        {/* FIXED: Matched exact bottom margin and gap from EGaming */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">
          
          {/* Left: Premium Image Container */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp} 
            className="order-2 lg:order-1"
          >
            {/* FIXED: Matched exact image aspect ratio from EGaming */}
            <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden bg-slate-200 group w-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                alt="Data driven banking dashboard" 
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
              title="What Makes Squad Different in BFSI Growth"
              // FIXED: Matched exact title sizing from EGaming
              titleClassName="!text-3xl md:!text-4xl lg:!text-[2.75rem] !font-bold !text-slate-900 !leading-[1.15] !mb-6"
              subtitle={
                <div className="flex flex-col gap-5"> {/* Matched gap from EGaming */}
                  <p>Banks and financial institutions require absolute reliability. A delayed OTP can cost a transaction, and an unencrypted message can breach trust.</p>
                  <p>Squad provides a direct, highly-secure pipeline to your customers. With intelligent routing and failover mechanics, we guarantee that your time-sensitive financial communications are delivered instantly and securely.</p>
                </div>
              }
              // FIXED: Matched exact subtitle sizing from EGaming
              subtitleClassName="!text-base lg:!text-lg !text-slate-600 !font-medium !leading-relaxed"
            />
          </motion.div>
        </div>

        {/* --- BOTTOM: Feature Cards Grid --- */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          // FIXED: Matched exact grid gaps from EGaming
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              whileHover={{ y: -6 }} // Matched EGaming hover height
              // FIXED: Matched exact padding and shadow from EGaming
              className="bg-white rounded-[2rem] p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-start transition-transform duration-300"
            >
              {/* Keeping the large numbers for Banking, but scaling them slightly to fit the new padding */}
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">{stat.value}</h3>
              <h4 className="text-lg lg:text-xl font-bold text-brand-600 mb-2 leading-tight">{stat.title}</h4>
              <p className="text-sm lg:text-base text-slate-500 font-medium leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};