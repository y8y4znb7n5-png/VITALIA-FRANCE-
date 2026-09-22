import React from 'react';

interface VitaliaLogoProps {
  variant?: 'full' | 'symbol' | 'circle';
  theme?: 'navy' | 'light' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const VitaliaLogo: React.FC<VitaliaLogoProps> = ({
  variant = 'full',
  theme = 'navy',
  className = '',
  size = 'md',
}) => {
  const primaryColor = theme === 'white' ? '#FFFFFF' : '#0B2F63';
  const tealColor = '#55AAA5';

  if (variant === 'symbol') {
    const sizeMap = {
      sm: 'h-7 w-7',
      md: 'h-9 w-9',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    };

    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${className} inline-block`}
        aria-label="Vitalia Symbole"
      >
        {/* Left V shape */}
        <path
          d="M18 22L45 80L58 52L33 22H18Z"
          fill={primaryColor}
        />
        {/* Right diagonal stroke forming the A with V's right leg */}
        <path
          d="M58 52L72 80H86L64 36L58 52Z"
          fill={primaryColor}
        />
        {/* Teal horizontal bar at the base of A */}
        <rect
          x="50"
          y="74"
          width="24"
          height="6"
          rx="1"
          fill={tealColor}
        />
      </svg>
    );
  }

  if (variant === 'circle') {
    const sizeMap = {
      sm: 'h-8 w-8',
      md: 'h-11 w-11',
      lg: 'h-14 w-14',
      xl: 'h-20 w-20',
    };

    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} ${className} inline-block`}
        aria-label="Vitalia Cercle"
      >
        {/* Outer subtle elegant circle border */}
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke={primaryColor}
          strokeWidth="4"
          fill="none"
        />
        {/* Inner symbol centered */}
        <g transform="translate(14, 14) scale(0.92)">
          {/* Left V shape */}
          <path
            d="M20 25L46 78L58 52L34 25H20Z"
            fill={primaryColor}
          />
          {/* Right A diagonal */}
          <path
            d="M58 52L72 78H85L64 38L58 52Z"
            fill={primaryColor}
          />
          {/* Teal accent bar */}
          <rect
            x="50"
            y="72"
            width="22"
            height="6"
            rx="1"
            fill={tealColor}
          />
        </g>
      </svg>
    );
  }

  // Full Wordmark Logo "V I T A L I A"
  const heightMap = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-11',
    xl: 'h-16',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 450 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightMap[size]} w-auto`}
        aria-label="VITALIA Logo"
      >
        {/* Letter V */}
        <g id="letter-v">
          <path
            d="M20 12L42 58H50L72 12H61L46 44L31 12H20Z"
            fill={primaryColor}
          />
        </g>

        {/* Letter I */}
        <g id="letter-i-1">
          <rect x="98" y="12" width="10" height="46" fill={primaryColor} />
        </g>

        {/* Letter T */}
        <g id="letter-t">
          <rect x="130" y="12" width="46" height="8" fill={primaryColor} />
          <rect x="148" y="20" width="10" height="38" fill={primaryColor} />
        </g>

        {/* Letter A (with Teal horizontal foundation bar) */}
        <g id="letter-a-1">
          {/* Left and right chevron arms */}
          <path
            d="M202 58L224 12H232L254 58H243L228 26L213 58H202Z"
            fill={primaryColor}
          />
          {/* Teal accent bar between legs */}
          <rect
            x="218"
            y="52"
            width="20"
            height="6"
            rx="1"
            fill={tealColor}
          />
        </g>

        {/* Letter L */}
        <g id="letter-l">
          <path
            d="M280 12V58H316V50H290V12H280Z"
            fill={primaryColor}
          />
        </g>

        {/* Letter I */}
        <g id="letter-i-2">
          <rect x="340" y="12" width="10" height="46" fill={primaryColor} />
        </g>

        {/* Letter A (Stylized caret / apex without crossbar) */}
        <g id="letter-a-2">
          <path
            d="M374 58L396 12H404L426 58H415L400 26L385 58H374Z"
            fill={primaryColor}
          />
        </g>
      </svg>
    </div>
  );
};
