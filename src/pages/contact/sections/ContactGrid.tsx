import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Mail, MapPin, Clock, ShieldCheck, ChevronDown, X } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

// Complete list of world countries
const countriesList = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// COMPACTED: Reduced py-3 to py-2, text-base to text-sm
const ClearableInput = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  onClear 
}: { 
  label: string; 
  type?: string; 
  placeholder: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onClear: () => void; 
}) => (
  <div className="space-y-1 relative">
    <label className="text-[11px] font-bold text-brand-700 uppercase tracking-wide">{label}</label>
    <div className="w-full border-b border-slate-300 focus-within:border-brand-500 bg-transparent px-0 py-2 transition-colors flex justify-between items-center">
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-sm font-medium text-slate-900 placeholder:text-slate-400 pr-2"
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            type="button"
            onClick={onClear}
            className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
            aria-label="Clear input"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  </div>
);

// COMPACTED: Reduced py-3 to py-2, text-base to text-sm
const CustomSelect = ({ 
  label, 
  options, 
  placeholder,
  searchable = false
}: { 
  label: string; 
  options: string[]; 
  placeholder: string;
  searchable?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery(selected);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected]);

  const filteredOptions = searchable 
    ? options.filter(opt => opt.toLowerCase().includes(query.toLowerCase()))
    : options;

  return (
    <div className="space-y-1 relative" ref={dropdownRef}>
      <label className="text-[11px] font-bold text-brand-700 uppercase tracking-wide">{label}</label>
      <div
        className={`w-full border-b bg-transparent px-0 py-2 transition-colors flex justify-between items-center ${isOpen ? 'border-brand-500' : 'border-slate-300 hover:border-slate-400'} ${searchable ? 'cursor-text' : 'cursor-pointer'}`}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(true);
            if (searchable) setQuery(""); 
          } else if (!searchable) {
            setIsOpen(false);
          }
        }}
      >
        <input 
          type="text"
          readOnly={!searchable}
          value={isOpen && searchable ? query : selected}
          onChange={(e) => {
            if (searchable) {
              setQuery(e.target.value);
              if (!isOpen) setIsOpen(true);
            }
          }}
          placeholder={placeholder}
          className={`w-full bg-transparent outline-none text-sm font-medium text-slate-900 placeholder:text-slate-400 ${searchable ? 'cursor-text' : 'cursor-pointer'} pr-2`}
        />
        <div className="flex items-center gap-1 shrink-0">
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <X 
                  className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer focus:outline-none" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected("");
                    setQuery("");
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <ChevronDown 
            className={`w-4 h-4 text-slate-400 transition-transform duration-300 cursor-pointer ${isOpen ? 'rotate-180 text-brand-500' : ''}`} 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
              if (!isOpen && searchable) setQuery("");
            }}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-1 bg-white rounded-xl shadow-xl border border-slate-100 max-h-48 overflow-y-auto z-50 py-1 custom-scrollbar"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <div
                  key={opt}
                  className="px-4 py-2 hover:bg-brand-50 cursor-pointer text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors"
                  onClick={() => {
                    setSelected(opt);
                    setQuery(opt);
                    setIsOpen(false);
                  }}
                >
                  {opt}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-sm font-medium text-slate-400">
                No results found
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const ContactGrid = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    message: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleClear = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: "" }));
  };

  return (
    // COMPACTED: py-24 -> py-12 lg:py-16
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* COMPACTED: gap-16 -> gap-10 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-center">
          
          {/* --- LEFT COLUMN: Contact Information --- */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 flex flex-col gap-4" // COMPACTED: gap-8 -> gap-4
          >
            <div className="mb-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                Reach out to Squad
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                Our telecom experts are strategically positioned around the globe to ensure you get the reliable support you need, exactly when you need it.
              </p>
            </div>

            {/* COMPACTED: p-8 -> p-6, w-14 -> w-12 */}
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white text-brand-600 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-slate-500 text-sm font-medium mb-1">For general inquiries & sales</p>
                <a href="mailto:info@squadtelekom.com" className="text-brand-600 text-sm font-bold hover:text-brand-700 transition-colors">
                  info@squadtelekom.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white text-brand-600 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Global Headquarters</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Squad Telekom LLC<br />
                  Wilmington, Delaware, US
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-start gap-4 group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white text-emerald-600 transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">24/7 Support</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Our technical assistance team is available round-the-clock for enterprise partners.
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* --- RIGHT COLUMN: Premium Contact Form --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            {/* COMPACTED: p-12 lg:p-16 -> p-8 lg:p-10 */}
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-visible">
              
              {/* Form Header - COMPACTED: mb-12 -> mb-6 */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Contact Us</h3>
                <p className="text-slate-500 text-sm font-medium">Any question or remarks? Just write us a message!</p>
              </div>

              {/* Form Fields - COMPACTED: space-y-8 -> space-y-5 */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <ClearableInput 
                    label="First Name" 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    onClear={() => handleClear('firstName')}
                  />
                  <ClearableInput 
                    label="Last Name" 
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    onClear={() => handleClear('lastName')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <ClearableInput 
                    label="Email" 
                    type="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onClear={() => handleClear('email')}
                  />
                  <ClearableInput 
                    label="Phone Number" 
                    type="tel"
                    placeholder="Your Number" 
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onClear={() => handleClear('phone')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <ClearableInput 
                    label="Job Title" 
                    placeholder="Job Title" 
                    value={formData.jobTitle}
                    onChange={(e) => handleChange('jobTitle', e.target.value)}
                    onClear={() => handleClear('jobTitle')}
                  />
                  <CustomSelect 
                    label="Primary Service Interest"
                    placeholder="Select a service"
                    options={[
                      "Voice Calls",
                      "Bulk SMS",
                      "RCS Messaging",
                      "WhatsApp Business Messaging",
                      "Viber Messaging",
                      "Email Services",
                      "Telegram"
                    ]}
                  />
                </div>

                <CustomSelect 
                  label="Country"
                  placeholder="Select a country"
                  options={countriesList}
                  searchable={true} 
                />

                <div className="space-y-1 relative">
                  <label className="text-[11px] font-bold text-brand-700 uppercase tracking-wide">Message</label>
                  <div className="relative border-b border-slate-300 focus-within:border-brand-500 transition-colors bg-transparent">
                    {/* COMPACTED: rows=2, min-h-[60px] */}
                    <textarea 
                      rows={2}
                      placeholder="Tell us how we can help..." 
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full bg-transparent px-0 py-2 pr-8 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none font-medium resize-y min-h-[60px]"
                    />
                    <AnimatePresence>
                      {formData.message && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.15 }}
                          type="button"
                          onClick={() => handleClear('message')}
                          className="absolute right-0 top-1 shrink-0 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                          aria-label="Clear message"
                        >
                          <X className="w-4 h-4" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Submit Block */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your data is secure.</span>
                  </div>
                  <Button variant="primary" className="w-full sm:w-auto py-2.5 px-8 shadow-lg shadow-brand-500/20 text-sm">
                    Send Message
                  </Button>
                </div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};