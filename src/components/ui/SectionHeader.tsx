import React from 'react';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  lightMode?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  align = "left", 
  lightMode = false,
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}: SectionHeaderProps) => {
  
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = lightMode ? "text-white drop-shadow-sm" : "text-slate-900";
  const subtitleColor = lightMode ? "text-brand-50/90" : "text-slate-500";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <h2 className={`text-4xl lg:text-5xl font-bold tracking-tight mb-6 ${titleColor} ${titleClassName}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-base font-medium leading-relaxed max-w-2xl ${subtitleColor} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};