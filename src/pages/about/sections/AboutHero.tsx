import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { SectionBadge } from '../../../components/ui/SectionBadge';

export const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Tracking Logic for Sonar Effect
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
      className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#020617] overflow-hidden border-b border-slate-800 flex items-center justify-center min-h-[60vh] group/section cursor-default"
    >
      
      {/* ========================================= */}
      {/* --- PREMIUM GRADIENT & SONAR EFFECTS --- */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Background Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,186,177,0.08)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(59,186,177,0.05)_0%,transparent_50%)]" />
        
        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3bbab1_1px,transparent_1px),linear-gradient(to_bottom,#3bbab1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

        {/* --- INTERACTIVE SONAR LAYERS --- */}
        <motion.div 
          style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
          className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.15)_0%,transparent_70%)] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-screen" 
        />
        
        <motion.div 
          style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
          className="absolute w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_rgba(59,186,177,0.8)] opacity-0 group-hover/section:opacity-100" 
        />

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

      {/* TEXT CONTENT */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-30 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <SectionBadge text="About Squad Telekom" className="!bg-slate-800/50 !border-slate-700 !text-brand-400 !mb-8 backdrop-blur-md" />
          
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-8">
            Linking Possibilities, <br />
            <span className="text-brand-400">Enriching the World.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Founded in 2021, Squad Telekom has swiftly emerged as a dynamic player in the communication industry, connecting businesses globally with seamless, efficient, and strategic solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};