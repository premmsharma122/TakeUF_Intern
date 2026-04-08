"use client";
import React from 'react';

interface NotesProps {
  notes: string;
  setNotes: (v: string) => void;
}

const LINE_HEIGHT_PX = 22; 

export const Notes = ({ notes, setNotes }: NotesProps) => {
  return (
    <div className="w-full h-full flex flex-col">

      {/* "Notes" label — matches reference */}
      <h3
        style={{
          fontSize: 'clamp(8px, 1.8vw, 10px)',
          fontWeight: 700,
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          marginBottom: '8px',
        }}
      >
        Notes
      </h3>

      {/* Ruled textarea */}
      <div className="relative flex-1" style={{ minHeight: '100px' }}>

        
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(
              to bottom,
              transparent,
              transparent ${LINE_HEIGHT_PX - 1}px,
              #e5e7eb ${LINE_HEIGHT_PX - 1}px,
              #e5e7eb ${LINE_HEIGHT_PX}px
            )`,
            backgroundPosition: '0 26px', 
            pointerEvents: 'none',
          }}
        />

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            border: 'none',
            resize: 'none',
            outline: 'none',
            fontSize: 'clamp(9px, 2vw, 12px)',
            color: '#52525b',
            lineHeight: `${LINE_HEIGHT_PX}px`,
            padding: 0,
            paddingTop: '26px', 
            overflowY: 'auto',
            fontFamily: 'inherit',
          }}
        />
      </div>

    </div>
  );
};