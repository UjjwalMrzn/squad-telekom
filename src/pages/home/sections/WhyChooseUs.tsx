import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { ArrowRight, TrendingUp, Server, Code2 } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const WhyChooseUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(700); 
  const mouseY = useMotionValue(150);

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
    // FIXED: Reduced padding from py-16 lg:py-20 to py-12 lg:py-16
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          // FIXED: Reduced bottom margin from mb-12 md:mb-16 to mb-8 md:mb-10
          className="max-w-4xl mb-8 md:mb-10 text-center mx-auto"
        >
          <SectionBadge text="The Squad Advantage" className="!bg-white !border-brand-100 !mb-4" />
          
          <SectionHeader 
            align="center"
            title="Why Choose Squad"
            titleClassName="!text-3xl md:!text-4xl lg:!text-5xl !font-bold !leading-[1.1.5] !mb-4"
            subtitle={<>At Squad, we do more than deliver messages—we enable enterprise-grade communication with measurable business impact. Our platform is trusted by <strong className="text-slate-900">12,000+ brands</strong> for its unmatched speed, security, and reliability. With over <strong className="text-slate-900">17 years</strong> of telecom expertise and <strong className="text-slate-900">900+</strong> operator connections, Squad offers the infrastructure and intelligence needed to scale your communication globally.</>}
            subtitleClassName="!text-sm md:!text-base !text-slate-600 !leading-relaxed !font-medium !max-w-none"
          />
        </motion.div>

        {/* FIXED: Reduced layout block gaps from gap-12 lg:gap-16 to gap-8 lg:gap-12 */}
        <div className="flex flex-col gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Tighter grid layout gaps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-3">
                Powerful APIs. Global Reach. Unmatched Uptime.
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4 max-w-lg">
                Ensuring always-on delivery with robust APIs and global-grade infrastructure.
              </p>
              
              <div className="group inline-flex items-center text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit text-brand-600 hover:text-brand-700">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-2" />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
              className="order-1 lg:order-2 relative w-full max-w-[500px] mx-auto lg:mr-0"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ WebkitTransform: "translateZ(0)" }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hidden sm:flex items-center gap-2 z-20 group cursor-default"
              >
                <div className="w-8 h-8 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">100%</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">API Delivery</div>
                </div>
              </motion.div>

              <div 
                className="relative rounded-[1.5rem] overflow-hidden shadow-xl aspect-[16/9] group bg-white border border-slate-200/50"
                style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                  alt="API Code Integration" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[1.5rem] pointer-events-none" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeRight}
              className="relative w-full max-w-[500px] mx-auto lg:ml-0"
            >
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ WebkitTransform: "translateZ(0)" }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hidden sm:flex items-center gap-2 z-20 group cursor-default"
              >
                <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">900+</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Global Operators</div>
                </div>
              </motion.div>

              <div 
                className="relative rounded-[1.5rem] overflow-hidden shadow-xl aspect-[16/9] group bg-[#020617]"
                style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" 
                  alt="Server Infrastructure" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.5rem] pointer-events-none" />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeLeft}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-3">
                Carrier-Grade Platform Uptime & Redundancy
              </h3>
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-4 max-w-lg">
                Built for scale. Our geo-redundant server clusters ensure your communication streams never drop, even during massive traffic spikes.
              </p>
              
              <div className="group inline-flex items-center text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit text-brand-600 hover:text-brand-700">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-2" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* FIXED: Reduced padding on the bottom metric wrapper */}
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className="w-full max-w-4xl mx-auto bg-[#020617] rounded-[1.5rem] p-6 lg:p-8 relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-6 md:gap-0 cursor-default"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,186,177,0.05)_0%,transparent_60%)] pointer-events-none" />

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1 }
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
            className="absolute w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-[radial-gradient(circle,rgba(59,186,177,0.25)_0%,rgba(59,186,177,0.05)_30%,transparent_60%)] pointer-events-none mix-blend-screen" 
          />

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

          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 md:border-r border-slate-800/80 px-4 md:px-6 group/metric pointer-events-none">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-1 drop-shadow-sm group-hover/metric:scale-105 transition-transform duration-500 ease-[0.22,1,0.36,1]">
              &lt; 10 <span className="text-xl lg:text-2xl">Sec</span>
            </h3>
            <p className="text-slate-400 font-medium text-[10px] mb-1">Average</p>
            <p className="text-white font-bold text-sm lg:text-base">Message Delivery Time</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4 md:px-6 group/metric pointer-events-auto">
            <div className="w-8 h-8 bg-brand-500 text-white rounded-lg flex items-center justify-center mb-3 shadow-lg shadow-brand-500/40 group-hover/metric:rotate-12 group-hover/metric:scale-110 transition-transform duration-500 pointer-events-none">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 drop-shadow-md pointer-events-none">
              70%+ Campaign <br /> Conversion Rates
            </h3>
            
            <div className="group/btn inline-flex items-center text-[10px] font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit text-brand-600 hover:text-brand-700 drop-shadow-[0_0_8px_rgba(59,186,177,0.4)]">
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover/btn:translate-x-2" />
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};