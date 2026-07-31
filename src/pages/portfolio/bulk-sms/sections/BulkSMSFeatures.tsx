import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  Send,
  Megaphone,
  Plug,
  ShieldCheck,
  MapPinned,
  BarChart3
} from 'lucide-react';
import { SectionBadge } from '../../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../../components/ui/SectionHeader';

const features = [
  { icon: Send, title: "Send Messages with Ease", description: "Upload contacts, write your message, and send SMS in bulk within minutes. Our system is designed to make bulk texting fast, simple, and reliable." },
  { icon: Megaphone, title: "Promotional & Transactional SMS", description: "Run promotional SMS campaigns to increase brand visibility, or send transactional messages such as alerts, confirmations, and updates with guaranteed delivery." },
  { icon: Plug, title: "API Integration", description: "Integrate our Bulk SMS API with your application, CRM, or website — automate OTP delivery, notifications, and system alerts with minimal development effort." },
  { icon: ShieldCheck, title: "OTP & Verification SMS", description: "Deliver time-sensitive OTP messages securely and instantly. Our bulk SMS OTP service ensures high delivery rates and fast response times." },
  { icon: MapPinned, title: "Pan-India Delivery", description: "Support bulk SMS delivery across India with stable routing and optimized networks, making it a dependable bulk SMS service provider." },
  { icon: BarChart3, title: "Rich Analytics", description: "Track delivery, engagement, and campaign success with real-time dashboards." }
];

export const BulkSMSFeatures = () => {
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
      className="py-16 lg:py-20 bg-[#020617] dark:bg-slate-900 relative overflow-hidden group/section cursor-default"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,186,177,0.08)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(59,186,177,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 dark:opacity-5 bg-[linear-gradient(to_right,#3bbab1_1px,transparent_1px),linear-gradient(to_bottom,#3bbab1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

        <motion.div style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }} className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.15)_0%,transparent_70%)] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen" />
        <motion.div style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }} className="absolute w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_rgba(59,186,177,0.8)] opacity-0 group-hover/section:opacity-100" />

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
          <SectionBadge text="Platform Capabilities" className="!bg-slate-800/50 dark:!bg-slate-800 !border-slate-700 !text-brand-400 !mb-4 backdrop-blur-md" />
          <SectionHeader
            align="center"
            lightMode={true}
            title="Simple, Reliable & Scalable Bulk SMS Messaging"
            titleClassName="!text-3xl md:!text-4xl !font-bold !mb-4"
            subtitle="Our bulk SMS service helps businesses communicate clearly without technical complexity. From small campaigns to high-volume messaging, Squad ensures smooth delivery and consistent performance across India."
            subtitleClassName="!mb-0 !text-base"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-slate-900/40 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-800 dark:border-slate-700 p-5 lg:p-6 rounded-[2rem] hover:border-brand-500/50 transition-all duration-500 flex flex-col shadow-2xl"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-xl flex items-center justify-center border border-slate-700 dark:border-slate-600 mb-4 group-hover:bg-brand-500 group-hover:border-brand-400 transition-all duration-500 relative z-10 shadow-md shadow-black/20">
                <f.icon className="w-5 h-5 text-brand-400 group-hover:text-white transition-colors duration-500" />
              </div>

              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 relative z-10">{f.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed relative z-10 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};