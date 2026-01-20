import React, { useEffect } from 'react';

export const ResidentialPricingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Residential IT Services Pricing | PerCon Solutions';
  }, []);
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
          Residential <span className="text-cyan-400">Pricing</span>
        </h1>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Professional home technology services at affordable rates. From Wi-Fi optimization to smart home setup, 
          we bring enterprise-quality solutions to your home.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Wi-Fi Optimization</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$89</div>
            <p className="text-slate-300 text-sm mb-4">Complete home network analysis and optimization</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Wi-Fi coverage assessment</li>
              <li>• Router configuration</li>
              <li>• Speed optimization</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Smart Home Setup</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$149</div>
            <p className="text-slate-300 text-sm mb-4">Professional smart device installation and configuration</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Device installation</li>
              <li>• App setup & training</li>
              <li>• Automation configuration</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Computer Tune-up</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$69</div>
            <p className="text-slate-300 text-sm mb-4">Complete system cleaning and optimization</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• System cleanup & optimization</li>
              <li>• Software updates</li>
              <li>• Security scan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};