import React, { useEffect } from 'react';

export const EducationPricingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'IT Education & Training Pricing | PerCon Solutions';
  }, []);
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
          IT Education <span className="text-cyan-400">Pricing</span>
        </h1>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Professional IT training and certification programs designed to advance your career. 
          Learn from industry experts with hands-on experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Network Fundamentals</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$299</div>
            <p className="text-slate-300 text-sm mb-4">8-week course covering networking basics</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• OSI model & protocols</li>
              <li>• Hands-on lab sessions</li>
              <li>• Certificate of completion</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity Essentials</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$499</div>
            <p className="text-slate-300 text-sm mb-4">Comprehensive security training program</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Threat analysis & prevention</li>
              <li>• Security tools & techniques</li>
              <li>• Real-world case studies</li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-4">One-on-One Tutoring</h3>
            <div className="text-3xl font-bold text-cyan-400 mb-4">$75/hr</div>
            <p className="text-slate-300 text-sm mb-4">Personalized IT training sessions</p>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>• Customized curriculum</li>
              <li>• Flexible scheduling</li>
              <li>• Certification prep</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};