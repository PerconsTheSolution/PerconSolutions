import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* House/Chevron shape - upward pointing, filled with cyan */}
      <path 
        d="M100 30 L170 85 L170 175 L30 175 L30 85 Z" 
        fill="#22d3ee"
      />
    </svg>
  );
};