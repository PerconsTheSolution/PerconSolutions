import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src="/assets/Images/Logo with Text_Horizontal.png"
      alt="Percon Solutions Logo"
      className={className || "h-12 w-auto"}
      style={{ minWidth: '200px' }}
    />
  );
};