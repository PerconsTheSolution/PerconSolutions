import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <img 
      src="/assets/Images/Icon Logo_Color Transparent Background enlarged.png"
      alt="Percon Solutions Logo"
      className={className}
    />
  );
};