import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const checklist = [
  "Instant Over-The-Air (OTA) Activation – Deploy mobile profiles remotely in seconds via QR codes or API",
  "Coverage in 190+ Countries – Direct agreements with tier-1 global operator networks for local pricing",
  "Flexible Multi-IMSI Profiles – Automatic network switching to maintain optimal signal and low latency",
  "Centralized Management Portal – Unified dashboard to assign, restrict, and monitor global data usage",
  "Zero Physical SIM Logistics – Eliminate plastic cards, shipping costs, hardware inventory, and manual swaps",
  "Bank-Grade GSMA Compliance – Strict encryption standards protecting enterprise communications and credentials"
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export const EsimBenefits = () => {
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-[#020617] relative overflow-hidden border-b border-slate-100 dark:border-slate-800">

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Narrative & Checklist */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center items-start"
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                align="left"
                title="Next-Gen Connectivity That Accelerates Growth"
                titleClassName="!text-3xl md:!text-4xl lg:!text-[2.75rem] !font-bold !text-slate-900 dark:!text-white !leading-[1.15] !mb-6"
                subtitle="Eliminate roaming surprises, streamline mobile logistics, and keep team members and connected devices seamlessly online across the globe."
                subtitleClassName="!text-base lg:!text-lg !text-slate-600 dark:!text-slate-400 !font-medium !leading-relaxed !mb-8"
              />
            </motion.div>

            <ul className="space-y-4 w-full">
              {checklist.map((item, index) => (
                <motion.li key={index} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Premium Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 group w-full">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1200&auto=format&fit=crop"
                alt="Global E-SIM Device Management"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};