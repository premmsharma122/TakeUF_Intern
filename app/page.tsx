"use client";

import React, { useState } from 'react';
import { Hero } from '@/components/Hero'; 
import { Grid } from '@/components/Grid';
import { Notes } from '@/components/Notes';

export default function CalendarPage() {
  const [currentDate] = useState(new Date(2022, 0, 1));
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null, end: null,
  });
  const [notes, setNotes] = useState("");

  return (
    <main className="h-screen w-full bg-[#f3f3f1] flex flex-col items-center justify-center p-4 overflow-hidden">
      
      <div className="relative flex flex-col items-center max-h-full">
        
        {/* --- PHYSICAL HOOK (Nail & Wire) --- */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <div className="w-4 h-4 bg-[#222] rounded-full shadow-lg border-2 border-zinc-500" />
          <div className="flex justify-center -mt-[2.5px]">
            <div className="w-[1px] h-9 bg-zinc-400 rotate-[22deg] origin-top" />
            <div className="w-[1px] h-9 bg-zinc-400 -rotate-[22deg] origin-top" />
          </div>
        </div>

        {/* --- DITTO CALENDAR CONTAINER WITH REALISTIC SHADOW --- */}
        {/* We use a multi-layered offset shadow to match the reference look. */}
        <div className="w-[420px] max-h-[82vh] bg-white shadow-[25px_50px_100px_-20px_rgba(0,0,0,0.35),10px_15px_20px_-10px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden flex flex-col border-t-[10px] border-[#ecece8]">
          
          {/* TOP: Hero Section */}
          <div className="flex-[0_0_38%] min-h-[200px] relative border-b border-zinc-100">
             <Hero 
               currentMonth={currentDate} 
               imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
             />
          </div>

          {/* BOTTOM SECTION: Two-Column Layout (Notes left, Grid right) */}
          <div className="flex-1 p-6 bg-white overflow-hidden flex flex-col">
            
            {/* Weekday Labels (Aligned with Grid) */}
            <div className="grid grid-cols-7 mb-2 text-[9px] font-black text-blue-500 tracking-widest opacity-80 pl-[110px]">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                <span key={day} className="text-center">{day}</span>
              ))}
            </div>

            {/* Content Flex Area */}
            <div className="flex gap-6 min-h-0">
              {/* Left Column: Notes Section */}
              <div className="w-[110px] shrink-0 border-r border-zinc-100 pr-3">
                 <Notes notes={notes} setNotes={setNotes} />
              </div>

              {/* Right Column: Calendar Grid */}
              <div className="flex-1">
                <Grid currentDate={currentDate} range={range} setRange={setRange} />
              </div>
            </div>

            
          </div>
        </div>

        {/* --- EXTRA DEPTH SHADOW --- */}
        <div className="absolute -bottom-6 left-10 right-10 h-10 bg-black/10 blur-[50px] -z-10 rounded-full" />
      </div>
    </main>
  );
}