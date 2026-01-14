import React, { useId } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const uniqueId = useId();
  const gradientId = `logo-gradient-${uniqueId}`;
  const glowId = `logo-glow-${uniqueId}`;

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      role="img"
      aria-label="Percon Solutions logo"
    >
      <svg
        className="h-12 w-12 drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="12" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="0.45" stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
          <radialGradient id={glowId} cx="50%" cy="35%" r="60%">
            <stop offset="0" stopColor="rgba(244, 244, 255, 0.95)" />
            <stop offset="1" stopColor="rgba(14, 165, 233, 0)" />
          </radialGradient>
        </defs>
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="23" fill={`url(#${glowId})`} stroke="rgba(14,165,233,0.25)" strokeWidth="0.5" />
          <path
            d="M18 14.5h15.2c9.3 0 16.8 7.5 16.8 16.8S42.5 48 33.2 48h-6.4v9.5H18z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M26.8 22.3h6.4c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9h-6.4z"
            fill="rgba(15, 118, 110, 0.2)"
          />
          <path
            d="M18 14.5h9.2c9.5 0 17.3 7.8 17.3 17.3S36.7 49.1 27.2 49.1H18"
            stroke="rgba(6,182,212,0.8)"
            strokeWidth="3.2"
          />
          <path
            d="M27 31.6h6.2c1.7 0 3-1.3 3-3s-1.3-3-3-3H27z"
            fill="#0f172a"
            opacity="0.9"
          />
        </g>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Percon
        </span>
        <span className="text-sm uppercase tracking-[0.3em] text-cyan-500">
          Solutions
        </span>
      </div>
    </div>
  );
};