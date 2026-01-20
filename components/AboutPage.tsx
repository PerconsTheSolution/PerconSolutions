import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
          About <span className="text-cyan-400">Percon Solutions</span>
        </h1>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          At PerCon Solutions, we are dedicated to bridging the gap between complex technology and everyday user needs. 
          Whether it's optimizing your home network or streamlining small business IT infrastructure, our mission is to provide 
          reliable, enterprise-grade solutions that are accessible to everyone.
        </p>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
           Our team of experts brings years of experience in network security, system administration, and technical support 
           to ensure your digital environment is secure, efficient, and ready for the future.
        </p>
      </div>
    </div>
  );
};
