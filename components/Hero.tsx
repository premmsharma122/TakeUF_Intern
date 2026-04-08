"use client";
import React from 'react';
import { format } from 'date-fns';

export const Hero = ({ currentMonth, imageUrl }: { currentMonth: Date; imageUrl: string }) => {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-300" style={{ aspectRatio: '4 / 2.5' }}>

      {/* ── PHOTO ── */}
      <img
        src={imageUrl}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt="Calendar hero"
        draggable={false}
      />

      

      {/* Main solid blue fill — right-side trapezoid */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: '#1565c0',
          clipPath: 'polygon(35% 72%, 62% 60%, 100% 68%, 100% 100%, 0% 100%, 0% 88%)',
        }}
      />

      {/* Left lighter-blue fill */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: '#1976d2',
          clipPath: 'polygon(0% 88%, 35% 72%, 62% 60%, 62% 100%, 0% 100%)',
        }}
      />

      
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'rgba(255,255,255,0.07)',
          clipPath: 'polygon(0% 92%, 40% 86%, 70% 78%, 100% 84%, 100% 100%, 0% 100%)',
        }}
      />

      {/* ── YEAR + MONTH TEXT ── */}
      <div
        className="absolute z-20 text-right"
        style={{ bottom: '10%', right: '5%' }}
      >
        {/* Year — small, light weight */}
        <p
          className="text-white leading-none"
          style={{
            fontSize: 'clamp(13px, 3.5vw, 20px)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            opacity: 0.95,
            marginBottom: '2px',
          }}
        >
          {format(currentMonth, 'yyyy')}
        </p>
        {/* Month — large, bold, uppercase */}
        <h1
          className="text-white leading-none uppercase"
          style={{
            fontSize: 'clamp(22px, 7vw, 46px)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            textShadow: '0 1px 4px rgba(0,0,0,0.18)',
          }}
        >
          {format(currentMonth, 'MMMM')}
        </h1>
      </div>

     
      <div
        className="absolute top-0 left-0 right-0 z-30"
        style={{ height: '4px', background: 'rgba(0,0,0,0.06)' }}
      />

    </div>
  );
};