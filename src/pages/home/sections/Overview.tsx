import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Network, Activity, ArrowRight } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

export const Overview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(300); 
  const mouseY = useMotionValue(200);

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
    <section className="py-24 lg:py-32 bg-slate-100 dark:bg-slate-900 relative border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: SUMMARIZED OVERVIEW & CTA */}
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
            >
              <SectionBadge text="Company Overview" className="!bg-white dark:!bg-slate-800 !border-brand-100 dark:!border-slate-700 !mb-8" />
            </motion.div>
            
            <SectionHeader 
              title={<>Empowering Enterprise <br /> Communication <br /> Since <motion.span initial={{ opacity: 0, color: '#0f172a' }} whileInView={{ opacity: 1, color: '#3bbab1' }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }} className="text-brand-500 inline-block">2021</motion.span></>}
              titleClassName="!text-4xl md:!text-5xl lg:!text-6xl !font-bold !leading-[1.1] !mb-8"
              subtitle={
                <>
                  Founded in <span className="text-slate-900 dark:text-white font-bold">2021</span>, Squad Telekom is a U.S.-based telecommunications provider specializing in high-quality voice, global A2P SMS, and automated retail solutions (<span className="text-slate-900 dark:text-white font-bold">ARSS</span>). Built on transparent partnerships and robust routing infrastructure, we empower businesses across emerging and global markets.
                </>
              }
              subtitleClassName="!text-lg md:!text-xl !text-slate-600 dark:!text-slate-400 !leading-relaxed !font-medium !max-w-xl !mb-8"
            />

            {/* CTA LINK TO ABOUT US PAGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full text-base shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Explore Our Full Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE BENTO CARD */}
          <div className="relative w-full max-w-[540px] mx-auto lg:ml-auto lg:mr-0">
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
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3bbab1_1px,transparent_1px),linear-gradient(to_bottom,#3bbab1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,186,177,0.05)_0%,transparent_60%)] pointer-events-none z-0" />

              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0, transition: { duration: 0.4 } },
                  hover: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
                }}
                style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
                className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.25)_0%,rgba(59,186,177,0.05)_30%,transparent_60%)] pointer-events-none mix-blend-screen z-0" 
              />

              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
                  hover: { opacity: 1, scale: 1, transition: { duration: 0.2 } }
                }}
                style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
                className="absolute w-2 h-2 bg-brand-300 rounded-full shadow-[0_0_15px_3px_rgba(59,186,177,0.8)] pointer-events-none z-0" 
              />

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
                className="absolute w-[500px] h-[500px] rounded-full border-[1.5px] border-brand-400 shadow-[0_0_30px_rgba(59,186,177,0.6)] pointer-events-none z-0" 
              />
              
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
                className="absolute w-[500px] h-[500px] rounded-full border border-brand-300 shadow-[0_0_20px_rgba(59,186,177,0.4)] pointer-events-none z-0" 
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <motion.div 
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-14 h-14 bg-brand-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(59,186,177,0.4)] border border-brand-400/50"
                  >
                    <Network className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex -space-x-3"
                  >
                    {[
                      "https://flagcdn.com/us.svg",
                      "https://flagcdn.com/ae.svg",
                      "https://flagcdn.com/sg.svg"
                    ].map((flag, i) => (
                      <motion.img 
                        key={i} 
                        whileHover={{ y: -4, zIndex: 20 }}
                        src={flag} 
                        className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover relative z-10 transition-shadow hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                        alt="Regional Hub" 
                      />
                    ))}
                    {/* CHANGED +30 TO 3 HUBS */}
                    <div className="w-auto px-2.5 h-10 rounded-full bg-slate-800 border-2 border-[#020617] flex items-center justify-center text-[10px] font-bold text-brand-100 relative z-0 uppercase tracking-tight">
                      3 Hubs
                    </div>
                  </motion.div>
                </div>

                {/* CHANGED HEADING TEXT */}
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-md pointer-events-none"
                >
                  Carrier Grade Global <br /> 
                  Infrastructure
                </motion.h3>
                
              </div>
            </motion.div>

            {/* FLOATING CARD: CHANGED FROM 30+ ACTIVE MARKETS TO 99.99% NETWORK UPTIME */}
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
                className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-4 group pointer-events-auto cursor-default"
              >
                <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">99.99%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Network Uptime</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};