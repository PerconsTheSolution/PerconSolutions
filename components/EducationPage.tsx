import React, { useEffect } from 'react';
import { GraduationCap, BookOpen, MonitorPlay, TrendingUp } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const EducationPage: React.FC = () => {
  useEffect(() => {
    document.title = 'IT Education & Training | PerCon Solutions';
  }, []);

  const programs = [
    {
      number: '01',
      title: 'Certification Prep',
      description: 'Guided study for CompTIA (A+, Network+, Security+), Cisco CCNA, and Cloud certifications. We break down complex topics into understandable, bite-sized modules.',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Practical Labs',
      description: "Don't just read about it—build it. Engage in real-world scenarios in safe virtualized environments to gain muscle memory for server management and network config.",
      icon: MonitorPlay,
    },
    {
      number: '03',
      title: 'Career Coaching',
      description: 'Resume building, mock interviews, and mentorship to help you land your first role or advance to the next level in your IT career path.',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-900/20 rounded-full mb-6">
            <GraduationCap className="text-cyan-400 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Education</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Empowering the next generation of tech leaders through hands-on training and mentorship.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ServiceCard key={program.number} {...program} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};