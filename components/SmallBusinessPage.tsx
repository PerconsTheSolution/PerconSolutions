import React from 'react';
import { Server, ShieldCheck, BarChart3, Clock, Database, Globe } from 'lucide-react';

export const SmallBusinessPage: React.FC = () => {
  const features = [
    {
      title: 'Managed IT Services',
      description: 'Proactive monitoring and maintenance of your entire IT infrastructure to prevent downtime before it happens.',
      icon: Clock
    },
    {
      title: 'Cloud Migration Strategy',
      description: 'Seamless transition to Azure, AWS, or Google Cloud with minimal disruption to your daily operations.',
      icon: Database
    },
    {
      title: 'Cybersecurity Audits',
      description: 'Enterprise-grade vulnerability assessments and penetration testing to secure your sensitive business data.',
      icon: ShieldCheck
    },
    {
      title: 'Infrastructure Virtualization',
      description: 'Reduce hardware costs and improve scalability by virtualizing your servers and workstations.',
      icon: Server
    },
    {
      title: 'Global Connectivity',
      description: 'SD-WAN and VPN solutions to keep your remote teams connected securely from anywhere in the world.',
      icon: Globe
    },
    {
      title: 'Data Analytics Integration',
      description: 'Leverage AI-driven analytics tools to gain actionable insights from your business data.',
      icon: BarChart3
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Enterprise Solutions</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            Small Business & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Enterprise Infrastructure
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Scalable, secure, and efficient technology solutions tailored to grow with your business. From startups to established enterprises, we ensure your tech works for you.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-cyan-900/20 rounded-lg inline-block mb-4">
                <feature.icon className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to upgrade your infrastructure?</h2>
              <p className="text-slate-400">Schedule a free consultation with our enterprise architects today.</p>
            </div>
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap">
              Contact Enterprise Sales
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};