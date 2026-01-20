import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl h-[90vh] mx-4 bg-slate-900 rounded-2xl shadow-2xl border border-cyan-900/30 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h2 className="text-xl font-semibold text-white">Book Your Appointment</h2>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close booking modal"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Booking Content/Link */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Schedule Your Appointment</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              To ensure a secure booking experience, please proceed to our official booking page.
            </p>
          </div>
          
          <a 
            href="https://outlook.office.com/book/PerConSolutions@perconsolutions.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors shadow-lg shadow-cyan-900/20"
          >
            Open Booking Page
          </a>
          
          <p className="text-sm text-slate-500">
            Opens in a new window
          </p>
        </div>
      </div>
    </div>
  );
};
