import { 
  startOfMonth, endOfMonth, startOfWeek, 
  endOfWeek, eachDayOfInterval, format 
} from 'date-fns';

export const getCalendarDays = (date: Date) => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });
  
  // If the grid is only 5 weeks, we force 6 for visual consistency
  let days = eachDayOfInterval({ start, end });
  if (days.length <= 35) {
    const lastDay = days[days.length - 1];
    const extraDays = eachDayOfInterval({
      start: new Date(lastDay.getTime() + 86400000),
      end: new Date(lastDay.getTime() + (7 * 86400000))
    });
    days = [...days, ...extraDays];
  }
  return days.slice(0, 42); // Always return 6 rows
};