import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from 'date-fns';

export const getCalendarDays = (date: Date): Date[] => {
  const start = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });

  let days = eachDayOfInterval({ start, end });

  // Force 6 rows (42 days) for visual consistency
  if (days.length <= 35) {
    const lastDay = days[days.length - 1];
    const extraDays = eachDayOfInterval({
      start: new Date(lastDay.getTime() + 86_400_000),
      end: new Date(lastDay.getTime() + 7 * 86_400_000),
    });
    days = [...days, ...extraDays];
  }

  return days.slice(0, 42);
};