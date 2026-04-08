"use client";

import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  getDay,
} from 'date-fns';

interface GridProps {
  currentDate: Date;
  range: { start: Date | null; end: Date | null };
  setRange: (r: { start: Date | null; end: Date | null }) => void;
}


const isWeekend = (day: Date) => {
  const d = getDay(day);
  return d === 0 || d === 6;
};

export const Grid = ({ currentDate, range, setRange }: GridProps) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday-first
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  const handleDateClick = (day: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
    } else {
      if (day < range.start) {
        setRange({ start: day, end: range.start });
      } else {
        setRange({ ...range, end: day });
      }
    }
  };

  return (
    <div className="grid grid-cols-7" style={{ rowGap: '2px' }}>
      {calendarDays.map((day, idx) => {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const weekend = isWeekend(day);
        const isStart = range.start && isSameDay(day, range.start);
        const isEnd = range.end && isSameDay(day, range.end);
        const inRange =
          range.start &&
          range.end &&
          isWithinInterval(day, { start: range.start, end: range.end });

        let textColor: string;
        if (!isCurrentMonth) {
          textColor = '#c8c8c8'; // very light — out of month
        } else if (weekend) {
          textColor = '#2563eb'; // blue for Sat/Sun
        } else {
          textColor = '#3d3d3d';
        }

        return (
          <button
            key={idx}
            onClick={() => handleDateClick(day)}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(9px, 2.2vw, 13px)',
              fontWeight: isCurrentMonth ? 500 : 400,
              color: isStart || isEnd ? '#fff' : textColor,
              background: isStart || isEnd
                ? '#2563eb'
                : inRange
                ? '#dbeafe'
                : 'transparent',
              borderRadius: isStart
                ? '4px 0 0 4px'
                : isEnd
                ? '0 4px 4px 0'
                : inRange
                ? '0'
                : '3px',
              height: 'clamp(20px, 5vw, 32px)',
              width: '100%',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.12s, color 0.12s',
              outline: 'none',
              zIndex: isStart || isEnd ? 2 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isStart && !isEnd) {
                (e.currentTarget as HTMLButtonElement).style.background = '#eff6ff';
              }
            }}
            onMouseLeave={(e) => {
              if (!isStart && !isEnd) {
                (e.currentTarget as HTMLButtonElement).style.background = inRange ? '#dbeafe' : 'transparent';
              }
            }}
          >
            {format(day, 'd')}
          </button>
        );
      })}
    </div>
  );
};