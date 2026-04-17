import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Globe, Activity } from 'lucide-react';

export const Hero = () => {
  const rotatingWords = ["Communication", "Engagement", "Connections"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 bg-slate-50 overflow-hidden">
      
      {/* PREMIUM SYMMETRICAL GRADIENT BACKGROUND (Hardware Accelerated) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white">
        
        {/* Left Side Brand Theme Glow */}
        <motion.div 
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] max-w-[700px] h-[80vh] bg-brand-500/30 rounded-full blur-[100px] md:blur-[140px]" 
        />
        
        {/* Right Side Brand Theme Glow */}
        <motion.div 
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
          className="absolute top-[10%] -right-[10%] w-[50vw] max-w-[700px] h-[80vh] bg-brand-500/30 rounded-full blur-[100px] md:blur-[140px]" 
        />
        
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT & BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="relative z-10 w-full text-center md:text-left pt-10 lg:pt-0"
          >
            <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight text-slate-900 mb-6">
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
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-brand-500 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-lg shadow-brand-500/30 flex items-center justify-center group hover:bg-brand-600 transition-colors"
              >
                Get In Touch 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 px-8 py-3.5 rounded-full font-bold text-base transition-colors flex items-center justify-center shadow-sm"
              >
                Discover Platform
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: FLOATING BENTO CARDS */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full mt-6 lg:mt-0 block perspective-1000">
            
            {/* Card 1: Global Infrastructure */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[2%] right-0 w-[70%] h-[50%] z-20"
            >
              <motion.div 
                animate={{ y: [-4, 4, -4] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                className="w-full h-full bg-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden group p-4 md:p-6 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12 z-20" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:20px_20px]" />
                  
                  <Globe className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3 text-slate-400 relative z-10" />
                  <span className="font-bold text-sm lg:text-lg text-slate-700 text-center relative z-10 px-2 leading-tight">Global Infrastructure</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2: AI Powered Engagement */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[22%] left-0 w-[60%] lg:w-[55%] h-[42%] z-30"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.05 }}
                style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                className="w-full h-full bg-brand-500 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border-4 border-white p-5 lg:p-8 text-white cursor-pointer group flex flex-col justify-center relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="w-8 md:w-12 h-2 md:h-3 bg-white rounded-full rounded-tr-none self-end" />
                  <div className="w-12 md:w-16 h-2 md:h-3 bg-white rounded-full rounded-tl-none self-start" />
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 lg:mb-5 group-hover:rotate-12 transition-transform relative z-10">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <p className="text-brand-100 font-bold mb-1 text-[10px] md:text-xs tracking-wider uppercase relative z-10">Unified Platform</p>
                <h3 className="text-sm md:text-base lg:text-lg font-extrabold leading-tight relative z-10">AI Powered Engagement</h3>
              </motion.div>
            </motion.div>

            {/* Card 3: Drive Growth (Dark Theme) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[2%] right-[5%] w-[85%] lg:w-[80%] h-[40%] z-10"
            >
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                whileHover={{ y: -5 }}
                style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                className="w-full h-full bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[3px] border-slate-800 p-5 lg:p-8 flex flex-col justify-between text-white overflow-hidden cursor-pointer group"
              >
                {/* Removed blur from internal gradient to save GPU rendering on child elements */}
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-brand-500/20 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Animated Bars */}
                <div className="absolute bottom-5 right-5 lg:bottom-8 lg:right-8 flex items-end gap-1.5 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="w-2.5 lg:w-3 bg-brand-400 rounded-t-sm h-4 lg:h-5" />
                  <div className="w-2.5 lg:w-3 bg-brand-400 rounded-t-sm h-6 lg:h-8" />
                  <div className="w-2.5 lg:w-3 bg-brand-400 rounded-t-sm h-10 lg:h-12" />
                  <div className="w-2.5 lg:w-3 bg-brand-500 rounded-t-sm h-16 lg:h-20 shadow-[0_0_15px_rgba(59,186,177,0.5)]" />
                </div>
                
                <div className="flex justify-between items-start relative z-10 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                    <Activity className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 text-[10px] md:text-xs font-bold tracking-wider uppercase bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">Drive Traffic</span>
                </div>
                
                <h3 className="text-xs sm:text-sm lg:text-base font-bold leading-tight relative z-10 max-w-[80%] lg:max-w-[70%]">
                  Build Stronger Relationships and drive growth.
                </h3>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};