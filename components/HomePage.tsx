import React, { useEffect } from 'react';
import { ArrowRight, ChevronDown, Cloud, Brain, Building2, Home as HomeIcon, GraduationCap } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'PerCon Solutions | Innovative Technology. Unique Strategies.';
  }, []);
  const services = [
    {
      number: '01',
      title: 'Cloud Migration',
      description: 'Grow with scalable infrastructure. We design next-generation migration strategies for maximum speed and uptime.',
      icon: Cloud,
    },
    {
      number: '02',
      title: 'AI Integration',
      description: 'Future-Proof your operations. From tool integration to staff training, ensure your team is ready to leverage AI.',
      icon: Brain,
    },
    {
      number: '03',
      title: 'Enterprise & MSP',
      description: "Close the talent gap. Whether it's IT support or workload management, we provide flexible expertise.",
      icon: Building2,
    },
    {
      number: '04',
      title: 'Help at Home',
      description: 'Smart solutions for living. Improving wireless performance and IoT device installation for a connected home.',
      icon: HomeIcon,
    },
    {
      number: '05',
      title: 'IT Education',
      description: 'Develop the next generation. Hands-on learning experiences to help individuals gain real-world IT skills.',
      icon: GraduationCap,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
              Innovative Technology. Unique Strategies.
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            PERCON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              SOLUTIONS
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

      {/* Core Features Section */}
      <section id="services" className="relative py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Core Features
            </h2>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive technology solutions designed to bridge the gap between complex innovation and practical application.
            </p>
          </div>

          {/* Grid Layout: 3 Top, 2 Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.slice(3).map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
