import { motion } from 'framer-motion';
import logoImage from '../../assets/squad-logo-new.png';

export const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(59,186,177,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

      {/* Pulsing Logo */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <img 
          src={logoImage} 
          alt="Loading Squad Telekom..." 
          className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,186,177,0.5)]" 
        />
      </motion.div>

      {/* Premium Loading Bar */}
      <div className="mt-8 w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative z-10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-1/2 bg-brand-500 rounded-full shadow-[0_0_10px_rgba(59,186,177,0.8)]"
        />
      </div>
    </motion.div>
  );
};