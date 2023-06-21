import * as dayjs from "dayjs";

export const generateDates = (start, end, step, numberOfDays) => {
  const today = dayjs().startOf("day");
  const days = [];
  days.push(today);
  for (let i = 1; i < numberOfDays; i++) {
    days.push(today.add(i, "day"));
  }
  return days.map((day) => ({
    day: day.format("dddd"),
    times: generateTimeSlots(day, start, end, step, "").map((time) => ({
      time,
      selected: false,
    })),
  }));
};
export const generateTimeSlots = (day, start, end, step, format = "h:mm A") => {
  start = day.startOf("day").add(start, "hour");
  end = day.startOf("day").add(end, "hour");
  const timeSlots = [];
  while (!start.isAfter(end)) {
    timeSlots.push(start.format(format));
    start = start.add(step, "minute");
  }
  return timeSlots;
};
