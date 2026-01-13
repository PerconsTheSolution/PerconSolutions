import React, { Suspense, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { SmallBusinessPage } from './components/SmallBusinessPage';
import { ResidentialPage } from './components/ResidentialPage';
import { EducationPage } from './components/EducationPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* 3D Background wrapped in Suspense for loading states */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-950 -z-10" />}>
        <ThreeBackground />
      </Suspense>

      <Navbar onNavigate={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Services />
          </>
        )}
        
        {currentPage === 'business' && <SmallBusinessPage />}
        {currentPage === 'residential' && <ResidentialPage />}
        {currentPage === 'education' && <EducationPage />}
      </main>

      <Contact />
    </div>
  );
};

export default App;