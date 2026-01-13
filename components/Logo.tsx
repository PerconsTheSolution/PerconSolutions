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
      {/* House/Chevron Border - upward pointing, matching reference logo */}
      <path 
        d="M100 30 L170 85 L170 175 L30 175 L30 85 Z" 
        stroke="#22d3ee" 
        strokeWidth="18" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* PS Letters - Blocky style matching reference logo */}
      <g fill="#22d3ee">
        {/* Letter P - Left vertical bar */}
        <rect x="50" y="75" width="20" height="70" rx="3"/>
        
        {/* P - Top horizontal section */}
        <rect x="50" y="75" width="50" height="20" rx="3"/>
        
        {/* P - Top right vertical section */}
        <rect x="80" y="75" width="20" height="35" rx="3"/>
        
        {/* P - Middle horizontal connecting section */}
        <rect x="50" y="90" width="50" height="20" rx="3"/>
        
        {/* Letter S - Top horizontal bar */}
        <rect x="110" y="75" width="40" height="20" rx="3"/>
        
        {/* S - Top left vertical */}
        <rect x="110" y="75" width="20" height="35" rx="3"/>
        
        {/* S - Middle horizontal bar */}
        <rect x="110" y="90" width="40" height="20" rx="3"/>
        
        {/* S - Bottom right vertical */}
        <rect x="130" y="110" width="20" height="35" rx="3"/>
        
        {/* S - Bottom horizontal bar */}
        <rect x="110" y="125" width="40" height="20" rx="3"/>
      </g>
    </svg>
  );
};