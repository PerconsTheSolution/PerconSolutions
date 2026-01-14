import React from 'react';
import logoIcon from '../assets/Images/Icon Logo_Color Transparent Background enlarged.png';
import logoWithText from '../assets/Images/Logo with Text_Horizontal.png';

interface LogoProps {
  className?: string;
  variant?: 'icon' | 'full';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'icon' }) => {
  const logoSrc = variant === 'full' ? logoWithText : logoIcon;
  
  return (
    <img 
      src={logoSrc} 
      alt="PerCon Solutions Logo" 
      className={`${className} object-contain`}
    />
  );
};