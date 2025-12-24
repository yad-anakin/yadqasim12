"use client";

import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 8,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${
        disabled ? '' : 'animate-shine'
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(13, 52, 249, 0) 40%, rgba(86, 124, 249, 0.8) 50%, rgba(36, 100, 239, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
