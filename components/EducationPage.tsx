import React from 'react';
import { GraduationCap, BookOpen, Award, Users, Video, Calendar } from 'lucide-react';

export const EducationPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-900/20 rounded-full mb-6">
            <GraduationCap className="text-cyan-400 w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Master the Future of IT
          </h1>
          <p className="text-xl text-slate-300">
            Bridging the gap between theoretical knowledge and real-world application. Our hands-on training programs are designed to launch careers.
          </p>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-10"></div>
             {/* Abstract tech background */}
            <div className="absolute inset-0 bg-slate-800 z-0">
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
            
            <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[300px]">
              <h3 className="text-2xl font-bold text-white mb-2">Certification Prep</h3>
              <p className="text-slate-300 mb-4">Intensive bootcamps for CompTIA A+, Network+, Security+, and Cisco CCNA.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-400">
                <li className="flex items-center gap-2"><Award size={16} className="text-cyan-400" /> 95% Pass Rate</li>
                <li className="flex items-center gap-2"><Video size={16} className="text-cyan-400" /> Recorded Sessions</li>
              </ul>
              <button className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors">
                View Syllabus
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-900/20 rounded-lg">
                  <Users className="text-purple-400 w-8 h-8" />
                </div>
                <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1-on-1 Mentorship</h3>
              <p className="text-slate-400 mb-6">
                Get paired with a senior industry professional who will guide your career path, review your code, and help you land your dream job.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-slate-950 rounded-lg border border-slate-800">
                   <Calendar className="text-slate-500 mr-3" />
                   <div>
                     <p className="text-white font-medium">Weekly Strategy Calls</p>
                     <p className="text-xs text-slate-500">1 hour • Google Meet</p>
                   </div>
                </div>
                <div className="flex items-center p-3 bg-slate-950 rounded-lg border border-slate-800">
                   <BookOpen className="text-slate-500 mr-3" />
                   <div>
                     <p className="text-white font-medium">Personalized Roadmap</p>
                     <p className="text-xs text-slate-500">Tailored to your goals</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-800 pt-12">
           <div>
             <div className="text-3xl font-bold text-white mb-1">500+</div>
             <div className="text-sm text-slate-500 uppercase tracking-wide">Students Trained</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-white mb-1">50+</div>
             <div className="text-sm text-slate-500 uppercase tracking-wide">Corporate Partners</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-white mb-1">24/7</div>
             <div className="text-sm text-slate-500 uppercase tracking-wide">Lab Access</div>
           </div>
           <div>
             <div className="text-3xl font-bold text-white mb-1">100%</div>
             <div className="text-sm text-slate-500 uppercase tracking-wide">Satisfaction</div>
           </div>
        </div>

      </div>
    </div>
  );
};