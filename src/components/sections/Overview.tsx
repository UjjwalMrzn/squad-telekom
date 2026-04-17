import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Network, Globe } from 'lucide-react';

export const Overview = () => {
  // Setup hardware-accelerated mouse tracking for the Sonar effect
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize to rough center of the Overview black box
  const mouseX = useMotionValue(300); 
  const mouseY = useMotionValue(200);

  // Apply fluid spring physics so the effect elegantly chases the mouse
  const springConfig = { damping: 25, stiffness: 200 };
  const hoverX = useSpring(mouseX, springConfig);
  const hoverY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-100 relative border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: NARRATIVE (LOCKED) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brand-700 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-brand-100 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Company Overview
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
              Empowering Enterprise <br />
              Communication <br />
              Since <motion.span 
                initial={{ opacity: 0, color: '#0f172a' }}
                whileInView={{ opacity: 1, color: '#3bbab1' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-brand-500 inline-block"
              >
                2008
              </motion.span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
              Founded with a single system and a bold vision, Squad has evolved into a global leader in telecom and enterprise communication solutions. With over <span className="text-slate-900 font-bold">17 years</span> of consistent innovation, we've earned the trust of <span className="text-slate-900 font-bold">12,000+ global brands</span> across 30+ countries.
            </p>
          </motion.div>

          {/* RIGHT SIDE: PREMIUM VISUAL COMMAND CENTER */}
          <div className="relative">
            
            {/* FIXED: Switched to explicit variant strings ("hidden", "visible", "hover") 
              so the child sonar rings correctly inherit the initial hidden state on refresh 
              and properly reset when hover ends.
            */}
            <motion.div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                hover: { opacity: 1, scale: 1 } 
              }}
              style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              className="bg-[#020617] rounded-[3rem] p-8 pb-20 md:p-12 md:pb-24 shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(59,186,177,0.2)] relative overflow-hidden transition-shadow duration-500 group cursor-default border border-slate-800/50 hover:border-brand-500/30"
            >
              
              {/* --- SONAR BACKGROUND EFFECTS --- */}

              {/* BASE GLOW: Subtle constant illumination anchored to the center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,186,177,0.05)_0%,transparent_60%)] pointer-events-none" />

              {/* 1. The Core Glow */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0, transition: { duration: 0.4 } },
                  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
                }}
                style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
                className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.25)_0%,rgba(59,186,177,0.05)_30%,transparent_60%)] pointer-events-none mix-blend-screen" 
              />

              {/* 2. Micro-Origin Dot */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
                  hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
                }}
                style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
                className="absolute w-2 h-2 bg-brand-300 rounded-full shadow-[0_0_15px_3px_rgba(59,186,177,0.8)] pointer-events-none" 
              />

              {/* 3. Perfect Circle Sonar Wave 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 0, scale: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  hover: { 
                    opacity: [0, 0.7, 0], 
                    scale: [0, 1], 
                    transition: { duration: 2, ease: "linear", repeat: Infinity } 
                  }
                }}
                style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
                className="absolute w-[500px] h-[500px] rounded-full border-[1.5px] border-brand-400 shadow-[0_0_30px_rgba(59,186,177,0.6)] pointer-events-none" 
              />
              
              {/* 4. Perfect Circle Sonar Wave 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 0, scale: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  hover: { 
                    opacity: [0, 0.4, 0], 
                    scale: [0, 1.2], 
                    transition: { duration: 2.5, ease: "linear", repeat: Infinity, delay: 0.8 } 
                  }
                }}
                style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
                className="absolute w-[500px] h-[500px] rounded-full border border-brand-300 shadow-[0_0_20px_rgba(59,186,177,0.4)] pointer-events-none" 
              />

              {/* --- END EFFECTS --- */}

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  {/* Network Icon */}
                  <motion.div 
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,186,177,0.4)] border border-brand-400/50"
                  >
                    <Network className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {/* Flags */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex -space-x-3"
                  >
                    {[
                      "https://flagcdn.com/in.svg",
                      "https://flagcdn.com/us.svg",
                      "https://flagcdn.com/gb.svg"
                    ].map((flag, i) => (
                      <motion.img 
                        key={i} 
                        whileHover={{ y: -4, zIndex: 20 }}
                        src={flag} 
                        className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover relative z-10 transition-shadow hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                        alt="market" 
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020617] flex items-center justify-center text-[10px] font-bold text-brand-100 relative z-0">
                      +30
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md pointer-events-none"
                >
                  Transforming Global <br /> 
                  Communication Logic
                </motion.h3>
                
              </div>
            </motion.div>

            {/* Premium Continuous Floating Badge (LOCKED) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -bottom-8 -left-6 md:-left-12 md:-bottom-10 z-20 hidden sm:block pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ WebkitTransform: "translateZ(0)" }}
                className="bg-white p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 group pointer-events-auto cursor-default"
              >
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">30+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Active Markets</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};