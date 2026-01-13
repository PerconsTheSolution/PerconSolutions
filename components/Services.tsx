import React from 'react';
import { Cloud, Brain, Building2, Home, GraduationCap } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Cloud Migration & Virtualization',
      description: 'Grow with scalable infrastructure. We design next-generation migration strategies for maximum speed and uptime.',
      icon: Cloud,
    },
    {
      number: '02',
      title: 'AI Integration & Training',
      description: 'Future-Proof your operations. From tool integration to staff training, ensure your team is ready to leverage AI.',
      icon: Brain,
    },
    {
      number: '03',
      title: 'Enterprise & MSP Support',
      description: "Close the talent and capacity gap. Whether it's IT support or workload management, we provide flexible expertise.",
      icon: Building2,
    },
    {
      number: '04',
      title: 'Help at Home',
      description: 'Smart solutions for living. Improving network performance and Smart Home enhancements.',
      icon: Home,
    },
    {
      number: '05',
      title: 'IT Education',
      description: 'Develop the next generation. Hands-on learning experiences to help individuals gain real-world IT skills.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions designed to bridge the gap between complex innovation and practical application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};