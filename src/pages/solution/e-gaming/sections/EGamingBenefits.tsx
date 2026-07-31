import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { 
  UserPlus, 
  BellRing, 
  Gamepad2, 
  ShieldAlert, 
  Wallet, 
  LineChart 
} from 'lucide-react';
import { SectionBadge } from '../../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const benefits = [
  { 
    icon: UserPlus, 
    title: "Faster Player Onboarding", 
    description: "Simplify player registration with instant OTPs and secure, frictionless logins to reduce drop-offs." 
  },
  { 
    icon: BellRing, 
    title: "Real-Time Game Alerts", 
    description: "Send instant notifications for tournaments, rewards, and gameplay updates across multiple communication channels." 
  },
  { 
    icon: Gamepad2, 
    title: "Boost Player Retention", 
    description: "Reconnect inactive players using personalized offers, loyalty rewards, and behavior-based engagement journeys." 
  },
  { 
    icon: ShieldAlert, 
    title: "Fraud & Security Protection", 
    description: "Strengthen platform security with enterprise-grade authentication, fraud alerts, and real-time transaction monitoring." 
  },
  { 
    icon: Wallet, 
    title: "Seamless Wallet Reminders", 
    description: "Keep gameplay uninterrupted with timely wallet notifications, payment reminders, and recharge alerts." 
  },
  { 
    icon: LineChart, 
    title: "Data-Driven Player Insights", 
    description: "Monitor player engagement, campaign performance, and communication trends with real-time analytics dashboards." 
  }
];

export const EGamingBenefits = () => {
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
      // FIXED: Added dark:bg-slate-900 to alternate with Hero
      className="py-12 lg:py-16 bg-[#020617] dark:bg-slate-900 relative overflow-hidden group/section cursor-default"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,186,177,0.08)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(59,186,177,0.05)_0%,transparent_50%)]" />
        {/* FIXED: Dropped grid opacity slightly in dark mode to blend better with slate-900 */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(to_right,#3bbab1_1px,transparent_1px),linear-gradient(to_bottom,#3bbab1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
        
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
        
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          {/* FIXED: Ensure badge matches dark mode */}
          <SectionBadge text="Player Engagement" className="!bg-slate-800/50 dark:!bg-slate-800 !border-slate-700 !text-brand-400 !mb-4 backdrop-blur-md" />
          <SectionHeader 
            align="center" 
            lightMode={true} 
            title="Benefits That Keep Players Connected" 
            titleClassName="!text-3xl md:!text-4xl !font-bold !mb-4"
            subtitle="From onboarding to re-engagement, Squad ensures every interaction is fast, secure, and personalized to drive loyalty and growth." 
            subtitleClassName="!mb-0 !text-base"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }} 
              // FIXED: Added dark:bg-slate-800/50 to pop off the slate-900 background
              className="group relative bg-slate-900/40 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-800 dark:border-slate-700 p-5 lg:p-6 rounded-[2rem] hover:border-brand-500/50 transition-all duration-500 flex flex-col shadow-2xl"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* FIXED: Icon container background adjusted */}
              <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-slate-700 dark:border-slate-600 mb-4 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-500 relative z-10 shadow-md shadow-black/20">
                <b.icon className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 relative z-10">{b.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed relative z-10 text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};