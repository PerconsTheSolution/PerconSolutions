import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Hexagon Border */}
      <path 
        d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 L50 5Z" 
        stroke="#22d3ee" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Letter P */}
      <path 
        d="M30 35 V75 M30 35 H55 C65 35 65 55 55 55 H30" 
        stroke="#22d3ee" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      
      {/* Letter S (Stylized to fit right side) */}
      <path 
        d="M75 35 H60 C50 35 50 45 60 45 H65 C75 45 75 55 65 55 H50" 
        stroke="#22d3ee" 
        strokeWidth="8" 
        strokeLinecap="round"
        className="opacity-0 hidden" // Simplifying strictly to PS shape might be complex in pure SVG path without exact coordinates, using text fallback for clarity if preferred, but let's try a geometric approximation below
      />
      
      {/* Geometric P and S inside the hex based on the image description logic */}
      {/* Vertical center divider logic from logo attached */}
      <path d="M50 25 V85" stroke="#22d3ee" strokeWidth="0" /> 
      
      {/* Left side P shape */}
      <path d="M28 35 L28 75 L48 75 L48 55 L28 55" fill="#22d3ee" fillOpacity="0.2" />
      <path d="M28 35 L48 35 L48 55" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28 35 L28 75" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Right side S shape */}
      <path d="M72 35 L52 35 L52 55 L72 55 L72 75 L52 75" stroke="#22d3ee" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
};