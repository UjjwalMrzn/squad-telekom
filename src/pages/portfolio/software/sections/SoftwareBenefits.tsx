import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const checklist = [
  "White-Label Architecture – Fully customizable UI with your brand identity, custom domain, and color palette",
  "High-Throughput Performance – Engineered for low latency and high-concurrency telecom workloads",
  "Seamless SMPP & REST Connectivity – Connect directly with Tier-1 carriers and enterprise CPaaS systems",
  "Automated Rate Sheet Processing – Instantly parse and update complex global carrier rates without manual error",
  "Multi-Tier User Permissions – Fine-grained access control for super-admins, resellers, and enterprise clients",
  "24/7 Dedicated Developer Support – Continuous maintenance, custom feature additions, and strict SLA guarantees"
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export const SoftwareBenefits = () => {
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
                title="Software Built Specifically for Telecom Carriers"
                titleClassName="!text-3xl md:!text-4xl lg:!text-[2.75rem] !font-bold !text-slate-900 dark:!text-white !leading-[1.15] !mb-6"
                subtitle="Eliminate manual operational overhead and automate your carrier operations with tailor-made telecom software platforms."
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                alt="Software Analytics Dashboard"
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