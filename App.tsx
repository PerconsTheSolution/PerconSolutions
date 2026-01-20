import React, { Suspense, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Contact } from './components/Contact';
import { SmallBusinessPage } from './components/SmallBusinessPage';
import { ResidentialPage } from './components/ResidentialPage';
import { EducationPage } from './components/EducationPage';
import { BusinessPricingPage } from './components/BusinessPricingPage';
import { ResidentialPricingPage } from './components/ResidentialPricingPage';
import { EducationPricingPage } from './components/EducationPricingPage';
import { BookingModal } from './components/BookingModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen relative text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* 3D Background wrapped in Suspense for loading states */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-950 -z-10" />}>
        <ThreeBackground />
      </Suspense>

      <Navbar onNavigate={setCurrentPage} onOpenBooking={openBooking} />
      
      <main>
        {currentPage === 'home' && <HomePage />}
        
        {currentPage === 'business' && <SmallBusinessPage />}
        {currentPage === 'residential' && <ResidentialPage onOpenBooking={openBooking} />}
        {currentPage === 'education' && <EducationPage />}
        
        {currentPage === 'business-pricing' && <BusinessPricingPage />}
        {currentPage === 'residential-pricing' && <ResidentialPricingPage />}
        {currentPage === 'education-pricing' && <EducationPricingPage />}
      </main>

      <Contact onOpenBooking={openBooking} />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default App;