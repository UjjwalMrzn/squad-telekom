import { motion, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const checklist = [
  "OTP & Verification Messages – Ensure ultra-fast 2FA and login security over WhatsApp",
  "Automated Customer Support – Reduce support resolution times with intelligent AI bots",
  "Interactive Shopping Catalogs – Enable seamless product browsing, selection, and checkout",
  "High-Converting Promotional Blasts – Reach opted-in buyers with interactive rich media offers",
  "Multi-Agent Support Dashboard – Empower entire teams to manage customer chats from one inbox",
  "Full Regulatory Compliance – Complete adherence to Meta policies, GDPR, TCPA, and TRAI standards"
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

export const WhatsAppBusinessMessagingBenefits = () => {
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
                title="Features Designed for Modern Business Scale"
                titleClassName="!text-3xl md:!text-4xl lg:!text-[2.75rem] !font-bold !text-slate-900 dark:!text-white !leading-[1.15] !mb-6"
                subtitle="WhatsApp Business Messaging gives your enterprise the power to build personal, interactive relationships at scale while maintaining enterprise-grade security."
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="WhatsApp Business Messaging Team"
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