import { useRef } from 'react';
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion';
import { Headphones, Handshake, Rocket, MapPin, Users, Server, type LucideIcon } from 'lucide-react';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

type Accent = 'brand' | 'emerald' | 'sky';

const accentClasses: Record<Accent, string> = {
  brand: 'bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400',
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
  sky: 'bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400',
};

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: Accent;
}

const reasons: Reason[] = [
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Round-the-clock assistance from a team that knows your setup, not a ticket queue.',
    accent: 'brand',
  },
  {
    icon: Handshake,
    title: '300+ Partners Worldwide',
    description: 'A growing network of operators, carriers and resellers trusted to deliver at scale.',
    accent: 'emerald',
  },
  {
    icon: Rocket,
    title: 'Serving Businesses Since 2021',
    description: 'Years of hands on telecom experience behind every route we manage.',
    accent: 'sky',
  },
  {
    icon: MapPin,
    title: 'Presence Across 3 Countries',
    description: 'Local teams in the USA, UAE, and Singapore, close to where you operate.',
    accent: 'brand',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'A 50+ strong team of telecom and engineering experts behind every deployment.',
    accent: 'emerald',
  },
  {
    icon: Server,
    title: 'Own Built-In Infrastructure',
    description: 'Proprietary infrastructure, owned end-to-end, with no dependency on third-party middleware.',
    accent: 'sky',
  },
];

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
    <section id="why-squad" className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="max-w-3xl mb-14 md:mb-16 text-center mx-auto"
        >
          <SectionBadge
            text="The Squad Advantage"
            className="!bg-white dark:!bg-slate-800 !border-brand-100 dark:!border-slate-700 !mb-4"
          />
          <SectionHeader
            align="center"
            title="Why Choose Squad"
            titleClassName="!text-3xl md:!text-4xl lg:!text-5xl !font-bold !leading-tight !mb-4"
            subtitle="Built on our own infrastructure and run by people who've done this for years, Squad brings the depth of an established global operator to every partnership."            subtitleClassName="!text-sm md:!text-base !text-slate-600 dark:!text-slate-400 !leading-relaxed !font-medium !max-w-none"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-14 max-w-5xl mx-auto"
        >
          {/* Center divider, desktop only */}
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />
          <div className="hidden md:block absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-brand-500 -translate-x-1/2 -translate-y-1/2" />

          {reasons.map(({ icon: Icon, title, description, accent }) => (
            <motion.div key={title} variants={fadeUp} className="flex items-start gap-4">
              <div
                className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${accentClasses[accent]}`}
              >
                <Icon className="w-5 h-5" strokeWidth={2.25} />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive spotlight strip preserved from the original design */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          style={{ WebkitTransform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
          className="mt-14 lg:mt-16 w-full max-w-4xl mx-auto bg-[#020617] rounded-[1.5rem] p-6 lg:p-8 relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-6 md:gap-0 cursor-default"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,186,177,0.05)_0%,transparent_60%)] pointer-events-none" />

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ left: hoverX, top: hoverY, x: '-50%', y: '-50%' }}
            className="absolute w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-[radial-gradient(circle,rgba(59,186,177,0.25)_0%,rgba(59,186,177,0.05)_30%,transparent_60%)] pointer-events-none mix-blend-screen"
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 0, scale: 0 },
              hover: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.2 }}
            style={{ left: hoverX, top: hoverY, x: '-50%', y: '-50%' }}
            className="absolute w-2 h-2 bg-brand-300 rounded-full shadow-[0_0_15px_3px_rgba(59,186,177,0.8)] pointer-events-none z-0"
          />

          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 md:border-r border-slate-800/80 px-4 md:px-6 pointer-events-none">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-1 drop-shadow-sm">
              300<span className="text-xl lg:text-2xl">+</span>
            </h3>
            <p className="text-slate-400 font-medium text-[10px] mb-1">Global</p>
            <p className="text-white font-bold text-sm lg:text-base">Partner Network</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 md:border-r border-slate-800/80 px-4 md:px-6 pointer-events-none">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-1 drop-shadow-sm">
              24<span className="text-xl lg:text-2xl">/7</span>
            </h3>
            <p className="text-slate-400 font-medium text-[10px] mb-1">Always On</p>
            <p className="text-white font-bold text-sm lg:text-base">Dedicated Support</p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4 md:px-6 pointer-events-none">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md mb-1">
              USA · UAE · Singapore
            </h3>
            <p className="text-slate-400 font-medium text-[10px] mb-1">Since 2021</p>
            <p className="text-white font-bold text-sm lg:text-base">Presence in 3 Countries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};