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
      {/* Hexagon Border */}
      <path 
        d="M100 10 L173.2 55 L173.2 145 L100 190 L26.8 145 L26.8 55 Z" 
        stroke="#22d3ee" 
        strokeWidth="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Integrated PS Logo - Blocky geometric style matching actual logo */}
      <g fill="#22d3ee">
        {/* Letter P - Left vertical bar */}
        <rect x="50" y="60" width="22" height="80" rx="2"/>
        
        {/* P - Top horizontal section */}
        <rect x="50" y="60" width="60" height="22" rx="2"/>
        
        {/* P - Top right vertical section */}
        <rect x="88" y="60" width="22" height="42" rx="2"/>
        
        {/* P - Middle horizontal connecting section */}
        <rect x="50" y="80" width="60" height="22" rx="2"/>
        
        {/* Letter S - Top horizontal bar */}
        <rect x="115" y="60" width="35" height="22" rx="2"/>
        
        {/* S - Top left vertical */}
        <rect x="115" y="60" width="22" height="42" rx="2"/>
        
        {/* S - Middle horizontal bar */}
        <rect x="115" y="80" width="35" height="22" rx="2"/>
        
        {/* S - Bottom right vertical */}
        <rect x="128" y="102" width="22" height="36" rx="2"/>
        
        {/* S - Bottom horizontal bar */}
        <rect x="115" y="118" width="35" height="22" rx="2"/>
      </g>
    </svg>
  );
};