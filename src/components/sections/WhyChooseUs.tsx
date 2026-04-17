import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { ArrowRight, TrendingUp, Server, Code2 } from 'lucide-react';
import { SectionBadge } from '../ui/SectionBadge';
import { SectionHeader } from '../ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const WhyChooseUs = () => {
  // Setup hardware-accelerated mouse tracking
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize to rough center of the container
  const mouseX = useMotionValue(700); 
  const mouseY = useMotionValue(150);

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
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* LOCKED GRID: 1400px invisible master line */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-4xl mb-20 md:mb-32 text-center mx-auto"
        >
          {/* DRY: Swapped Hardcoded HTML for SectionBadge. Used class overrides to match the original White background */}
          <SectionBadge text="The Squad Advantage" className="!bg-white !border-brand-100 !mb-8" />
          
          {/* DRY: Swapped Hardcoded HTML for SectionHeader. Mapped exact extrabold typography from your locked UI */}
          <SectionHeader 
            align="center"
            title="Why Choose Squad"
            titleClassName="!text-4xl md:!text-5xl lg:!text-6xl !font-extrabold !leading-[1.1] !mb-8"
            subtitle={<>At Squad, we do more than deliver messages—we enable enterprise-grade communication with measurable business impact. Our platform is trusted by <strong className="text-slate-900">12,000+ brands</strong> for its unmatched speed, security, and reliability. With over <strong className="text-slate-900">17 years</strong> of telecom expertise and <strong className="text-slate-900">900+</strong> operator connections, Squad offers the infrastructure and intelligence needed to scale your communication globally.</>}
            subtitleClassName="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !font-medium !max-w-none"
          />
        </motion.div>

        {/* EDITORIAL Z-PATTERN LAYOUT */}
        <div className="flex flex-col gap-24 lg:gap-32 mb-24 lg:mb-32">
          
          {/* FEATURE 1: Powerful APIs (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Powerful APIs. Global Reach. Unmatched Uptime.
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                Ensuring always-on delivery with robust APIs and global-grade infrastructure.
              </p>
              
              <div className="group inline-flex items-center text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit text-brand-600 hover:text-brand-700">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-2" />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
              className="order-1 lg:order-2 relative"
            >
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ WebkitTransform: "translateZ(0)" }}
                className="absolute -bottom-8 -left-6 md:-left-12 md:-bottom-10 bg-white p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hidden sm:flex items-center gap-4 z-20 group cursor-default"
              >
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">API Delivery</div>
                </div>
              </motion.div>

              <div 
                className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] group bg-white border border-slate-200/50"
                style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                  alt="API Code Integration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem] pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* FEATURE 2: Carrier-Grade (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ WebkitTransform: "translateZ(0)" }}
                className="absolute -top-8 -right-6 md:-right-12 md:-top-10 bg-white p-6 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hidden sm:flex items-center gap-4 z-20 group cursor-default"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">900+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Global Operators</div>
                </div>
              </motion.div>

              <div 
                className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] group bg-[#020617]"
                style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" 
                  alt="Server Infrastructure" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
                Carrier-Grade Platform Uptime & Redundancy
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                Built for scale. Our geo-redundant server clusters ensure your communication streams never drop, even during massive traffic spikes.
              </p>
              
              <div className="group inline-flex items-center text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit text-brand-600 hover:text-brand-700">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-2" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* METRICS STRIP: High-Impact Perfect Circle Sonar Tracking */}
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className="w-full bg-[#020617] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-16 md:gap-0 cursor-default"
        >
          {/* BASE GLOW: Subtle constant illumination anchored to the center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(59,186,177,0.05)_0%,transparent_60%)] pointer-events-none" />

          {/* DYNAMIC EFFECTS */}
          
          {/* 1. The Core Glow (Fades in softly, does NOT scale explode) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            className="absolute w-[800px] lg:w-[1000px] h-[800px] lg:h-[1000px] bg-[radial-gradient(circle,rgba(59,186,177,0.25)_0%,rgba(59,186,177,0.05)_30%,transparent_60%)] pointer-events-none mix-blend-screen" 
          />

          {/* 2. Micro-Origin Dot (Proves the center starts small) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 0, scale: 0 },
              hover: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.2 }}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            className="absolute w-2 h-2 bg-brand-300 rounded-full shadow-[0_0_15px_3px_rgba(59,186,177,0.8)] pointer-events-none z-0" 
          />

          {/* 3. Perfect Circle Sonar Wave 1 (Strictly Linear Math) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 0, scale: 0 },
              hover: { opacity: [0, 0.7, 0], scale: [0, 1] }
            }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            className="absolute w-[600px] h-[600px] rounded-full border-[1.5px] border-brand-400 shadow-[0_0_30px_rgba(59,186,177,0.6)] pointer-events-none" 
          />
          
          {/* 4. Perfect Circle Sonar Wave 2 (Strictly Linear Math) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 0, scale: 0 },
              hover: { opacity: [0, 0.4, 0], scale: [0, 1.2] }
            }}
            transition={{ duration: 2.5, ease: "linear", repeat: Infinity, delay: 0.8 }}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            className="absolute w-[600px] h-[600px] rounded-full border border-brand-300 shadow-[0_0_20px_rgba(59,186,177,0.4)] pointer-events-none" 
          />

          {/* CONTENT SECTION */}
          {/* Metric 1: < 10 Sec */}
          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 md:border-r border-slate-800/80 px-4 md:px-8 group/metric pointer-events-none">
            <h3 className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tighter mb-4 drop-shadow-sm group-hover/metric:scale-105 transition-transform duration-500 ease-[0.22,1,0.36,1]">
              &lt; 10 <span className="text-4xl lg:text-5xl">Sec</span>
            </h3>
            <p className="text-slate-400 font-medium text-sm lg:text-base mb-2">Average</p>
            <p className="text-white font-bold text-lg lg:text-xl">Message Delivery Time</p>
          </div>

          {/* Metric 2: 70%+ Conversion */}
          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4 md:px-8 group/metric pointer-events-auto">
            <div className="w-14 h-14 bg-brand-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/40 group-hover/metric:rotate-12 group-hover/metric:scale-110 transition-transform duration-500 pointer-events-none">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 drop-shadow-md pointer-events-none">
              70%+ Campaign <br className="hidden lg:block" /> Conversion Rates
            </h3>
            
            {/* Brightened Learn More link */}
            <div className="group/btn inline-flex items-center text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit text-brand-600 hover:text-brand-700 drop-shadow-[0_0_8px_rgba(59,186,177,0.4)]">
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover/btn:translate-x-2" />
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};