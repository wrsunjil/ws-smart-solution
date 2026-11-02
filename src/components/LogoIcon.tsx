import React from 'react';

export default function LogoIcon({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className} group-hover:scale-105 transition-transform duration-200`}>
      <svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="logoBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="logoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Squircle Background Badge */}
        <rect x="32" y="32" width="448" height="448" rx="112" fill="url(#logoBlue)" />

        {/* Subtle Tech Circuit Guide Lines */}
        <path
          d="M96 256h48 M368 256h48 M256 96v48 M256 368v48"
          stroke="#93c5fd"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.35"
        />
        <circle cx="144" cy="256" r="6" fill="#93c5fd" opacity="0.6" />
        <circle cx="368" cy="256" r="6" fill="#93c5fd" opacity="0.6" />
        <circle cx="256" cy="144" r="6" fill="#93c5fd" opacity="0.6" />
        <circle cx="256" cy="368" r="6" fill="#93c5fd" opacity="0.6" />

        {/* Geometric Stylized 'W' Architecture */}
        <path
          d="M128 176 L192 344 L256 224 L320 344 L384 176"
          stroke="#ffffff"
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Energy Flow Accent (Cyan) */}
        <path
          d="M192 344 L256 224 L320 344"
          stroke="url(#logoCyan)"
          strokeWidth="36"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Microchip / Smart Battery Connection Nodes */}
        <circle cx="128" cy="176" r="16" fill="#38bdf8" stroke="#ffffff" strokeWidth="6" />
        <circle cx="384" cy="176" r="16" fill="#38bdf8" stroke="#ffffff" strokeWidth="6" />
        <circle cx="256" cy="224" r="14" fill="#ffffff" />
        <circle cx="192" cy="344" r="12" fill="#ffffff" />
        <circle cx="320" cy="344" r="12" fill="#ffffff" />
      </svg>
    </div>
  );
}

