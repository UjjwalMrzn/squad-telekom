import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { SectionBadge } from '../../../components/ui/SectionBadge';

export const BankingHero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 lg:pt-48 lg:pb-48 bg-white overflow-hidden border-b border-slate-100">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] h-[60vh] bg-brand-500/10 rounded-full blur-[100px]" />
      </div>

      {/* LEFT IMAGE (Banking Theme) */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="absolute left-0 top-24 lg:top-36 hidden lg:block w-[280px] xl:w-[380px] h-[380px] xl:h-[480px] z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
        <div className="w-full h-full rounded-r-[2rem] rounded-tr-[12rem] overflow-hidden bg-slate-100">
          <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Banking Operations" />
        </div>
      </motion.div>

      {/* RIGHT IMAGE (Banking Theme) */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="absolute right-0 top-24 lg:top-36 hidden lg:block w-[280px] xl:w-[380px] h-[380px] xl:h-[480px] z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
        <div className="w-full h-full rounded-l-[2rem] rounded-bl-[12rem] overflow-hidden bg-slate-100">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Secure Transactions" />
        </div>
      </motion.div>

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-30">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <SectionBadge text="BFSI Solutions" className="!bg-white !border-brand-100 !mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
            Powering Secure, <br/>Real-Time <br className="hidden md:block" /> <span className="text-brand-500 relative">Banking Communication</span> <br className="hidden md:block" /> with Squad.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl">
            Deliver instant transaction alerts, secure OTPs, and personalized financial offers. Enhance customer trust with carrier-grade reliability and end-to-end encryption.
          </p>
          <Button variant="primary" size="lg" className="shadow-lg shadow-brand-500/30 group">
            Get Started Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};