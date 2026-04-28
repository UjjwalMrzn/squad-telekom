import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  BellRing, 
  Clock, 
  Gift, 
  ShieldAlert, 
  LineChart, 
  Network 
} from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const benefits = [
  { icon: BellRing, title: "Secure Transactional Alerts", description: "Deliver 24/7 instant SMS and WhatsApp notifications for deposits, withdrawals, and suspicious activities." },
  { icon: Clock, title: "Real-Time Account Updates", description: "Keep customers informed with real-time balance alerts, EMI reminders, and billing cycles." },
  { icon: Gift, title: "Personalized Banking Offers", description: "Drive engagement via targeted promotions for credit cards, loans, and wealth management." },
  { icon: ShieldAlert, title: "Reliable Compliance Notices", description: "Ensure mandatory regulatory and policy updates are delivered securely and reliably." },
  { icon: LineChart, title: "Real-Time Insights", description: "Track delivery rates, open rates, and user engagement with granular analytics dashboards." },
  { icon: Network, title: "Seamless API Integrations", description: "Easily plug into your existing core banking systems (CBS) and CRM tools via robust APIs." }
];

export const BankingBenefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hoverX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const hoverY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 lg:py-32 bg-[#020617] relative overflow-hidden group/section cursor-default"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,186,177,0.08)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(59,186,177,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3bbab1_1px,transparent_1px),linear-gradient(to_bottom,#3bbab1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* --- INTERACTIVE SONAR LAYERS --- */}
        <motion.div style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }} className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.15)_0%,transparent_70%)] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen" />
        
        <motion.div style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }} className="absolute w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_rgba(59,186,177,0.8)] opacity-0 group-hover/section:opacity-100" />

        {/* Expanding Waves */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            animate={{ scale: [0.5, 1.5], opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-brand-500/30 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionBadge text="Financial Communication" className="!bg-slate-800/50 !border-slate-700 !text-brand-400 !mb-8 backdrop-blur-md" />
          <SectionHeader 
            align="center" 
            lightMode={true} 
            title="Benefits That Build Trust & Drive Growth." 
            subtitle="Secure, scalable, and instant—our solutions ensure your financial institution maintains unbroken communication with account holders worldwide." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }} 
              className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 lg:p-10 rounded-[2.5rem] hover:border-brand-500/50 transition-all duration-500 flex flex-col shadow-2xl"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 mb-8 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-500 relative z-10 shadow-lg shadow-black/20">
                <b.icon className="w-7 h-7 text-brand-400 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 relative z-10">{b.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed relative z-10">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};