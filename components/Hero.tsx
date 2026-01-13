import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 backdrop-blur-sm">
          <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
            Future-Proof IT Infrastructure
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Scalable Tech for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            A Connected World
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10">
          We design next-generation migration strategies, integrate AI operations, and provide world-class education for maximum speed and uptime.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Explore Services <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 backdrop-blur-md text-white font-bold rounded-lg transition-all"
          >
            Contact Experts
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};