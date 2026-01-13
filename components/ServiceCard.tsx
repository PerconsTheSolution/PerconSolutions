import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="group relative p-8 bg-slate-900/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Background Gradient Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-transparent group-hover:from-cyan-500/10 transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-cyan-900/20 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
            <Icon size={32} className="text-cyan-400 group-hover:text-cyan-300" />
          </div>
          <span className="text-4xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none font-outline-2">
            {number}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};