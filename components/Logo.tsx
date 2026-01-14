import React from 'react';
import logoIcon from '../assets/Images/Icon Logo_Color Transparent Background enlarged.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  return (
    <img 
      src={logoIcon} 
      alt="PerCon Solutions Logo" 
      className={className}
    />
  );
};