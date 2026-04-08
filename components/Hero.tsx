"use client";
import React from 'react';
import { format } from 'date-fns';

export const Hero = ({ currentMonth, imageUrl }: any) => {
  return (
    <div className="h-full w-full relative bg-zinc-200 overflow-hidden">
      
      
      <div className="absolute top-0 left-0 w-full h-4 flex justify-around px-4 z-30">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex gap-[1.5px]">
             <div className="w-[2px] h-6 bg-zinc-900 rounded-full -translate-y-3.5 shadow-md border-r border-zinc-600" />
             <div className="w-[2px] h-6 bg-zinc-900 rounded-full -translate-y-3.5 shadow-md border-r border-zinc-600" />
          </div>
        ))}
      </div>

      
      <img src={imageUrl} className="h-full w-full object-cover" alt="Mountainscape" />

      
      {/* We use specific percentage points to define the curved wave shape. */}
      <div 
        className="absolute inset-0 bg-blue-600/80 mix-blend-multiply z-10" 
        style={{ 
          clipPath: 'polygon(0 75%, 20% 70%, 50% 85%, 80% 68%, 100% 60%, 100% 100%, 0% 100%)' 
        }}
      />
      <div 
        className="absolute inset-0 bg-blue-400/30 z-10" 
        style={{ 
          clipPath: 'polygon(0 85%, 60% 78%, 100% 92%, 100% 100%, 0% 100%)' 
        }}
      />

      
      <div className="absolute bottom-6 right-8 text-white text-right leading-none z-20">
        <h1 className="text-5xl font-light tracking-tighter uppercase drop-shadow-md">
          {format(currentMonth, 'MMMM')}
        </h1>
        <p className="text-xl font-bold opacity-60 mt-1.5">{format(currentMonth, 'yyyy')}</p>
      </div>

      {/* 5. PAPER TEXTURE OVERLAY (For realism) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-20" />
    </div>
  );
};