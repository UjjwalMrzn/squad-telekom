import { motion, type Variants } from 'framer-motion';
import { SectionBadge } from '../../../components/ui/SectionBadge';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Mic, MessageSquare, Code2 } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const AboutStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* --- ADDED SECTION HEADER & BADGE --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="max-w-4xl mb-20"
        >
          <SectionBadge text="The Squad Story" className="!mb-8" />
          <SectionHeader 
            align="left"
            title="Revolutionizing Business Interactions."
            titleClassName="!text-4xl md:!text-5xl !font-bold !text-slate-900 !mb-8"
            subtitle="Beginning with our flagship voice services, we embarked on a journey to revolutionize business interactions. Today, we proudly offer an extensive suite of solutions, including cutting-edge voice and SMS services, alongside innovative software offerings. With a commitment to excellence, Squad Telekom continues to shape the landscape of modern communication, catering to diverse client needs across global markets."
            subtitleClassName="!text-lg !text-slate-600 !leading-relaxed !font-medium"
          />
        </motion.div>

        {/* --- ORIGINAL 3-CARD UI RESTORED --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Mic, 
              title: "Voice Services", 
              desc: "Comprehensive voice services encompassing NCLI, CLI, TDM, and direct routes. Our Call Center solutions span across Asia, Europe, and Latin America with competitive rates." 
            },
            { 
              icon: MessageSquare, 
              title: "SMS Solutions", 
              desc: "We provide a spectrum of options, from wholesale SMS to SMS API integration, along with highly secure OTP and A2P messaging solutions for enterprise needs." 
            },
            { 
              icon: Code2, 
              title: "Software Offerings", 
              desc: "Delivering holistic solutions with cutting-edge software. Our Rates Management System, Ticketing System, and SMS Switch optimize your communication capabilities." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-sm transition-all duration-500 flex flex-col"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8">
                <item.icon className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};