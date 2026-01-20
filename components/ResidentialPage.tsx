import React, { useEffect } from 'react';
import { Wifi, Home, Laptop, Smartphone, Lock, Activity } from 'lucide-react';

interface ResidentialPageProps {
  onOpenBooking: () => void;
}

export const ResidentialPage: React.FC<ResidentialPageProps> = ({ onOpenBooking }) => {
  useEffect(() => {
    document.title = 'Residential IT Services | Smart Home Solutions | PerCon Solutions';
  }, []);
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <span className="px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wide">
              Home Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Smart Tech for <br />
              <span className="text-cyan-400">Connected Living</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Experience the true potential of your home technology. From eliminating Wi-Fi dead zones to securing your family's personal data, we bring enterprise-grade support to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenBooking}
                className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
              >
                Book a Technician
              </button>
              <button className="px-6 py-3 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/10 p-3 rounded-lg text-green-400">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Wi-Fi Optimization</h3>
                    <p className="text-slate-400 text-sm">Full coverage analysis and mesh network installation.</p>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                    <Home size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Smart Home Setup</h3>
                    <p className="text-slate-400 text-sm">Integration of IoT devices, cameras, and voice assistants.</p>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-800"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400">
                    <Laptop size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Device Repair</h3>
                    <p className="text-slate-400 text-sm">Hardware upgrades, virus removal, and data recovery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Comprehensive Home Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Remote Tech Support', icon: Smartphone, desc: 'Instant help for software issues via secure remote connection.' },
              { title: 'Family Safety', icon: Lock, desc: 'Parental controls and content filtering setup for peace of mind.' },
              { title: 'System Health Check', icon: Activity, desc: 'Regular maintenance to keep your devices running fast.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-colors">
                <item.icon className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};