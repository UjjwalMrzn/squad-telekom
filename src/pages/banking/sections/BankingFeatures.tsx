import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const features = [
  {
    title: "Multi-Factor Authentication",
    points: [
      "Ultra-fast OTP delivery via SMS & Voice.",
      "Fallback routing to ensure 100% delivery.",
      "Secure integrations with Identity Providers."
    ]
  },
  {
    title: "Fraud Prevention",
    points: [
      "Automated suspicious activity alerts.",
      "Two-way SMS for transaction verification.",
      "Location-based compliance messaging."
    ]
  },
  {
    title: "Rich Media Statements",
    points: [
      "Deliver encrypted bank statements via WhatsApp.",
      "Share loan brochures and policy documents.",
      "Interactive menus for quick balance checks."
    ]
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const BankingFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const hoverX = useSpring(mouseX, springConfig);
  const hoverY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section ref={containerRef} onMouseMove={handleMouseMove} className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden group/section cursor-default">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,186,177,0.08)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(59,186,177,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3bbab1_1px,transparent_1px),linear-gradient(to_bottom,#3bbab1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* Interactive Sonar Layer */}
        <motion.div style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }} className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.15)_0%,transparent_70%)] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen" />
        
        {/* Pulsing Dot */}
        <motion.div style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }} className="absolute w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_rgba(59,186,177,0.8)] opacity-0 group-hover/section:opacity-100" />

        {/* FIXED: Added missing Expanding Waves */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            animate={{ scale: [0.5, 1.5], opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-brand-500/30 rounded-full opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
          />
        ))}
      </div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <SectionBadge text="Platform Capabilities" className="!bg-slate-800/50 !border-slate-700 !text-brand-400 !mb-8 backdrop-blur-md" />
          <SectionHeader 
            align="center"
            lightMode={true} 
            title="Advanced Security. Rich Engagement."
            titleClassName="!text-4xl md:!text-5xl !font-bold !mb-6"
            subtitle="Move beyond standard SMS. Use conversational AI and rich media to transform how your clients bank with you securely."
            subtitleClassName="!text-lg lg:!text-xl"
          />
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              whileHover={{ y: -8 }} 
              className="group relative bg-[#0B1120] rounded-[2rem] p-8 lg:p-10 shadow-2xl overflow-hidden transition-all duration-500 flex flex-col border border-slate-800 hover:border-brand-500/30 hover:shadow-brand-500/10"
            >
              {/* Top Gradient Border Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 via-brand-400 to-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 relative z-10 mt-2">{feature.title}</h3>
              
              <ul className="space-y-5 relative z-10 flex-grow">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mr-4 mt-0.5" />
                    <span className="text-slate-400 font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};