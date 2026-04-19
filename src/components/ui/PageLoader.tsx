import { motion } from 'framer-motion';
import logoImage from '../../assets/squad-logo-new.png';

export const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Soft, premium ambient glow (Light Theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(ellipse,rgba(59,186,177,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Center Content Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <img 
          src={logoImage} 
          alt="Squad Telekom" 
          className="h-10 md:h-12 w-auto object-contain" 
        />

        {/* Ultra-minimalist 2px sweeping line loader */}
        <div className="mt-8 w-40 md:w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(59,186,177,0.5)]"
          />
        </div>
        
      </motion.div>
    </motion.div>
  );
};