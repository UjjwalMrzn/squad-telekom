interface SectionBadgeProps {
  text: string;
  className?: string; // Allow custom overrides if needed
}

export const SectionBadge = ({ text, className = "" }: SectionBadgeProps) => {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-brand-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-slate-200 shadow-sm ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
      </span>
      {text}
    </div>
  );
};