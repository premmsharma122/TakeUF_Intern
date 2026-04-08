"use client";

import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Grid } from '@/components/Grid';
import { Notes } from '@/components/Notes';

export default function CalendarPage() {
  const [currentDate] = useState(new Date(2022, 0, 1));
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [notes, setNotes] = useState('');

  return (
    <main className="min-h-screen w-full bg-[#e8e8e4] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">

      {/* Outer wrapper — centers everything and provides vertical breathing room */}
      <div className="relative flex flex-col items-center w-full max-w-[480px]">

        {/* ── WIRE BINDING ── */}
        <div
          aria-hidden="true"
          className="absolute -top-2 left-0 right-0 flex justify-around px-3 z-30"
          style={{ top: '-10px' }}
        >
          {Array.from({ length: 22 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center" style={{ width: '10px' }}>
              {/* Top arch of coil */}
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  border: '2px solid #1a1a1a',
                  borderBottom: 'none',
                  borderRadius: '5px 5px 0 0',
                  marginBottom: '-1px',
                }}
              />
              {/* Bottom arch of coil */}
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  border: '2px solid #1a1a1a',
                  borderTop: 'none',
                  borderRadius: '0 0 5px 5px',
                  marginTop: '-1px',
                }}
              />
            </div>
          ))}
        </div>

        {/* ── NAIL / HOOK ── */}
        <div
          className="absolute z-40 flex flex-col items-center"
          style={{ top: '-38px', left: '50%', transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          {/* Nail head */}
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #888, #222)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
              border: '1px solid #555',
            }}
          />
          {/* V-shaped wire */}
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="0" x2="4" y2="28" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="18" y1="0" x2="32" y2="28" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        
        <div
          className="w-full bg-white rounded-sm flex flex-col overflow-hidden"
          style={{
            marginTop: '12px',
            boxShadow:
              '0 40px 80px -10px rgba(0,0,0,0.38), 0 16px 32px -8px rgba(0,0,0,0.22), 0 4px 8px rgba(0,0,0,0.12)',
            
            borderTop: '12px solid #deded8',
          }}
        >
          {/* ── HERO ── */}
          <Hero
            currentMonth={currentDate}
            imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
          />

          
          <div className="flex flex-col p-4 sm:p-5 md:p-6 bg-white">

            {/* Weekday header row */}
            <div className="grid grid-cols-7 mb-1" style={{ paddingLeft: 'clamp(80px, 22%, 120px)' }}>
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <span
                  key={day}
                  className={`text-center font-black tracking-widest ${
                    day === 'SAT' || day === 'SUN' ? 'text-blue-500' : 'text-blue-500'
                  }`}
                  style={{ fontSize: 'clamp(7px, 1.6vw, 10px)' }}
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Notes + Grid row */}
            <div className="flex gap-3 sm:gap-4 md:gap-6" style={{ minHeight: 0 }}>

              {/* Notes column */}
              <div
                className="shrink-0 border-r border-zinc-200 pr-2 sm:pr-3"
                style={{ width: 'clamp(80px, 22%, 120px)' }}
              >
                <Notes notes={notes} setNotes={setNotes} />
              </div>

              {/* Calendar grid column */}
              <div className="flex-1 min-w-0">
                <Grid currentDate={currentDate} range={range} setRange={setRange} />
              </div>
            </div>

          </div>
        </div>

        
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 -z-10"
          style={{
            height: '18px',
            background: '#d0d0cc',
            borderRadius: '0 0 2px 2px',
            transform: 'translateY(6px) scaleX(0.97)',
            boxShadow: '0 6px 20px -4px rgba(0,0,0,0.2)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 -z-20"
          style={{
            height: '18px',
            background: '#c8c8c4',
            borderRadius: '0 0 2px 2px',
            transform: 'translateY(12px) scaleX(0.94)',
            boxShadow: '0 6px 20px -4px rgba(0,0,0,0.15)',
          }}
        />

      </div>
    </main>
  );
}