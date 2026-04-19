import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Added for redirection
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Globe, Sparkles, Activity } from 'lucide-react';

export const Hero = () => {
  const rotatingWords = ["Communication", "Engagement", "Connections"];
  const [wordIndex, setWordIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 bg-slate-50 overflow-hidden group/section"
    >
      
      {/* PREMIUM SYMMETRICAL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
        <motion.div 
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] max-w-[700px] h-[80vh] bg-brand-500/20 rounded-full blur-[100px] md:blur-[140px]" 
        />
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
          className="absolute top-[10%] -right-[10%] w-[50vw] max-w-[700px] h-[80vh] bg-brand-500/20 rounded-full blur-[100px] md:blur-[140px]" 
        />

        {/* --- INTERACTIVE SONAR LAYERS --- */}
        <motion.div 
          style={{ left: hoverX, top: hoverY, x: "-50%", y: "-50%" }}
          className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,186,177,0.12)_0%,transparent_70%)] opacity-0 group-hover/section:opacity-100 transition-opacity duration-500 mix-blend-multiply z-0 pointer-events-none" 
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT & BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="relative z-10 w-full text-center md:text-left pt-10 lg:pt-0"
          >
            <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-slate-900 mb-6">
              <span className="block mb-2">Simplifying</span>
              <span className="text-brand-500 block h-[1.2em] relative mb-2 flex justify-center md:justify-start overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ willChange: "transform, opacity" }}
                    className="absolute top-0"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block">Empowering Growth</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed font-medium max-w-lg mx-auto md:mx-0">
              Carrier-grade messaging, voice, and verification APIs for businesses across the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* FIXED: Added Link redirection to /contact */}
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-brand-500 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-brand-500/30 flex items-center justify-center group hover:bg-brand-600 transition-colors"
                >
                  Get In Touch 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold text-base transition-colors flex items-center justify-center shadow-sm"
              >
                Discover Platform
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: LEAPFROG STYLE LARGE IMAGE BENTO WITH OVERLAPS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] z-10 flex items-center"
          >
            {/* --- THE BIG IMAGE BENTO --- */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative w-full h-[85%] rounded-[2rem] rounded-br-[8rem] lg:rounded-br-[12rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-100 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" 
                alt="Squad Telekom Solutions" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/20 to-transparent opacity-60" />
            </motion.div>

            {/* --- OVERLAPPING INFO BOX 1: Top Left --- */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -15, boxShadow: "0 30px 60px -15px rgba(59,186,177,0.4)" }}
              className="absolute top-0 left-4 md:-left-8 bg-brand-500 rounded-[2.5rem] p-6 lg:p-8 shadow-2xl shadow-brand-500/30 border border-brand-300 z-30 max-w-[200px] lg:max-w-[260px] group cursor-default transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 shadow-inner group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <p className="text-brand-100 text-[10px] font-bold uppercase tracking-widest mb-1">Unified Platform</p>
              <h3 className="text-white font-bold text-lg lg:text-xl leading-tight">
                AI Powered<br/>Engagement
              </h3>
            </motion.div>

            {/* --- OVERLAPPING INFO BOX 2: Bottom Right Corner --- */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05, y: 5, boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)" }}
              className="absolute bottom-8 -right-4 md:-right-8 bg-[#020617]/95 backdrop-blur-xl rounded-[2.5rem] p-6 lg:p-8 shadow-2xl border border-slate-800 z-30 max-w-[220px] lg:max-w-[280px] group cursor-default transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center border border-brand-500/20 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <Globe className="w-5 h-5 text-brand-400 group-hover:text-white" />
                </div>
                <div className="h-[1px] flex-grow bg-slate-800" />
              </div>
              <h3 className="text-white font-bold text-base lg:text-lg leading-snug mb-2 group-hover:text-brand-400 transition-colors duration-300">
                900+ Global Operator Routes
              </h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                Seamless connectivity across 30+ international markets.
              </p>
            </motion.div>

            {/* Subtle Floating Detail Element */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-2 md:-right-4 w-12 h-12 rounded-full border border-brand-500/30 flex items-center justify-center z-20"
            >
              <Activity className="w-4 h-4 text-brand-500" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};