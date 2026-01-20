import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  if (iconOnly) {
    return (
      <img
        src="/Images/Icon Logo_Color Transparent Background enlarged.png"
        alt="PerCon Solutions"
        className={`drop-shadow-[0_0_12px_rgba(34,211,238,0.25)] ${className || 'h-10 w-10'}`}
      />
    );
  }

  // Use icon + text for navbar to match branding
  return (
    <div className="flex items-center gap-3 flex-nowrap">
      <img
        src="/Images/Icon Logo_Color Transparent Background enlarged.png"
        alt="PerCon Solutions"
        className={`drop-shadow-[0_0_12px_rgba(34,211,238,0.25)] flex-shrink-0 ${className || 'h-10 w-10'}`}
      />
      <span className="text-xl font-semibold tracking-tight whitespace-nowrap">
        <span className="text-white">PerCon</span>
        <span className="text-cyan-400 ml-1">Solutions</span>
      </span>
    </div>
  );
};
