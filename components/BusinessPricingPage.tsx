import React, { useEffect } from 'react';

export const BusinessPricingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Small Business & Enterprise Pricing | PerCon Solutions';
  }, []);
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
          Small Business & Enterprise <span className="text-cyan-400">Pricing</span>
        </h1>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Comprehensive IT solutions tailored for your business needs. From network security to cloud infrastructure, 
          we provide enterprise-grade services at competitive rates.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Network Security Audit</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$299</div>
            <p className="text-slate-300 text-sm mb-4">Complete security assessment and recommendations</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Network vulnerability scan</li>
              <li>• Security policy review</li>
              <li>• Detailed report with recommendations</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Monthly IT Support</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$150/mo</div>
            <p className="text-slate-300 text-sm mb-4">Ongoing support for up to 10 devices</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Remote troubleshooting</li>
              <li>• Software updates & maintenance</li>
              <li>• Priority email support</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Migration</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
            <p className="text-slate-300 text-sm mb-4">Full cloud infrastructure setup and migration</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Assessment & planning</li>
              <li>• Data migration</li>
              <li>• Training & support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};