export const seconds = (numberOfSeconds: number) => {
  return {
    toMilliseconds: () => numberOfSeconds * 1000,
    toSeconds: () => numberOfSeconds,
    toMinutes: () => numberOfSeconds / 60,
    toHours: () => numberOfSeconds / (60 * 60),
    toDays: () => numberOfSeconds / (60 * 60 * 24),
    toWeeks: () => numberOfSeconds / (60 * 60 * 24 * 7),
    toMonths: () => numberOfSeconds / (60 * 60 * 24 * 30),
    toYears: () => numberOfSeconds / (60 * 60 * 24 * 365),
  };
};

export const minutes = (numberOfMinutes: number) => {
  return {
    toMilliseconds: () => numberOfMinutes * 60 * 1000,
    toSeconds: () => numberOfMinutes * 60,
    toMinutes: () => numberOfMinutes,
    toHours: () => numberOfMinutes / 60,
    toDays: () => numberOfMinutes / (60 * 24),
    toWeeks: () => numberOfMinutes / (60 * 24 * 7),
    toMonths: () => numberOfMinutes / (60 * 24 * 30),
    toYears: () => numberOfMinutes / (60 * 24 * 365),
  };
};

export const hours = (numberOfHours: number) => {
  return {
    toMilliseconds: () => numberOfHours * 60 * 60 * 1000,
    toSeconds: () => numberOfHours * 60 * 60,
    toMinutes: () => numberOfHours * 60,
    toHours: () => numberOfHours,
    toDays: () => numberOfHours / 24,
    toWeeks: () => numberOfHours / (24 * 7),
    toMonths: () => numberOfHours / (24 * 30),
    toYears: () => numberOfHours / (24 * 365),
  };
};

export const days = (numberOfDays: number) => {
  return {
    toMilliseconds: () => numberOfDays * 24 * 60 * 60 * 1000,
    toSeconds: () => numberOfDays * 24 * 60 * 60,
    toMinutes: () => numberOfDays * 24 * 60,
    toHours: () => numberOfDays * 24,
    toDays: () => numberOfDays,
    toWeeks: () => numberOfDays / 7,
    toMonths: () => numberOfDays / 30,
    toYears: () => numberOfDays / 365,
  };
};

export const weeks = (numberOfWeeks: number) => {
  return {
    toMilliseconds: () => numberOfWeeks * 7 * 24 * 60 * 60 * 1000,
    toSeconds: () => numberOfWeeks * 7 * 24 * 60 * 60,
    toMinutes: () => numberOfWeeks * 7 * 24 * 60,
    toHours: () => numberOfWeeks * 7 * 24,
    toDays: () => numberOfWeeks * 7,
    toWeeks: () => numberOfWeeks,
    toMonths: () => numberOfWeeks / 4.34524,
    toYears: () => numberOfWeeks / 52.1429,
  };
};

export const months = (numberOfMonths: number) => {
  return {
    toMilliseconds: () => numberOfMonths * 30 * 24 * 60 * 60 * 1000,
    toSeconds: () => numberOfMonths * 30 * 24 * 60 * 60,
    toMinutes: () => numberOfMonths * 30 * 24 * 60,
    toHours: () => numberOfMonths * 30 * 24,
    toDays: () => numberOfMonths * 30,
    toWeeks: () => (numberOfMonths * 30) / 7,
    toMonths: () => numberOfMonths,
    toYears: () => numberOfMonths / 12,
  };
};

export const years = (numberOfYears: number) => {
  return {
    toMilliseconds: () => numberOfYears * 365 * 24 * 60 * 60 * 1000,
    toSeconds: () => numberOfYears * 365 * 24 * 60 * 60,
    toMinutes: () => numberOfYears * 365 * 24 * 60,
    toHours: () => numberOfYears * 365 * 24,
    toDays: () => numberOfYears * 365,
    toWeeks: () => (numberOfYears * 365) / 7,
    toMonths: () => (numberOfYears * 365) / 30,
    toYears: () => numberOfYears,
  };
};
