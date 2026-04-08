"use client";
import React from 'react';

export const Notes = ({ notes, setNotes }: any) => {
  return (
    <div className="w-full h-full flex flex-col">
      
      <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-4">
        Notes
      </h3>
      
      <div className="relative flex-1">
       
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Jot down some memos..."
          className="w-full h-full bg-transparent border-none focus:ring-0 p-0 text-zinc-600 text-sm leading-[28px] resize-none outline-none overflow-y-auto"
          style={{
            backgroundImage: 'linear-gradient(transparent, transparent 27px, #e5e7eb 27px)',
            backgroundSize: '100% 28px',
            backgroundAttachment: 'local' 
          }}
        />
      </div>
    </div>
  );
};