import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <img 
      src="/assets/Images/Logo with Text_Website Horizontal.svg"
      alt="Percon Solutions Logo"
      className={className}
    />
  );
};