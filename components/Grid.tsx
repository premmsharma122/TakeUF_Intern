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
  isWithinInterval 
} from 'date-fns';

export const Grid = ({ currentDate, range, setRange }: any) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
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
    <div className="grid grid-cols-7 gap-y-1">
      {calendarDays.map((day, idx) => {
        const isSelectedStart = range.start && isSameDay(day, range.start);
        const isSelectedEnd = range.end && isSameDay(day, range.end);
        const isInRange = range.start && range.end && isWithinInterval(day, { start: range.start, end: range.end });
        const isCurrentMonth = isSameMonth(day, monthStart);

        return (
          <button
            key={idx}
            onClick={() => handleDateClick(day)}
            className={`
              relative h-12 w-full flex items-center justify-center text-sm transition-all
              ${!isCurrentMonth ? 'text-zinc-300' : 'text-zinc-700'}
              ${isSelectedStart ? 'bg-blue-600 text-white rounded-l-md z-10' : ''}
              ${isSelectedEnd ? 'bg-blue-600 text-white rounded-r-md z-10' : ''}
              ${isInRange && !isSelectedStart && !isSelectedEnd ? 'bg-blue-50 text-blue-700' : ''}
              hover:bg-blue-100 hover:text-blue-900
            `}
          >
            {format(day, 'd')}
          </button>
        );
      })}
    </div>
  );
};