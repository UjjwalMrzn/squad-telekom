import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const allStats = [
  { value: "17+", label: "Years of Telecom Innovation" },
  { value: "900+", label: "Operator Integration" },
  { value: "30+", label: "Countries Presence" },
  { value: "70%+", label: "Campaign Conversion Rates" },
  { value: "<10 Sec", label: "Average Message Latency" },
  { value: "300+", label: "Enterprise Clients" },
];

export const GlobalImpact = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const mouseX = useMotionValue(700); 
  const mouseY = useMotionValue(300);

  const springConfig = { damping: 25, stiffness: 200 };
  const hoverX = useSpring(mouseX, springConfig);
  const hoverY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
        hover: { opacity: 1 } 
      }}
      className="py-24 lg:py-32 relative overflow-hidden bg-brand-500 cursor-default"
    >
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
          }}
        />
      </div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0, transition: { duration: 0.4 } },
          hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
        }}
        style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
        className="absolute w-[800px] lg:w-[1200px] h-[800px] lg:h-[1200px] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_30%,transparent_60%)] pointer-events-none mix-blend-screen z-0" 
      />

      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
          hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
        }}
        style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
        className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.8)] pointer-events-none z-0" 
      />

      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 0, scale: 0, transition: { duration: 0.4, ease: "easeOut" } },
          hover: { 
            opacity: [0, 0.5, 0], 
            scale: [0, 1], 
            transition: { duration: 2, ease: "linear", repeat: Infinity } 
          }
        }}
        style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
        className="absolute w-[600px] h-[600px] rounded-full border-[1.5px] border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] pointer-events-none z-0" 
      />
      
      <motion.div 
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 0, scale: 0, transition: { duration: 0.4, ease: "easeOut" } },
          hover: { 
            opacity: [0, 0.3, 0], 
            scale: [0, 1.2], 
            transition: { duration: 2.5, ease: "linear", repeat: Infinity, delay: 0.8 } 
          }
        }}
        style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
        className="absolute w-[600px] h-[600px] rounded-full border border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.2)] pointer-events-none z-0" 
      />

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pointer-events-none">
        
        <motion.div 
          variants={fadeUp}
          className="text-center mb-16 md:mb-20"
        >
          {/* FIXED: Changed to font-bold */}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-sm">
            Global Scale. Local Impact.
          </h2>
          <p className="text-brand-50/90 font-medium text-lg max-w-2xl mx-auto">
            Powering enterprise communications across the globe with unmatched speed, reliability, and precision.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pointer-events-auto"
        >
          {allStats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp} 
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              transition={{ duration: 0.3 }}
              style={{ WebkitTransform: 'translateZ(0)' }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-center items-start shadow-lg shadow-brand-700/10 group"
            >
              {/* FIXED: Changed to font-bold */}
              <h3 className="text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-500 origin-left">
                {stat.value}
              </h3>
              <p className="text-brand-50 font-bold text-sm tracking-widest uppercase leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};