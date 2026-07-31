import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../../components/ui/Button';
import { SectionBadge } from '../../../../components/ui/SectionBadge';

export const RCSMessagingHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Tracking Logic for Sonar / Radar Effect
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
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full flex flex-col items-center justify-center min-h-screen pt-32 pb-24 lg:pt-48 lg:pb-48 bg-white dark:bg-[#020617] overflow-hidden border-b border-slate-100 dark:border-slate-800 group/section cursor-default"
    >
      {/* --- BACKGROUND GRADIENT & RADAR EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
          }} 
        />
        
        <motion.div 
          animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] h-[60vh] bg-brand-500/10 rounded-full blur-[100px]" 
        />

        {/* --- INTERACTIVE SONAR / RADAR LAYERS --- */}
        <motion.div 
          style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
          className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.15)_0%,transparent_70%)] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen z-0 pointer-events-none" 
        />
        <motion.div 
          style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
          className="absolute w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_rgba(59,186,177,0.8)] opacity-0 group-hover/section:opacity-100 z-0 pointer-events-none" 
        />
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            animate={{ scale: [0.5, 1.5], opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "linear" }}
            className="absolute w-[400px] h-[400px] border border-brand-500/30 rounded-full z-0 pointer-events-none"
          />
        ))}
      </div>

      {/* LEFT IMAGE (Signature Arch) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="absolute left-0 top-24 lg:top-36 hidden lg:block w-[260px] xl:w-[340px] 2xl:w-[380px] h-[360px] xl:h-[440px] 2xl:h-[480px] z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none"
      >
        <div className="w-full h-full rounded-r-[2rem] rounded-tr-[12rem] overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="RCS Rich Media Chat" />
        </div>
      </motion.div>

      {/* RIGHT IMAGE (Signature Arch) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.4 }} 
        className="absolute right-0 top-24 lg:top-36 hidden lg:block w-[260px] xl:w-[340px] 2xl:w-[380px] h-[360px] xl:h-[440px] 2xl:h-[480px] z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] pointer-events-none"
      >
        <div className="w-full h-full rounded-l-[2rem] rounded-bl-[12rem] overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img src="https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="Interactive Customer Engagement" />
        </div>
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-30">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <SectionBadge text="Next-Gen RCS Messaging" className="!bg-white dark:!bg-slate-800 !border-brand-100 dark:!border-slate-700 !mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            <span className="text-brand-500 relative">RCS Messaging</span> <br className="hidden md:block" />
            A Smarter Way to Communicate.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl">
            Engage your customers with rich media, interactive buttons, verified branding, and seamless fallback to SMS—all directly inside the native messaging app.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="shadow-lg shadow-brand-500/30 group">
              Start RCS Messaging <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};