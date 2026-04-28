import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Layers } from 'lucide-react';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const services = [
  {
    title: "CPaaS",
    description: "Scale complex communication workflows instantly with a single robust API integrating voice, text, and social channels.",
    bgColor: "bg-[#eff6ff]",
    iconColor: "text-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", 
  },
  {
    title: "WhatsApp Messaging",
    description: "Automate real-time support, transactional alerts, and rich-media marketing through verified business profiles.",
    bgColor: "bg-[#f0fdf4]",
    iconColor: "text-green-500",
    image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=600&auto=format&fit=crop", 
  },
  {
    title: "Bulk SMS",
    description: "Execute high-volume promotional and transactional campaigns globally with ultra-low latency and multi-route redundancy.",
    bgColor: "bg-[#fdf4ff]",
    iconColor: "text-fuchsia-500",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=600&auto=format&fit=crop", 
  },
  {
    title: "RCS Messaging",
    description: "Deliver next-generation rich media campaigns with verified branding, interactive carousels, and quick-reply buttons.",
    bgColor: "bg-[#fffbeb]",
    iconColor: "text-amber-500",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop", 
  },
  {
    title: "P2A Messaging",
    description: "Empower users to initiate seamless chats with your business through SMS and automated conversational bots.",
    bgColor: "bg-[#f5f3ff]",
    iconColor: "text-violet-500",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=600&auto=format&fit=crop", 
  },
  {
    title: "Telegram",
    description: "Drive instant audience engagement with secure notifications, promotional broadcasts, and rich media support.",
    bgColor: "bg-[#f0fdfa]",
    iconColor: "text-teal-500",
    image: "https://images.unsplash.com/photo-1636743085547-4dcf1f9157dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    title: "Viber Messaging",
    description: "Connect across borders with branded business profiles, secure file sharing, and engaging promotional content.",
    bgColor: "bg-[#f8fafc]",
    iconColor: "text-slate-500",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c3/6d/83/c36d83ea-ad22-dd42-a4c1-34cf743a2965/AppIcon-0-0-1x_U007epad-0-1-0-sRGB-0-85-220.png/1200x630wa.png", 
  },
  {
    title: "A2P Messaging",
    description: "Securely and reliably route automated OTPs, critical alerts, and system notifications directly to your users.",
    bgColor: "bg-[#fff1f2]",
    iconColor: "text-rose-500",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=600&auto=format&fit=crop", 
  },
  {
    title: "Email Services",
    description: "Optimize inbox placement for transactional alerts and marketing campaigns with advanced analytics and automation.",
    bgColor: "bg-[#f0f9ff]",
    iconColor: "text-sky-500",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=600&auto=format&fit=crop", 
  }
];

export const Products = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* CENTERED SECTION HEADER */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-12 md:mb-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-slate-200 shadow-sm"
          >
            <Layers className="w-4 h-4 text-brand-500" />
            Our Ecosystem
          </motion.div>

          {/* DRY: Swapped Hardcoded HTML for SectionHeader. Preserved whileInView motion by wrapping it */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader 
              align="center"
              title={<>Products and Services <br className="hidden md:block" /> That Scale With You</>}
              titleClassName="!text-4xl md:!text-5xl lg:!text-6xl !font-bold !leading-[1.1] !mb-6"
              subtitle="Equip your teams with enterprise-grade connectivity. From rich media chats to automated alerts, our robust infrastructure handles billions of interactions effortlessly."
              subtitleClassName="!text-lg md:!text-xl !text-slate-600 !leading-relaxed !font-medium"
            />
          </motion.div>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL */}
      <div className="relative w-full max-w-[1700px] mx-auto group/slider px-4 sm:px-6 lg:px-12">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none hidden md:block" />

        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-6 top-[45%] -translate-y-1/2 z-20 hidden md:flex w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/60 items-center justify-center text-slate-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] opacity-0 group-hover/slider:opacity-100 hover:scale-110"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>

        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-6 top-[45%] -translate-y-1/2 z-20 hidden md:flex w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/60 items-center justify-center text-slate-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] opacity-0 group-hover/slider:opacity-100 hover:scale-110"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 lg:gap-8 pt-4 pb-16 snap-x snap-mandatory hide-scrollbar relative z-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
                className={`group flex-none w-[85vw] sm:w-[360px] lg:w-[420px] snap-center sm:snap-start rounded-[2.5rem] p-6 lg:p-8 flex flex-col relative overflow-hidden transition-shadow duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-white/60 cursor-pointer ${service.bgColor}`}
              >
                <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-8 relative bg-white shadow-sm z-10 border border-slate-100/50">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] rounded-[1.5rem] pointer-events-none" />
                </div>

                <div className="flex-1 flex flex-col justify-between text-left relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer w-fit">
                    <span className={service.iconColor}>Learn More</span>
                    <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-2 ${service.iconColor}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};